import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout } from "@/components/site/CategoryPageLayout";
import { CATEGORY_BY_SLUG, buildCategoryJsonLd } from "@/lib/category-pages";

const data = CATEGORY_BY_SLUG["singer-booking-india"]!;
const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/singer-booking-india`;

export const Route = createFileRoute("/singer-booking-india")({
  head: () => ({
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { name: "keywords", content: `${data.primaryKw}, ${data.secondaryKws}` },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: data.title },
      { name: "twitter:description", content: data.description },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildCategoryJsonLd(data)),
      },
    ],
  }),
  component: () => <CategoryPageLayout data={data} />,
});
