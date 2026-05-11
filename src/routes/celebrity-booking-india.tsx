import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroStage from "@/assets/booking/hero-stage.png";
import rosterCollage from "@/assets/booking/roster-collage.png";
import directorClipboard from "@/assets/booking/director-clipboard.png";
import { validateJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/celebrity-booking-india`;

const faqs = [
  {
    q: "How much does it cost to book a celebrity in India?",
    a: "Costs vary from ₹5 Lakhs to ₹4 Cr+ depending on the celebrity, event type and duration.",
  },
  {
    q: "How early should I book a celebrity?",
    a: "Ideally 30–90 days in advance for the best availability and pricing.",
  },
  {
    q: "Can celebrities attend weddings?",
    a: "Yes, celebrities are frequently booked for weddings, sangeet nights and private events.",
  },
  {
    q: "Do you manage international bookings?",
    a: "Yes, TKC Talent handles both domestic and global bookings.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      headline:
        "Celebrity Booking India: Complete Guide to Hiring Celebrities for Events, Weddings & Corporate Shows",
      description:
        "A complete guide to celebrity booking in India — costs, process, types of celebrities, and how to hire Bollywood stars for weddings, corporate events and brand launches.",
      author: { "@type": "Organization", name: "TKC Talent" },
      publisher: {
        "@type": "Organization",
        name: "TKC Talent",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg` },
      },
      mainEntityOfPage: PAGE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Celebrity Booking India",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/celebrity-booking-india")({
  head: () => ({
    meta: [
      {
        title:
          "Celebrity Booking India — Hire Bollywood Stars for Events & Weddings | TKC Talent",
      },
      {
        name: "description",
        content:
          "Complete guide to celebrity booking in India. Learn costs, process, and how to hire Bollywood actors, singers and influencers for weddings, corporate events and brand launches.",
      },
      {
        name: "keywords",
        content:
          "celebrity booking India, hire Bollywood celebrity, celebrity booking cost, wedding celebrity booking, corporate celebrity booking, brand endorsement India, TKC Talent",
      },
      {
        property: "og:title",
        content: "Celebrity Booking India — The Complete Guide",
      },
      {
        property: "og:description",
        content:
          "How to hire Bollywood celebrities, singers and influencers for weddings, corporate events and brand campaigns in India.",
      },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(validateJsonLd("/celebrity-booking-india", jsonLd)) },
    ],
  }),
  component: CelebrityBookingPage,
});

function BookingImage({
  src,
  alt,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative w-full ${ratio} overflow-hidden rounded-2xl border border-foreground/10 bg-muted`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
      <span className="font-display text-foreground/30">{n}</span>
      <span className="h-px flex-1 bg-foreground/15" />
      <span>{children}</span>
    </p>
  );
}

const celebTypes = [
  {
    icon: "🎬",
    title: "Bollywood Celebrities",
    body: "The most in-demand for weddings, endorsements and corporate events.",
  },
  {
    icon: "🎤",
    title: "Singers & Performers",
    body: "Ideal for live concerts, sangeet nights and entertainment-led events.",
  },
  {
    icon: "🏏",
    title: "Sports Personalities",
    body: "Best suited for motivational events, brand campaigns and corporate engagements.",
  },
  {
    icon: "📱",
    title: "Influencers & Creators",
    body: "Perfect for youth-focused campaigns, product launches and social promotions.",
  },
  {
    icon: "😂",
    title: "Comedians & Hosts",
    body: "Great for corporate entertainment and private events.",
  },
];

const steps = [
  { n: "01", t: "Define Event Requirements", d: "Event type, location, budget and expectations." },
  { n: "02", t: "Shortlist Celebrities", d: "Based on audience, brand fit and availability." },
  { n: "03", t: "Check Availability & Fees", d: "Coordinating directly with celebrity managers." },
  { n: "04", t: "Negotiate Terms", d: "Appearance fee, deliverables and logistics." },
  { n: "05", t: "Contract & Confirmation", d: "Legal agreement and payment terms." },
  { n: "06", t: "Event Execution", d: "End-to-end coordination and delivery." },
];

const pricing = [
  { tier: "Bollywood Celebrities", range: "₹2 Cr – ₹4 Cr+", note: "per appearance" },
  { tier: "Singers", range: "₹50 L – ₹14 Cr", note: "per show" },
  { tier: "Comedians", range: "₹20 L – ₹50 L", note: "per show" },
  { tier: "Influencers", range: "₹5 L – ₹50 L", note: "per campaign" },
];

function CelebrityBookingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header / Hero */}
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav variant="dark" />
        </div>
        <div className="px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40">
          <nav className="mb-10 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Celebrity Booking India</span>
          </nav>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
                The Complete Guide · 2026
              </p>
              <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.92]">
                Celebrity Booking <span className="italic text-foreground/60">in India.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                A complete guide to hiring Bollywood actors, singers, performers and
                influencers for weddings, corporate events and brand launches —
                with real costs, process and insider playbooks from TKC Talent.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Get a Quote
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-sm font-medium transition-colors hover:bg-foreground/5"
                >
                  Speak to an Expert
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <BookingImage src={heroStage} alt="Celebrity performing on stage" ratio="aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="01">Overview</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              What is celebrity booking in India?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
              Celebrity booking in India refers to hiring well-known personalities —
              Bollywood actors, singers, sports icons and influencers — for events,
              endorsements and appearances. From corporate stages in Delhi NCR to
              destination weddings in Udaipur, celebrities deliver four things at once:
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10">
              {["Instant brand value", "Media visibility", "Audience engagement", "Premium positioning"].map((x) => (
                <li key={x} className="bg-background p-6 font-display text-lg font-medium">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why important */}
      <section className="border-y border-foreground/10 bg-muted/30 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <SectionLabel n="02">Why it matters</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              Not glamour. Strategic investment.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              h: "For Corporate Events",
              items: ["Boost brand credibility", "Increase event visibility", "Drive PR & media coverage", "Enhance audience engagement"],
            },
            {
              h: "For Weddings",
              items: ["Create unforgettable moments", "Add luxury & exclusivity", "Impress guests with star performances"],
            },
            {
              h: "For Brands",
              items: ["Build trust through endorsements", "Increase reach & awareness", "Improve campaign performance"],
            },
          ].map((b) => (
            <div key={b.h} className="rounded-2xl border border-foreground/10 bg-background p-8">
              <h3 className="font-display text-2xl font-bold">{b.h}</h3>
              <ul className="mt-5 space-y-2 text-sm text-foreground/75">
                {b.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-foreground/40">→</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Types */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <SectionLabel n="03">Roster</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              Types of celebrities you can book.
            </h2>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {celebTypes.map((c) => (
            <li key={c.title} className="bg-background p-8">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="mt-5 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.body}</p>
            </li>
          ))}
          <li className="relative bg-background p-2">
            <BookingImage src={rosterCollage} alt="Collage of celebrities available for booking" ratio="aspect-square" />
          </li>
        </ul>
      </section>

      {/* Choose right celebrity */}
      <section className="border-y border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel n="04">Selection</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              Choosing the right celebrity.
            </h2>
            <div className="mt-8">
              <BookingImage src={directorClipboard} alt="Event planning clipboard with celebrity selection notes" ratio="aspect-[4/5]" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {[
                ["Define your objective", "Brand visibility, entertainment, or audience engagement?"],
                ["Understand your audience", "Match the celebrity to your audience demographics."],
                ["Align brand image", "Ensure the celebrity's persona aligns with your event."],
                ["Set a realistic budget", "Top celebrities command premium fees — plan accordingly."],
              ].map(([t, d], i) => (
                <li key={t} className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium sm:text-2xl">{t}</h3>
                  </div>
                  <p className="mt-2 pl-10 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    {d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <SectionLabel n="05">Process</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              The booking process — step by step.
            </h2>
          </div>
        </div>
        <ol className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8">
              <p className="font-display text-sm font-medium text-foreground/40">{s.n}</p>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-foreground/60">
          Working with a professional agency like TKC Talent simplifies this entire process —
          from shortlisting to on-ground delivery.
        </p>
      </section>

      {/* Pricing */}
      <section className="border-y border-foreground/10 bg-foreground text-background px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/50">
              <span className="font-display text-background/40">06</span>
              <span className="h-px flex-1 bg-background/20" />
              <span>Cost</span>
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
              What does it actually cost?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Celebrity fees vary based on popularity, demand and event type.
              Indicative ranges below — final cost depends on availability, location and scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ul className="divide-y divide-background/15 rounded-2xl border border-background/15">
            {pricing.map((p) => (
              <li key={p.tier} className="flex items-baseline justify-between gap-6 p-6">
                <span className="font-display text-lg font-medium">{p.tier}</span>
                <span className="text-right">
                  <span className="block font-display text-2xl font-bold">{p.range}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-background/50">{p.note}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-background/15 p-8">
            <h3 className="font-display text-xl font-bold">Additional costs</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/80">
              {[
                ["GST", "18% on appearance fee"],
                ["Travel", "Business class, return"],
                ["Stay", "5-star accommodation"],
                ["Production", "Tech, stage & rider"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-background/10 pb-2">
                  <span>{k}</span>
                  <span className="text-background/60">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Factors + Negotiation */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <SectionLabel n="07">Factors</SectionLabel>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
              What moves the fee.
            </h2>
            <ul className="mt-8 space-y-3 text-base text-foreground/80">
              {[
                "Popularity and demand",
                "Event type (wedding, corporate, brand)",
                "Duration of appearance",
                "Location and travel",
                "Production & technical requirements",
              ].map((x) => (
                <li key={x} className="flex gap-3 border-b border-foreground/10 pb-3">
                  <span className="text-foreground/40">●</span> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <SectionLabel n="08">Negotiation</SectionLabel>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
              Tips that actually work.
            </h2>
            <ul className="mt-8 space-y-3 text-base text-foreground/80">
              {[
                "Be clear about your budget",
                "Stay flexible with dates",
                "Consider mid-tier celebrities for better ROI",
                "Highlight brand exposure opportunities",
                "Work with experienced agencies",
              ].map((x) => (
                <li key={x} className="flex gap-3 border-b border-foreground/10 pb-3">
                  <span className="text-foreground/40">→</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="border-y border-foreground/10 bg-muted/30 px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel n="09">Legal</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95]">
              Contracts that protect everyone.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/70">
              A proper contract avoids disputes and locks in expectations for both parties.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ul className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2">
              {[
                "Appearance details & duration",
                "Payment terms",
                "Usage rights (photos / videos)",
                "Cancellation policy",
                "Force majeure clause",
                "Confidentiality (NDA)",
              ].map((x) => (
                <li key={x} className="bg-background p-6 font-display text-base font-medium">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TKC Helps */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <BookingImage src={heroStage} alt="TKC Talent producing a celebrity event" ratio="aspect-[4/5]" />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <SectionLabel n="10">How we help</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95]">
              From shortlist to standing ovation.
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                ["Direct access", "To celebrity managers across Bollywood."],
                ["Transparent pricing", "No hidden agents or middlemen markups."],
                ["End-to-end execution", "Travel, hospitality, security, on-ground."],
                ["Luxury expertise", "Two decades inside corporate & private events."],
              ].map(([t, d]) => (
                <li key={t} className="border-b border-foreground/10 pb-5">
                  <h3 className="font-display text-xl font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="11">FAQs</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95]">
              Frequently asked questions.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {faqs.map((f, i) => (
                <li key={f.q} className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-foreground/40">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium sm:text-2xl">{f.q}</h3>
                  </div>
                  <p className="mt-3 pl-10 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    {f.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="quote"
        className="bg-foreground px-6 py-24 text-background sm:px-10 sm:py-32"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-background/50">
              Book Today
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95]">
              Looking to hire a celebrity for your event in India?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Get exclusive access, the best pricing, and complete event management
              support from TKC Talent.
            </p>
            <div id="contact" className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:hello@tkctalent.com?subject=Celebrity%20Booking%20Quote"
                className="inline-flex h-12 items-center rounded-full bg-background px-7 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Get a Quote
              </a>
              <a
                href="mailto:hello@tkctalent.com?subject=Speak%20to%20an%20Expert"
                className="inline-flex h-12 items-center rounded-full border border-background/30 px-7 text-sm font-medium transition-colors hover:bg-background/10"
              >
                Speak to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}