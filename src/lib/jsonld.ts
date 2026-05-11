import { z } from "zod";

/**
 * JSON-LD validation layer.
 *
 * Goal: catch malformed structured data before it reaches Google.
 * - Pages call `validateJsonLd("route-name", doc)` instead of using their
 *   raw JSON-LD object. Validation runs immediately at module load.
 * - In dev, errors are surfaced via `console.error` with route + path hints.
 * - In prod the doc is returned unchanged so the page still ships.
 * - `getJsonLdErrors()` exposes accumulated errors for the prebuild gate
 *   (`scripts/validate-jsonld.mjs`) which exits non-zero on any failure.
 */

/* -------------------- Schemas -------------------- */

const PersonOrOrg = z.object({
  "@type": z.enum(["Person", "Organization"]),
  name: z.string().min(1),
});

const ImageObject = z.union([
  z.string().url(),
  z.object({
    "@type": z.literal("ImageObject"),
    url: z.string().url(),
  }),
]);

const Question = z.object({
  "@type": z.literal("Question"),
  name: z.string().min(1),
  acceptedAnswer: z.object({
    "@type": z.literal("Answer"),
    text: z.string().min(1),
  }),
});

const FaqPage = z.object({
  "@type": z.literal("FAQPage"),
  mainEntity: z.array(Question).min(1, "FAQPage.mainEntity must contain at least one Question"),
});

const ListItem = z.object({
  "@type": z.literal("ListItem"),
  position: z.number().int().positive(),
  name: z.string().min(1),
  item: z.string().url().optional(),
  url: z.string().url().optional(),
});

const BreadcrumbList = z
  .object({
    "@type": z.literal("BreadcrumbList"),
    itemListElement: z.array(ListItem).min(2, "BreadcrumbList needs at least 2 items"),
  })
  .superRefine((bc, ctx) => {
    bc.itemListElement.forEach((it, idx) => {
      if (it.position !== idx + 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["itemListElement", idx, "position"],
          message: `BreadcrumbList positions must be 1-indexed and contiguous (got ${it.position} at index ${idx})`,
        });
      }
    });
  });

const Article = z.object({
  "@type": z.enum(["Article", "NewsArticle", "BlogPosting"]),
  headline: z.string().min(1).max(110, "Article.headline should be ≤110 chars for Google"),
  description: z.string().min(1).optional(),
  author: z.union([PersonOrOrg, z.array(PersonOrOrg)]).optional(),
  publisher: PersonOrOrg.optional(),
  image: z.union([ImageObject, z.array(ImageObject)]).optional(),
  datePublished: z.string().optional(),
  dateModified: z.string().optional(),
  mainEntityOfPage: z.union([z.string().url(), z.object({}).passthrough()]).optional(),
}).passthrough();

const Organization = z.object({
  "@type": z.literal("Organization"),
  name: z.string().min(1),
  url: z.string().url().optional(),
  logo: ImageObject.optional(),
  sameAs: z.array(z.string().url()).optional(),
}).passthrough();

const ItemListSchema = z.object({
  "@type": z.literal("ItemList"),
  name: z.string().min(1).optional(),
  itemListElement: z.array(ListItem).min(1),
}).passthrough();

/** Map @type → Zod schema. Unknown types pass through. */
const SCHEMAS: Record<string, z.ZodTypeAny> = {
  FAQPage: FaqPage,
  BreadcrumbList,
  Article,
  NewsArticle: Article,
  BlogPosting: Article,
  Organization,
  ItemList: ItemListSchema,
};

/* -------------------- Runner -------------------- */

export type JsonLdError = {
  route: string;
  type: string;
  path: string;
  message: string;
};

const errors: JsonLdError[] = [];

export function getJsonLdErrors(): JsonLdError[] {
  return errors.slice();
}

export function clearJsonLdErrors(): void {
  errors.length = 0;
}

function validateNode(route: string, node: unknown): void {
  if (!node || typeof node !== "object") return;
  const type = (node as { "@type"?: unknown })["@type"];
  if (typeof type !== "string") return;
  const schema = SCHEMAS[type];
  if (!schema) return;
  const result = schema.safeParse(node);
  if (result.success) return;
  for (const issue of result.error.issues) {
    errors.push({
      route,
      type,
      path: issue.path.join("."),
      message: issue.message,
    });
  }
}

/**
 * Validate a JSON-LD document (single node OR { @graph: [...] }) and return it.
 * Always returns the original doc so callers can pass straight to JSON.stringify.
 */
export function validateJsonLd<T>(route: string, doc: T): T {
  const root = doc as unknown as { "@graph"?: unknown[] } & Record<string, unknown>;
  if (Array.isArray(root?.["@graph"])) {
    root["@graph"].forEach((n) => validateNode(route, n));
  } else {
    validateNode(route, root);
  }

  // Dev surfacing — only log issues introduced by this call.
  // We log all current errors for the route on every call; cheap and clear.
  const isDev =
    typeof import.meta !== "undefined" &&
    (import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV;
  if (isDev) {
    const mine = errors.filter((e) => e.route === route);
    if (mine.length) {
      // eslint-disable-next-line no-console
      console.error(
        `[JSON-LD] ${mine.length} issue(s) on "${route}":\n` +
          mine.map((e) => `  • ${e.type}.${e.path || "(root)"} — ${e.message}`).join("\n"),
      );
    }
  }
  return doc;
}