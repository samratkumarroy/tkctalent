import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TalkContact } from "@/components/site/TalkContact";
import { Actress3DCarousel } from "@/components/site/Actress3DCarousel";
import { validateJsonLd } from "@/lib/jsonld";
import k1 from "@/assets/kareena/kareena-1.png";
import k2 from "@/assets/kareena/kareena-2.png";
import k3 from "@/assets/kareena/kareena-3.png";
import k4 from "@/assets/kareena/kareena-4.png";
import k5 from "@/assets/kareena/kareena-5.png";
import k6 from "@/assets/kareena/kareena-6.png";
import k7 from "@/assets/kareena/kareena-7.png";
import k8 from "@/assets/kareena/kareena-8.png";
import deepikaImg from "@/assets/celebrities/deepika-padukone.webp";

const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/book-kareena-kapoor`;
const HERO = k2;
const THUMB = k1;
const INLINE_1 = k3;
const INLINE_2 = k6;

const slides = [
  { src: k1, caption: "Editorial Portrait" },
  { src: k2, caption: "Luxury Brand Campaign" },
  { src: k3, caption: "Red Carpet Moment" },
  { src: k4, caption: "Magazine Cover" },
  { src: k5, caption: "Awards Night" },
  { src: k6, caption: "Film Promotion" },
  { src: k7, caption: "Lakmé Showstopper" },
  { src: k8, caption: "Public Appearance" },
];

const reasons = [
  { title: "Bollywood Royalty", body: "Daughter of Randhir Kapoor and Babita, married to Saif Ali Khan — Kareena Kapoor Khan carries the most recognised surname in Indian cinema. That legacy commands instant respect at every event." },
  { title: "National Film Award Winner", body: "Twenty-five years in the industry, two decades at the top, and a National Film Award–calibre body of work spanning <em>Jab We Met</em>, <em>3 Idiots</em>, <em>Veere Di Wedding</em>, <em>Laal Singh Chaddha</em> and <em>The Crew</em>." },
  { title: "The Luxury Brand Magnet", body: "Long-running ambassadorships with Kama Ayurveda, Pantene, Lakmé, Puma and Magnum — Kareena's signature elegance translates seamlessly to luxury, beauty, fashion and lifestyle campaigns." },
  { title: "Forbes & Forbes-listed Influence", body: "Forbes India Celebrity 100 fixture, most-searched celebrity on Google India multiple years running, and one of the highest-paid actresses in the country." },
  { title: "Pristine On-Stage Presence", body: "From Lakmé Fashion Week showstopper walks to keynote moments at lifestyle conferences, Kareena's poise and stage craft are unmatched in her generation." },
  { title: "Trusted by HNI Wedding Families", body: "TKC Talent has executed multiple Kareena Kapoor Khan appearances at India's most exclusive private weddings — every booking under NDA, every detail handled with discretion." },
];

const events = [
  { icon: "💍", title: "Luxury Weddings & Sangeet", body: "Kareena Kapoor Khan brings unmatched glamour to high-profile wedding receptions, sangeet evenings and milestone celebrations across Delhi NCR, Mumbai, Jaipur, Udaipur, Goa and international destination weddings." },
  { icon: "🏢", title: "Corporate Events & Annual Days", body: "Keynote presence and hosted-segment appearances for corporate galas, dealer conferences, leadership summits and annual day celebrations." },
  { icon: "🎯", title: "Brand Launches & Activations", body: "Single-campaign and annual ambassador contracts across luxury, beauty, fashion, FMCG, wellness and lifestyle." },
  { icon: "👗", title: "Fashion Weeks & Showstopper Roles", body: "Showstopper walks for designer launches at Lakmé Fashion Week, India Couture Week, Wills Lifestyle India Fashion Week and luxury maison previews." },
  { icon: "🎬", title: "Film Premieres & OTT Launches", body: "On-stage promotional appearances, OTT platform launches and city-tour event coverage for studios and OTT clients." },
  { icon: "🌍", title: "International & NRI Events", body: "International brand activations, NRI community events and Indian-origin festivals — TKC Talent manages international logistics, visas and on-ground execution end-to-end." },
];

const steps = [
  { n: "01", title: "Share Your Brief", body: "Tell us your event date, venue, guest profile and budget. Submit via WhatsApp, the booking form or a direct call. Our team responds within 30 minutes during business hours." },
  { n: "02", title: "We Negotiate & Confirm", body: "TKC Talent contacts Kareena Kapoor Khan's management directly, confirms availability and returns a fully itemised proposal — artist fee, riders, travel, hospitality and security." },
  { n: "03", title: "Sign, Pay, Execute", body: "On approval, we issue the GST-compliant performance contract. Once signed and the advance is received, our team takes over end-to-end execution up to the on-stage moment." },
];

const fees = [
  { event: "Wedding / Private Celebration (30–60 min)", fee: "₹1.5 Cr – ₹2.5 Cr+", lead: "90–120 days" },
  { event: "Wedding / Private Celebration (60–90 min)", fee: "₹2.5 Cr – ₹3.5 Cr+", lead: "120+ days" },
  { event: "Corporate Event / Conference Appearance", fee: "₹1.5 Cr – ₹2.5 Cr", lead: "60–90 days" },
  { event: "Brand Launch / Product Activation", fee: "₹2 Cr – ₹3 Cr+", lead: "90–120 days" },
  { event: "Brand Endorsement (Annual Campaign)", fee: "₹10 Cr – ₹18 Cr+ / year", lead: "6–12 months" },
  { event: "Brand Endorsement (Single Campaign)", fee: "₹4 Cr – ₹7 Cr+", lead: "3–6 months" },
  { event: "Fashion Week Showstopper", fee: "₹1 Cr – ₹2 Cr", lead: "60–90 days" },
  { event: "International Appearance", fee: "₹3 Cr – ₹5 Cr+ + intl. logistics", lead: "120+ days" },
];

const included = [
  { icon: "📋", title: "Initial Availability Check", body: "We contact Kareena Kapoor Khan's management team immediately upon receiving your brief — confirmation typically within 24 hours." },
  { icon: "💼", title: "Commercial Negotiation", body: "We negotiate the full commercial package — artist fee, deliverables, exclusivity clauses and content rights." },
  { icon: "📝", title: "Legal Contracts & Compliance", body: "Performance agreements, artist riders, NDA/confidentiality clauses and GST-compliant invoicing handled in-house." },
  { icon: "✈️", title: "Travel & Logistics", body: "Business class travel, airport transfers and convoy coordination — managed entirely by TKC Talent." },
  { icon: "🏨", title: "5-Star Hospitality", body: "Suite-level hotel accommodation for Kareena and core entourage, F&B per rider, and check-in/check-out coordination." },
  { icon: "🔒", title: "Personal Security", body: "Coordination of personal security detail, crowd management with venue security and on-day briefing with TKC's coordinator." },
  { icon: "🎪", title: "Green Room & Backstage", body: "Full green room setup per rider — F&B, décor, privacy protocols and special requests confirmed in advance." },
  { icon: "🎬", title: "On-Day Coordination", body: "A dedicated TKC coordinator on-site from 4 hours before arrival until departure — managing timeline and last-minute requirements." },
];

const rider = [
  ["Advance Booking", "Minimum 90–120 days for standard events; 6–12 months for annual brand endorsements. Peak season (Oct–Feb) requires earlier planning."],
  ["Contract & Advance", "Signed performance agreement required before any public announcement. Advance payment per standard TKC contract terms."],
  ["Travel", "Business class flights for artist + core team. Private charter available for international or remote destinations."],
  ["Accommodation", "Presidential / suite-level room at a 5-star property for artist + entourage rooms. Hotel must be pre-approved."],
  ["Security", "Minimum 4 personal security personnel on event day; venue security briefed and coordinated by TKC in advance."],
  ["Green Room", "Private, air-conditioned green room with specific F&B, privacy screens and access control. Full rider shared post-confirmation."],
  ["Confidentiality", "NDA required for all private events. No social media posts about the booking until approved by management."],
  ["Appearance Duration", "Standard appearance: 45–90 minutes. Overtime rates apply beyond agreed duration."],
  ["Photography & Video", "Rights for event photography/video must be agreed in writing. Commercial usage and social media protocols specified in contract."],
];

const faqs = [
  { q: "How much does it cost to book Kareena Kapoor Khan in 2026?", a: "Kareena Kapoor Khan's appearance fee for events in India ranges from approximately ₹1.5 Crore to ₹3.5 Crore per appearance, exclusive of GST (18%), travel, hospitality and technical riders. Brand endorsement fees range from ₹4 Crore for a single campaign to ₹10–18 Crore+ for annual contracts. TKC Talent provides a fully itemised quote within 30 minutes of receiving your brief." },
  { q: "How to book Kareena Kapoor Khan for a wedding?", a: "To book Kareena Kapoor Khan for your wedding, contact TKC Talent with your event date, location, expected guest count and approximate budget. Our team checks availability, prepares a commercial proposal and manages the full booking process — from signed contract to on-day coordination. All wedding bookings are managed under a signed confidentiality agreement." },
  { q: "Does Kareena Kapoor Khan attend private events?", a: "Yes. Kareena does appear at private events including luxury wedding receptions, sangeet nights and HNI private celebrations — subject to schedule availability and a signed NDA. TKC Talent manages all logistics, rider requirements and event-day coordination." },
  { q: "How far in advance do I need to book Kareena Kapoor Khan?", a: "We recommend booking Kareena Kapoor Khan a minimum of 90–120 days in advance for events in India. For peak wedding season (October to February), 6 months advance planning is strongly advised." },
  { q: "Does TKC Talent have a direct relationship with her management?", a: "Yes. TKC Talent, a division of The Kabir Company, has spent over 20 years building direct relationships with the management teams of India's top celebrities. We do not route enquiries through aggregator platforms — our team contacts management directly." },
  { q: "Can I book Kareena Kapoor Khan for an international event?", a: "Yes. TKC Talent manages international Kareena Kapoor Khan appearances for events in the UAE, UK, USA, Singapore and other destinations with significant Indian diaspora communities. International fees start from ₹3 Crore plus international logistics." },
  { q: "What does TKC Talent manage when booking Kareena Kapoor Khan?", a: "TKC Talent manages the full end-to-end booking process: availability confirmation, commercial negotiation, legal contracts and artist riders, GST-compliant invoicing, business class travel, 5-star hotel accommodation, personal security coordination, green room setup and a dedicated on-ground TKC coordinator from 4 hours before arrival until departure." },
  { q: "Can Kareena Kapoor Khan walk as a fashion week showstopper?", a: "Yes. Kareena has walked as showstopper for premier designers at Lakmé Fashion Week, India Couture Week and luxury maison previews. TKC Talent manages designer brief alignment, fitting schedules, run-of-show and on-day coordination." },
];

const related = [
  { name: "Alia Bhatt", category: "Bollywood Actress — A-List", fee: "₹2 Cr – ₹3.5 Cr+", img: "/actresses/alia-bhatt.png", slug: "/book-alia-bhatt" as const },
  { name: "Deepika Padukone", category: "Bollywood Actress — A-List", fee: "₹2 Cr – ₹3 Cr+", img: deepikaImg, slug: "/celebrity-charges" as const },
  { name: "Bollywood Actress Roster", category: "All Actresses", fee: "Browse fees & artists", img: "/actresses/katrina-kaif.png", slug: "/bollywood-actress-booking" as const },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Kareena Kapoor Khan",
      alternateName: ["Kareena Kapoor", "Bebo"],
      description: "Indian actress, daughter of Randhir Kapoor and Babita. National Film Award–calibre performer with films like Jab We Met, 3 Idiots, Veere Di Wedding and The Crew.",
      jobTitle: "Actress",
      nationality: "Indian",
      birthDate: "1980-09-21",
      birthPlace: { "@type": "Place", name: "Mumbai, India" },
      sameAs: [
        "https://www.instagram.com/kareenakapoorkhan/",
        "https://en.wikipedia.org/wiki/Kareena_Kapoor",
      ],
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
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
        { "@type": "ListItem", position: 2, name: "Celebrity Booking India", item: `${SITE_URL}/celebrity-booking-india` },
        { "@type": "ListItem", position: 3, name: "Bollywood Actress Booking", item: `${SITE_URL}/bollywood-actress-booking` },
        { "@type": "ListItem", position: 4, name: "Book Kareena Kapoor", item: PAGE_URL },
      ],
    },
  ],
};

export const Route = createFileRoute("/book-kareena-kapoor")({
  head: () => ({
    meta: [
      { title: "Book Kareena Kapoor Khan for Events in India — Fee & Booking | TKC" },
      { name: "description", content: "Book Kareena Kapoor Khan for weddings, brand campaigns and corporate galas. TKC Talent offers direct access, verified 2026 fees and end-to-end execution. Quote in 30 minutes." },
      { name: "keywords", content: "book Kareena Kapoor, Kareena Kapoor Khan booking fee, hire Kareena Kapoor for wedding, Kareena Kapoor brand endorsement, Kareena Kapoor appearance fee India" },
      { property: "og:title", content: "Book Kareena Kapoor Khan for Your Event | TKC Talent" },
      { property: "og:description", content: "Direct access to Kareena Kapoor Khan for weddings, brand launches & corporate events. Transparent 2026 fees and full execution." },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: `${SITE_URL}${HERO}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book Kareena Kapoor Khan | TKC Talent" },
      { name: "twitter:description", content: "Direct access, verified 2026 fees and end-to-end execution." },
      { name: "twitter:image", content: `${SITE_URL}${HERO}` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(validateJsonLd("/book-kareena-kapoor", jsonLd)) }],
  }),
  component: BookKareenaPage,
});

function BookKareenaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-foreground/10">
        <img src={HERO} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="absolute inset-x-0 top-0 z-10"><Nav variant="dark" /></div>
        <div className="relative z-[1] px-5 pb-12 pt-28 sm:px-10 sm:pb-24 sm:pt-40">
          <nav className="mb-8 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/celebrity-booking-india" className="hover:text-foreground">Celebrity Booking India</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/bollywood-actress-booking" className="hover:text-foreground">Bollywood Actress</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Book Kareena Kapoor</span>
          </nav>

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">Last updated: May 2026 · Verified by TKC Talent</p>
              <h1 className="font-display text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[1.02]">
                Book <span className="bg-brand/30 px-2">Kareena Kapoor Khan</span>{" "}
                <span className="italic text-foreground/60">for Your Event</span> — Weddings, Brand Endorsements & Galas
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-lg">
                Kareena Kapoor Khan — Bollywood royalty, National Film Award–calibre actress and India's reigning luxury-brand muse. From a private sangeet at a heritage palace to a global beauty campaign, Bebo's signature elegance turns every appearance into an instant headline.
              </p>
              <p className="mt-4 max-w-2xl text-xs leading-relaxed text-foreground/60 sm:text-base">
                TKC Talent, a division of The Kabir Company, provides direct access to Kareena Kapoor Khan's management for event appearances, brand endorsements and private celebrations across India and internationally — handling every step end-to-end.
              </p>
              <ul className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-[13px] text-foreground/80 sm:text-base">
                <li>✔ Direct access to management — no intermediaries</li>
                <li>✔ Verified 2026 appearance fees with itemised quotes</li>
                <li>✔ Travel, 5-star hospitality, security & on-ground coordination</li>
                <li>✔ Legal contracts, artist riders & GST compliance in-house</li>
                <li>✔ Response within 30 minutes — 9 AM to 11 PM IST, 7 days</li>
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="https://wa.me/919599599699?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20Kareena%20Kapoor%20Khan" target="_blank" rel="noopener" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">Get a Quote on WhatsApp →</a>
                <a href="#book" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">Submit Booking Enquiry →</a>
              </div>
              <p className="mt-4 text-xs text-foreground/50">Response within 30 minutes · 9 AM – 11 PM IST</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                <img src={THUMB} alt="Kareena Kapoor Khan — Bollywood actress booking via TKC Talent" loading="eager" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Actress3DCarousel slides={slides} name="Kareena Kapoor Khan" headingId="kareena-gallery-heading" heading="Kareena Kapoor Khan — In Frame" />

      <section className="px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">02 · About</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">About Kareena Kapoor Khan — Bollywood's Reigning Diva</h2>
        <div className="mt-8 grid grid-cols-12 gap-6 sm:mt-10 sm:gap-8">
          <div className="col-span-12 lg:col-span-7 space-y-4 text-sm leading-relaxed text-foreground/75 sm:space-y-5 sm:text-lg">
            <p>Kareena Kapoor Khan, the daughter of legendary actors Randhir Kapoor and Babita, has been a defining presence in Indian cinema for over two decades. From her debut in <em>Refugee</em> (2000) to era-defining performances in <em>Jab We Met</em>, <em>3 Idiots</em>, <em>Omkara</em>, <em>Heroine</em>, <em>Veere Di Wedding</em>, <em>Laal Singh Chaddha</em> and <em>The Crew</em>, she has effortlessly moved between commercial blockbusters and critically acclaimed performances.</p>
            <p>Forbes India has named her among the highest-paid actresses, and she remains one of the most-searched celebrities on Google India. Her ability to embody both girl-next-door warmth and old-school star-glamour makes her a uniquely versatile face for brands.</p>
            <p>As a brand ambassador, Kareena leads campaigns for Kama Ayurveda, Pantene, Lakmé, Magnum, Puma, Sony BBC Earth and many more — a portfolio that spans luxury, beauty, fashion, lifestyle and wellness.</p>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-foreground p-5 text-background sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/60 sm:text-xs">Quick Stats</p>
              <ul className="mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3">
                <li>📅  Career: 2000 – Present (25+ years)</li>
                <li>🎬  Films: 65+ Bollywood titles</li>
                <li>🏆  Filmfare Best Actress + multiple critics' awards</li>
                <li>📱  Instagram: 12M+ followers</li>
                <li>📚  Best-selling author — Pregnancy Bible</li>
                <li>👑  Bollywood First Family — Kapoor lineage</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-brand/10 p-5 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand sm:text-xs">Brand Credentials</p>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground/85 sm:mt-5 sm:space-y-3">
                <li>🌿  Kama Ayurveda — long-standing face</li>
                <li>💇  Pantene, Lakmé, Magnum, Puma</li>
                <li>📊  Forbes India Celebrity 100 — consistent</li>
                <li>🔍  Most-searched celebrity, Google India</li>
                <li>🎯  20+ active brand endorsements</li>
                <li>👗  Lakmé Fashion Week — recurring showstopper</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">03 · Why Brands Love Kareena</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">Why Luxury Brands & Wedding Families Choose Kareena</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 transition-colors hover:bg-foreground/[0.04] sm:p-7">
              <h3 className="font-display text-lg font-bold sm:text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base" dangerouslySetInnerHTML={{ __html: r.body }} />
            </div>
          ))}
        </div>
      </section>

      <section aria-hidden="true" className="relative h-[60vh] min-h-[360px] overflow-hidden border-t border-foreground/10 sm:h-[80vh]">
        <img src={INLINE_1} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-10 sm:pb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 sm:text-xs">In Frame</p>
          <p className="mt-2 max-w-xl font-display text-xl italic leading-snug text-foreground sm:text-3xl">
            "Royalty in motion — Bebo turns every reception into a moment of cinema."
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">04 · Event Types</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">What Events Can Kareena Kapoor Khan Headline?</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl border border-foreground/10 p-5 sm:p-7">
              <div className="text-2xl sm:text-3xl">{e.icon}</div>
              <h3 className="mt-3 font-display text-base font-bold sm:text-xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">05 · Booking Process</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">How to Book Kareena Kapoor Khan — 3 Steps</h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-foreground/15 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className={`p-6 sm:p-8 ${i === 1 ? "bg-brand text-brand-foreground" : "bg-background"}`}>
              <div className={`font-display text-4xl font-bold sm:text-5xl ${i === 1 ? "text-brand-foreground/40" : "text-foreground/20"}`}>{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold sm:text-2xl">{s.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-brand-foreground/85" : "text-foreground/70"}`}>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="https://wa.me/919599599699" target="_blank" rel="noopener" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90">Start Your Booking Now →</a>
          <a href="tel:+919599599699" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium hover:bg-foreground/5">Call: +91 95995 99699</a>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">06 · 2026 Pricing</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">Kareena Kapoor Khan Booking Fee — 2026 Pricing</h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">All fees below are indicative starting points for 2026, exclusive of GST (18%), travel, hospitality and technical riders.</p>
        <div className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand text-brand-foreground">
                <th className="px-3 py-3 text-[10px] font-medium uppercase tracking-[0.16em] sm:px-4 sm:py-4 sm:text-xs">Event / Use Case</th>
                <th className="px-3 py-3 text-[10px] font-medium uppercase tracking-[0.16em] sm:px-4 sm:py-4 sm:text-xs">Indicative Fee (2026)</th>
                <th className="px-3 py-3 text-[10px] font-medium uppercase tracking-[0.16em] sm:px-4 sm:py-4 sm:text-xs">Lead Time</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((r) => (
                <tr key={r.event} className="border-b border-foreground/10">
                  <td className="px-3 py-3 text-xs font-medium sm:px-4 sm:py-4 sm:text-sm">{r.event}</td>
                  <td className="px-3 py-3 font-display text-xs font-bold text-brand sm:px-4 sm:py-4 sm:text-sm">{r.fee}</td>
                  <td className="px-3 py-3 text-xs text-foreground/70 sm:px-4 sm:py-4 sm:text-sm">{r.lead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-hidden="true" className="relative h-[55vh] min-h-[340px] overflow-hidden border-t border-foreground/10 sm:h-[75vh]">
        <img src={INLINE_2} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-x-0 top-0 px-5 pt-10 sm:px-10 sm:pt-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/80 sm:text-xs">Showstopper</p>
          <p className="mt-2 max-w-xl font-display text-xl font-semibold leading-snug text-background sm:text-3xl">
            India's reigning luxury muse — your stage, your campaign.
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-foreground px-5 py-14 text-background sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-background/50 sm:text-xs">07 · End-to-End Execution</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">What TKC Talent Handles — End-to-End</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {included.map((i) => (
            <div key={i.title} className="rounded-2xl border border-background/15 bg-background/[0.04] p-5 sm:p-7">
              <div className="text-2xl">{i.icon}</div>
              <h3 className="mt-3 font-display text-base font-bold sm:text-xl">{i.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/75">{i.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">08 · Artist Rider</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">Kareena Kapoor Khan — Key Event Requirements</h2>
        <div className="mt-8">
          <dl className="divide-y divide-foreground/10 border-y border-foreground/10">
            {rider.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-3 sm:gap-6 sm:py-5">
                <dt className="font-display text-sm font-bold sm:col-span-1 sm:text-lg">{k}</dt>
                <dd className="text-sm text-foreground/75 sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">09 · FAQs</p>
            <h2 className="font-display text-[clamp(1.5rem,5.5vw,3.5rem)] font-bold leading-[1.05]">Kareena Kapoor Khan Booking — FAQs</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {faqs.map((f, i) => (
                <li key={f.q} className="py-5 sm:py-6">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="shrink-0 font-display text-xs text-foreground/40 sm:text-sm">Q{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-base font-medium sm:text-xl">{f.q}</h3>
                  </div>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-foreground/70 sm:pl-10 sm:text-base">{f.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">10 · Related Artists</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">Other A-List Bollywood Actresses</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link key={r.name} to={r.slug} className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-colors hover:bg-foreground/[0.04]">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                <img src={r.img} alt={`${r.name} — alternative to Kareena Kapoor Khan`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/50 sm:text-xs">{r.category}</p>
                <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{r.name}</h3>
                <p className="mt-2 font-display text-base font-bold text-brand">{r.fee}</p>
                <p className="mt-3 text-sm text-foreground/60 group-hover:text-foreground">View booking details →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-brand px-5 py-14 text-brand-foreground sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">11 · Book Now</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.6rem,5.5vw,4rem)] font-bold leading-[1.05]">Book Kareena Kapoor Khan — Quote in 30 Minutes</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
          <a href="tel:+919599599699" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">Call</p>
            <p className="mt-3 font-display text-xl font-medium sm:text-2xl">+91 95995 99699</p>
            <p className="mt-2 text-xs text-brand-foreground/70">9 AM – 11 PM IST · 7 days</p>
          </a>
          <a href="https://wa.me/919599599699?text=Hi%2C%20I%27d%20like%20to%20book%20Kareena%20Kapoor%20Khan" target="_blank" rel="noopener" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">WhatsApp</p>
            <p className="mt-3 font-display text-xl font-medium sm:text-2xl">Message us now →</p>
            <p className="mt-2 text-xs text-brand-foreground/70">Fastest response channel</p>
          </a>
          <a href="mailto:hello@tkctalent.com?subject=Kareena%20Kapoor%20Khan%20booking%20enquiry" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">Email</p>
            <p className="mt-3 font-display text-xl font-medium sm:text-2xl">hello@tkctalent.com</p>
            <p className="mt-2 text-xs text-brand-foreground/70">Response within 30 minutes</p>
          </a>
        </div>
      </section>

      <TalkContact />
      <Footer />
    </main>
  );
}