/**
 * Build-time JSON-LD validation gate.
 *
 * Loads every route file with stubbed React/TanStack/asset imports, runs each
 * route's `head()` to trigger `validateJsonLd()` calls, then fails if any
 * structured-data errors were collected.
 *
 * Run via: `bun run scripts/validate-jsonld.ts`
 */

import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const ROUTES_DIR = join(ROOT, "src/routes");

const ROUTE_FILES = readdirSync(ROUTES_DIR)
  .filter((f) => f.endsWith(".tsx") && !f.startsWith("__"))
  .map((f) => join(ROUTES_DIR, f));

console.log(`[validate-jsonld] loading ${ROUTE_FILES.length} route(s)…`);

for (const file of ROUTE_FILES) {
  try {
    await import(file);
  } catch (err) {
    console.error(`[validate-jsonld] failed to load ${file}:`, err);
    process.exit(2);
  }
}

// IMPORTANT: import via the same alias the routes use, otherwise Bun treats
// it as a separate module instance and the error registry is empty.
const { getJsonLdErrors } = await import("@/lib/jsonld");
const errs = getJsonLdErrors();

if (errs.length === 0) {
  console.log("[validate-jsonld] ✓ all JSON-LD valid");
  process.exit(0);
}

console.error(`\n[validate-jsonld] ✗ ${errs.length} JSON-LD issue(s):\n`);
for (const e of errs) {
  console.error(`  • [${e.route}] ${e.type}.${e.path || "(root)"} — ${e.message}`);
}
process.exit(1);