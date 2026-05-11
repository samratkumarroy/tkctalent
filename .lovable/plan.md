## Issue

The new `/book-alia-bhatt` and `/book-kareena-kapoor` routes exist but aren't nested under "Bollywood Actresses" in the navigation. Currently only "Bollywood Actors" has a nested submenu (with "Book Shah Rukh Khan"); "Bollywood Actresses" is a flat link.

## Plan

**Update `src/components/site/Nav.tsx`** — convert the "Bollywood Actresses" entry into a `SubItemWithChildren` with a nested submenu, mirroring the "Bollywood Actors → Book Shah Rukh Khan" pattern:

```ts
{
  label: "Bollywood Actresses",
  to: "/bollywood-actress-booking",
  children: [
    { label: "Book Alia Bhatt", to: "/book-alia-bhatt" },
    { label: "Book Kareena Kapoor Khan", to: "/book-kareena-kapoor" },
  ],
} as SubItemWithChildren,
```

Both desktop hover-flyout and mobile collapsible drawer already render nested `SubItemWithChildren` children — no other component changes needed.

**Optional polish (confirm before applying):**
- Add the same two profile links inside the `/bollywood-actress-booking` page body (featured cards / inline links) so users landing on the category overview can jump straight to the profiles.

No other files need to change — the routes, sitemap, and footer are already in place.