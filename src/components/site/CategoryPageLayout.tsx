import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmartImage } from "@/components/site/SmartImage";
import type { CategoryPageData } from "@/lib/category-pages";

function tierColor(tier: string) {
  const t = tier.toLowerCase();
  if (t.includes("a-list") || t.includes("legend") || t.includes("top") || t.includes("mega")) {
    return "bg-foreground text-background";
  }
  if (t.includes("mid") || t.includes("macro")) return "bg-foreground/15 text-foreground";
  return "bg-foreground/10 text-foreground/80";
}

export function CategoryPageLayout({
  data,
  afterHero,
}: {
  data: CategoryPageData;
  afterHero?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav variant="dark" />
        </div>
        <div className="px-6 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-40">
          <nav className="mb-8 overflow-x-auto whitespace-nowrap text-xs uppercase tracking-[0.25em] text-foreground/50">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/celebrity-booking-india" className="hover:text-foreground">Celebrity Booking India</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">{data.category}</span>
          </nav>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-foreground/50">
                {data.hero.eyebrow}
              </p>
              <h1 className="font-display text-[clamp(2.25rem,7vw,5.5rem)] font-bold leading-[0.95]">
                {data.hero.headline}{" "}
                {data.hero.italicTail && (
                  <span className="italic text-foreground/60">{data.hero.italicTail}</span>
                )}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                {data.hero.intro}
              </p>
              <ul className="mt-8 grid max-w-2xl gap-2 text-sm text-foreground/80 sm:text-base">
                {data.hero.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.45em] block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919599599699"
                  className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Get a Quote on WhatsApp →
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-sm font-medium transition-colors hover:bg-foreground/5"
                >
                  Submit Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {afterHero}

      {/* Why TKC */}
      <section className="border-b border-foreground/10 px-6 py-16 sm:px-10 sm:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="font-display text-foreground/30">02</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span>Why TKC Talent</span>
        </p>
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
          India's trusted partner for {data.category.toLowerCase()}.
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2">
          {[
            { h: "Direct Artist Access", b: "First-hand relationships with celebrity managers across Bollywood, music and digital — built over 20+ years. No middlemen, no inflated markups." },
            { h: "Transparent Pricing", b: "Honest, itemised quotes delivered within 30 minutes of your brief. No hidden layers, no surprise add-ons." },
            { h: "Legal Contracts & Compliance", b: "Artist riders, performance agreements, GST documentation and NDA handling — all managed in-house. Zero legal ambiguity." },
            { h: "End-to-End Execution", b: "Travel, 5-star hospitality, security, green room and on-ground coordination — managed by one dedicated TKC team, start to finish." },
            { h: "Trusted by HNI & Corporate India", b: "DLF, DS Group, BPTP, Omaxe, nine state governments and India's most discerning HNI families — our client roster speaks for itself." },
            { h: "Pan-India & International Reach", b: "Delhi · Gurgaon · Noida · Mumbai · Jaipur · Udaipur · Goa · Dubai — and destination locations worldwide." },
          ].map((c) => (
            <li key={c.h} className="bg-background p-7">
              <h3 className="font-display text-lg font-bold">{c.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.b}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Roster */}
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="font-display text-foreground/30">03</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span>Roster · 2026</span>
        </p>
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
          {data.category} — Full 2026 Roster
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-foreground/65 sm:text-base">
          Click any artist for full booking details, fee breakdown, event types and availability — or contact TKC Talent directly to discuss multiple options.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.artists.map((a) => {
            const card = (
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-colors hover:border-foreground/30 hover:bg-foreground/[0.02]">
                {a.image && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/[0.04]">
                    <SmartImage
                      containerClassName="absolute inset-0 h-full w-full"
                      src={a.image}
                      alt={`${a.name} — ${data.category} booking via TKC Talent`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className={`absolute left-3 top-3 inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur ${tierColor(a.tier)}`}>
                      {a.tier}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold leading-tight">{a.name}</h3>
                  {!a.image && (
                    <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${tierColor(a.tier)}`}>
                      {a.tier}
                    </span>
                  )}
                </div>
                <p className="mt-4 font-display text-2xl font-bold">{a.fee}</p>
                <p className="mt-2 text-sm text-foreground/65">{a.events}</p>
                {a.slug && (
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60 group-hover:text-foreground">
                    Book {a.name.split(" ")[0]} →
                  </span>
                )}
                </div>
              </div>
            );
            // Only Shah Rukh Khan currently has an internal page; link there, otherwise go to enquiry.
            if (a.slug === "shah-rukh-khan") {
              return (
                <li key={a.name}>
                  <Link to="/book-shah-rukh-khan" className="block h-full">
                    {card}
                  </Link>
                </li>
              );
            }
            return (
              <li key={a.name}>
                <a href="#contact" className="block h-full">
                  {card}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {/* How it works */}
      <section className="border-y border-foreground/10 bg-muted/30 px-6 py-16 sm:px-10 sm:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="font-display text-foreground/30">04</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span>Process</span>
        </p>
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
          How to book — 3 simple steps.
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-3">
          {[
            { n: "01", t: "Share Your Brief", d: "Tell us your event date, location, type and budget. We get to work immediately." },
            { n: "02", t: "Get Options & Proposal", d: "Within 30 minutes we confirm availability and send a tailored, itemised commercial proposal." },
            { n: "03", t: "Confirm, Contract & Execute", d: "We handle everything — legal contracts, logistics, hospitality, security and on-day coordination." },
          ].map((s) => (
            <li key={s.n} className="bg-background p-7">
              <p className="font-display text-sm font-medium text-foreground/40">{s.n}</p>
              <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Long-form */}
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
              <span className="font-display text-foreground/30">05</span>
              <span className="h-px flex-1 bg-foreground/15" />
              <span>The category</span>
            </p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[0.95]">
              {data.longForm.heading}
            </h2>
          </div>
          <div className="col-span-12 space-y-5 text-base leading-relaxed text-foreground/75 md:col-span-7 md:col-start-6 sm:text-lg">
            {data.longForm.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-foreground/10 px-6 py-16 sm:px-10 sm:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="font-display text-foreground/30">06</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span>FAQ</span>
        </p>
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
          {data.category} — Fees, process & availability.
        </h2>
        <dl className="mt-10 divide-y divide-foreground/15 border-y border-foreground/15">
          {data.faqs.map((f) => (
            <div key={f.q} className="py-7">
              <dt className="font-display text-lg font-bold sm:text-xl">{f.q}</dt>
              <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related */}
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="font-display text-foreground/30">07</span>
          <span className="h-px flex-1 bg-foreground/15" />
          <span>Explore</span>
        </p>
        <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
          Other celebrity categories.
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.related.map((r) => (
            <li key={r.to}>
              <Link
                to={r.to}
                className="group block rounded-2xl border border-foreground/10 bg-background p-7 transition-colors hover:border-foreground/30 hover:bg-foreground/[0.02]"
              >
                <h3 className="font-display text-xl font-bold">{r.label}</h3>
                <p className="mt-2 text-sm text-foreground/65">{r.sub}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60 group-hover:text-foreground">
                  View category →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-foreground/10 bg-foreground px-6 py-16 text-background sm:px-10 sm:py-24"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
              Start your booking now.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg">
              Share your event date, location, type and budget. Our team responds within 30 minutes between 9 AM and 11 PM IST, 7 days a week.
            </p>
          </div>
          <div className="col-span-12 flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
            <a
              href="tel:+919599599699"
              className="inline-flex h-12 items-center rounded-full border border-background/30 px-6 text-sm font-medium text-background hover:bg-background/10"
            >
              Call: +91 95995 99699
            </a>
            <a
              href="mailto:hello@tkctalent.com"
              className="inline-flex h-12 items-center rounded-full bg-background px-7 text-sm font-medium text-foreground hover:opacity-90"
            >
              hello@tkctalent.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}