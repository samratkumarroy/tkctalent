import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TKC Talent — Bollywood Celebrity Booking by The Kabir Company" },
      {
        name: "description",
        content:
          "TKC Talent by The Kabir Company — India's trusted Bollywood celebrity booking agency. Book actors, singers, performers and influencers for weddings, corporate events, brand launches and promotions across Mumbai, Delhi, Bengaluru and worldwide.",
      },
      { name: "author", content: "The Kabir Company" },
      { name: "keywords", content: "Bollywood celebrity booking, hire Bollywood actors, celebrity management India, wedding celebrity booking, corporate event celebrity, brand endorsement India, The Kabir Company, TKC Talent, celebrity booking agency Mumbai" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#0a0a0a" },
      // GEO targeting
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "Mumbai, India" },
      { name: "geo.position", content: "19.0760;72.8777" },
      { name: "ICBM", content: "19.0760, 72.8777" },
      // Open Graph
      { property: "og:site_name", content: "TKC Talent" },
      { property: "og:title", content: "TKC Talent — Bollywood Celebrity Booking" },
      {
        property: "og:description",
        content: "India's trusted Bollywood celebrity booking agency by The Kabir Company. Hire stars for weddings, corporate events and brand launches.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tkctalent.com/" },
      { property: "og:image", content: "https://tkctalent.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@tkctalent" },
      { name: "twitter:title", content: "TKC Talent — Bollywood Celebrity Booking" },
      { name: "twitter:description", content: "Hire Bollywood celebrities for weddings, corporate events and brand launches across India." },
      { name: "twitter:image", content: "https://tkctalent.com/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
