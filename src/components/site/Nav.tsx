import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type SubItem = { label: string; to: string };
type Item = {
  label: string;
  to: string;
  hash?: boolean;
  children?: SubItem[];
};

type SubItemWithChildren = SubItem & { children?: SubItem[] };

const items: Item[] = [
  { label: "Home", to: "/" },
  {
    label: "Celebrity Booking India",
    to: "/celebrity-booking-india",
    children: [
      { label: "Overview", to: "/celebrity-booking-india" },
      {
        label: "Bollywood Actors",
        to: "/bollywood-celebrity-booking",
        children: [
          { label: "Book Shah Rukh Khan", to: "/book-shah-rukh-khan" },
        ],
      } as SubItemWithChildren,
      {
        label: "Bollywood Actresses",
        to: "/bollywood-actress-booking",
        children: [
          { label: "Book Alia Bhatt", to: "/book-alia-bhatt" },
          { label: "Book Kareena Kapoor Khan", to: "/book-kareena-kapoor" },
        ],
      } as SubItemWithChildren,
      { label: "Singers & Performers", to: "/singer-booking-india" },
      { label: "Stand-Up Comedians", to: "/comedian-booking-india" },
      { label: "Celebrity DJs", to: "/celebrity-dj-booking" },
      { label: "Pan-India Celebrities", to: "/pan-india-celebrity-booking" },
      { label: "Digital Influencers", to: "/influencer-booking-india" },
    ],
  },
  { label: "Celebrity Charges", to: "/celebrity-charges" },
  { label: "Newsroom", to: "/newsroom" },
  { label: "Services", to: "/#services", hash: true },
  { label: "Pricing", to: "/#pricing", hash: true },
  { label: "Locations", to: "/#locations", hash: true },
  { label: "Contact", to: "/#book", hash: true },
];

export function Nav({ variant = "light" }: { variant?: "light" | "dark" } = {}) {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const onDark = variant === "light"; // light text used over dark/hero backgrounds
  const textColor = onDark ? "text-brand-foreground" : "text-foreground";
  const linkColor = onDark ? "text-brand-foreground/90" : "text-foreground/80";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <nav className="flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <Link to="/" className={`font-display text-xl font-bold ${textColor}`}>
          TKC<span className="ml-1 align-super text-[0.6em]">Talent</span>
        </Link>
        <ul className={`hidden gap-8 text-sm md:flex ${linkColor}`}>
          {items.map((item) => (
            <li key={item.label} className="relative group">
              {item.children ? (
                <>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1 transition-opacity hover:opacity-60"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <ul
                    className="invisible absolute left-1/2 top-full z-50 mt-3 min-w-64 -translate-x-1/2 rounded-xl border border-foreground/10 bg-background p-2 text-foreground opacity-0 shadow-2xl ring-1 ring-foreground/5 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    {item.children.map((child) => (
                      <li key={child.to} className="relative group/sub">
                        {(child as SubItemWithChildren).children ? (
                          <>
                            <Link
                              to={child.to}
                              className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background group-hover/sub:bg-foreground group-hover/sub:text-background"
                              activeOptions={{ exact: true }}
                              activeProps={{ className: "bg-foreground text-background" }}
                            >
                              {child.label}
                              <ChevronDown className="h-3.5 w-3.5 -rotate-90" aria-hidden="true" />
                            </Link>
                            <ul className="invisible absolute left-full top-0 z-50 ml-1 min-w-60 rounded-xl border border-foreground/10 bg-background p-2 text-foreground opacity-0 shadow-2xl ring-1 ring-foreground/5 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100">
                              {(child as SubItemWithChildren).children!.map((sub) => (
                                <li key={sub.to}>
                                  <Link
                                    to={sub.to}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
                                    activeOptions={{ exact: true }}
                                    activeProps={{ className: "bg-foreground text-background" }}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                        <Link
                          to={child.to}
                          className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
                          activeOptions={{ exact: true }}
                          activeProps={{ className: "bg-foreground text-background" }}
                        >
                          {child.label}
                        </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.hash ? (
                <a href={item.to} className="transition-opacity hover:opacity-60">
                  {item.label}
                </a>
              ) : (
                <Link to={item.to} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-display text-sm font-bold text-brand-foreground shadow-lg transition hover:scale-[1.03] hover:opacity-90 md:inline-flex"
        >
          Book Now <span aria-hidden="true">→</span>
        </a>
        {/* placeholder to balance flex on mobile (real button is fixed below) */}
        <span aria-hidden="true" className="h-11 w-11 md:hidden" />
      </nav>

      {/* Fixed hamburger — mix-blend-difference auto-contrasts on any background */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((v) => !v)}
        style={{ mixBlendMode: open ? "normal" : "difference" }}
        className="fixed right-4 top-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20 transition active:scale-95 md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in drawer from right */}
      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[85%] max-w-sm flex-col bg-background text-foreground shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="font-display text-xl font-bold">
            TKC<span className="ml-1 align-super text-[0.6em]">Talent</span>
          </span>
        </div>
        <ul className="mt-8 flex flex-col gap-1 px-4 text-base">
          {items.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubOpen((v) => (v === item.label ? null : item.label))
                    }
                    aria-expanded={mobileSubOpen === item.label}
                    className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-3 transition hover:bg-foreground/5"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubOpen === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileSubOpen === item.label && (
                    <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-foreground/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="flex min-h-10 items-center rounded-lg px-3 py-2 text-sm transition hover:bg-foreground/5"
                            activeOptions={{ exact: true }}
                            activeProps={{ className: "bg-foreground text-background hover:bg-foreground" }}
                          >
                            {child.label}
                          </Link>
                          {(child as SubItemWithChildren).children && (
                            <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-foreground/10 pl-3">
                              {(child as SubItemWithChildren).children!.map((sub) => (
                                <li key={sub.to}>
                                  <Link
                                    to={sub.to}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-9 items-center rounded-lg px-3 py-2 text-xs text-foreground/80 transition hover:bg-foreground/5"
                                    activeOptions={{ exact: true }}
                                    activeProps={{ className: "bg-foreground text-background hover:bg-foreground" }}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.hash ? (
                <a
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 py-3 transition hover:bg-foreground/5"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 py-3 transition hover:bg-foreground/5"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto p-6">
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-display text-sm font-bold text-brand-foreground shadow-lg"
          >
            Book Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    </>
  );
}