import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TalkContact } from "@/components/site/TalkContact";
import { Srk3DCarousel } from "@/components/site/Srk3DCarousel";
import srkImg from "@/assets/srk/srk-3.jpg";
import srkHeroWide from "@/assets/srk/srk-1.png";
import salmanImg from "@/assets/celebrities/salman-khan.webp";
import hrithikImg from "@/assets/celebrities/hrithik-roshan.webp";
import akshayImg from "@/assets/celebrities/akshay-kumar.webp";
import ranveerImg from "@/assets/celebrities/ranveer-singh.webp";
import deepikaImg from "@/assets/celebrities/deepika-padukone.webp";
import prabhasImg from "@/assets/celebrities/hero-prabhas.png";
import { validateJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/book-shah-rukh-khan`;

const reasons = [
  {
    title: "Universal Audience Appeal",
    body: "Shah Rukh Khan transcends every audience segmentation model. He is equally beloved by a 25-year-old millennial and a 70-year-old grandparent, by North Indian families and South Indian corporate teams, by global luxury brands and domestic mass-market campaigns. No other Indian celebrity delivers this breadth of audience resonance.",
  },
  {
    title: "Guaranteed Crowd Reaction",
    body: "The moment Shah Rukh Khan enters a venue, the room transforms. His energy, his presence and his genuine warmth with audiences — whether 50 guests at a private dinner or 5,000 at a corporate convention — produce a crowd reaction that no staging, lighting or other entertainment can replicate.",
  },
  {
    title: "Global Brand Credibility",
    body: "For multinational brands and premium Indian corporations, Shah Rukh Khan's global recognition — across South Asia, Southeast Asia, the Middle East and Indian diaspora markets worldwide — makes him the only Indian celebrity who can anchor a truly international brand campaign or keynote event.",
  },
  {
    title: "Social Media Amplification",
    body: "A Shah Rukh Khan appearance generates organic social media coverage that money cannot buy. Event photos featuring SRK go viral across Instagram, X and YouTube within hours — giving your brand exponential reach far beyond the room. His 35M+ Instagram following means a single post outperforms most national media campaigns.",
  },
  {
    title: "Trust & Safety for Luxury Events",
    body: "For HNI wedding families, a Shah Rukh Khan appearance carries a unique social cachet — it is the ultimate statement of taste, exclusivity and celebration. His reputation is impeccable, his conduct at private events is professional and warm, and TKC Talent manages every logistical detail to ensure the experience is seamless and confidential.",
  },
  {
    title: "Decades of Event Experience",
    body: "Unlike newer celebrities, Shah Rukh Khan brings decades of live event experience — he knows how to read a room, engage an audience and deliver a memorable moment whether he has 5 minutes or 90 minutes on stage. This experience means fewer surprises, better on-day execution and a more satisfying outcome.",
  },
];

const events = [
  { icon: "💍", title: "Luxury Weddings & Sangeet Nights", body: "A Shah Rukh Khan appearance at your wedding reception or sangeet night is the ultimate gift to your family and guests. SRK has performed, danced, and delivered heartfelt speeches at some of India's most exclusive wedding celebrations. Typical duration: 30–90 minutes. Available across Delhi NCR, Jaipur, Udaipur, Mumbai, Goa and international destination wedding venues." },
  { icon: "🏢", title: "Corporate Events & Annual Days", body: "For corporate galas, annual days, product launches, leadership conclaves and brand events, a Shah Rukh Khan appearance delivers unmatched ROI in employee engagement, media coverage and client relationship building. Equally compelling as on-stage performer, keynote anchor or brand ambassador presence." },
  { icon: "🎯", title: "Brand Endorsements & Campaigns", body: "Shah Rukh Khan's brand endorsement portfolio spans 40+ campaigns across FMCG, luxury, technology, automobiles, real estate and financial services. TKC Talent manages both long-term endorsement contracts and single-campaign activations." },
  { icon: "🎬", title: "Movie Promotions & Premieres", body: "TKC Talent manages SRK appearances at film premieres, OTT platform launches and entertainment industry events on behalf of production houses and studio clients — alongside his own productions' promotional activities." },
  { icon: "🏛", title: "Government & Institutional Events", body: "Shah Rukh Khan has appeared at government-backed cultural events, national day celebrations and institutional functions. TKC Talent has deep experience managing celebrity bookings for ministry-level events, state government functions and national award ceremonies." },
  { icon: "🌍", title: "International Events & NRI Functions", body: "For Indian diaspora events, NRI community celebrations and international brand launches, Shah Rukh Khan's global recognition makes him uniquely positioned. TKC Talent manages travel logistics, visa coordination, international hospitality and on-ground management in the UAE, UK, USA, Singapore and beyond." },
];

const steps = [
  { n: "01", title: "Share Your Brief", body: "Tell us your event date, venue, type, expected guest count and budget range. Submit via WhatsApp, the booking form or a direct call. Our team responds within 30 minutes during business hours." },
  { n: "02", title: "We Negotiate & Confirm", body: "TKC Talent contacts SRK's management directly, confirms availability, negotiates commercials and returns a fully itemised proposal — artist fee, riders, travel, hospitality and security — with no hidden markups." },
  { n: "03", title: "Sign, Pay, Execute", body: "On approval, we issue the GST-compliant performance contract. Once signed and the advance is received, our team takes over end-to-end execution — right up to Shah Rukh Khan walking on stage at your event." },
];

const fees = [
  { event: "Wedding / Private Celebration (30–60 min)", fee: "₹3.5 Cr – ₹4 Cr+", lead: "90–120 days" },
  { event: "Wedding / Private Celebration (60–90 min)", fee: "₹4 Cr – ₹4.5 Cr+", lead: "120+ days" },
  { event: "Corporate Event / Conference Appearance", fee: "₹3.5 Cr – ₹4 Cr", lead: "90–120 days" },
  { event: "Brand Launch / Product Activation", fee: "₹4 Cr – ₹5 Cr+", lead: "90–120 days" },
  { event: "Brand Endorsement (Annual Campaign)", fee: "₹40 Cr – ₹60 Cr+ / year", lead: "6–12 months" },
  { event: "Brand Endorsement (Single Campaign)", fee: "₹10 Cr – ₹20 Cr+", lead: "3–6 months" },
  { event: "Government / Institutional Event", fee: "On application", lead: "120+ days" },
  { event: "International Appearance (outside India)", fee: "₹5 Cr – ₹7 Cr+ + intl. logistics", lead: "120+ days" },
];

const included = [
  { icon: "📋", title: "Initial Availability Check", body: "We contact SRK's management team immediately upon receiving your brief and confirm availability for your specific date and location within 30 minutes during business hours." },
  { icon: "💼", title: "Commercial Negotiation", body: "We negotiate the full commercial package on your behalf — artist fee, appearance duration, deliverables, exclusivity clauses and content rights — drawing on our long-standing relationship with management." },
  { icon: "📝", title: "Legal Contracts & Compliance", body: "All performance agreements, artist riders, NDA/confidentiality clauses, GST-compliant invoicing and statutory documentation handled in-house. Zero legal ambiguity." },
  { icon: "✈️", title: "Travel & Logistics", body: "Business class travel booking, airport transfers, local convoy coordination and route planning from Shah Rukh Khan's point of departure to your venue — managed entirely by TKC Talent." },
  { icon: "🏨", title: "5-Star Hospitality", body: "Suite-level hotel accommodation for SRK and core entourage (manager, stylist, security, PA), F&B per rider, and check-in/check-out coordination." },
  { icon: "🔒", title: "Personal Security", body: "Coordination of personal security detail, crowd management with venue security, backstage access control and on-day security briefing with TKC's dedicated coordinator." },
  { icon: "🎪", title: "Green Room & Backstage", body: "Full green room setup per artist rider — specific F&B, décor, temperature, privacy protocols and special requests confirmed in advance and executed to specification on event day." },
  { icon: "🎬", title: "On-Day Coordination", body: "A dedicated TKC Talent coordinator on-site from 4 hours before SRK's scheduled arrival until departure — managing timeline, liaising with event production and handling any last-minute requirements." },
];

const rider = [
  ["Advance Booking", "Minimum 90–120 days for standard events; 6–12 months for annual brand endorsements. Peak season (Oct–Feb) requires earlier planning."],
  ["Contract & Advance", "Signed performance agreement required before any public announcement. Advance payment schedule per standard TKC contract terms."],
  ["Travel", "Business class flights for artist + core team. Private charter available for international or remote locations."],
  ["Accommodation", "Presidential / suite-level room at a 5-star property for artist + entourage rooms. Hotel must be pre-approved."],
  ["Security", "Minimum 4 personal security personnel on event day; venue security briefed and coordinated by TKC in advance."],
  ["Green Room", "Private, air-conditioned green room with specific F&B, privacy screens and access control. Full rider shared post-confirmation."],
  ["Confidentiality", "NDA required for all private events (weddings, HNI functions). No social media posts about the booking until approved by management."],
  ["Appearance Duration", "Standard appearance: 45–90 minutes. Overtime rates apply beyond agreed duration."],
  ["Photography & Video", "Rights for event photography/video must be agreed in writing before the event. Commercial usage and social media protocols specified in contract."],
];

const faqs = [
  { q: "How much does it cost to book Shah Rukh Khan in 2026?", a: "Shah Rukh Khan's appearance fee for events in India is approximately ₹3.5 Crore to ₹4 Crore or more per appearance, exclusive of GST (18%), travel, hospitality and technical riders. Brand endorsement fees range from ₹10 Crore for a single campaign to ₹40–60 Crore+ for annual contracts. TKC Talent provides a fully itemised quote within 30 minutes of receiving your event brief." },
  { q: "How to book Shah Rukh Khan for a wedding?", a: "To book Shah Rukh Khan for your wedding, contact TKC Talent with your event date, location, expected guest count and approximate budget. Our team checks SRK's availability, prepares a commercial proposal and manages the full booking process — from signed contract to on-day coordination. All wedding bookings are managed under a signed confidentiality agreement. Book at least 90–120 days in advance, and 6+ months during peak wedding season." },
  { q: "Can Shah Rukh Khan attend private events and sangeet nights?", a: "Yes. Shah Rukh Khan does appear at private events including luxury wedding receptions, sangeet nights, milestone birthday celebrations and HNI private functions — subject to schedule availability and a signed NDA/confidentiality agreement. TKC Talent manages all logistics, rider requirements and event-day coordination." },
  { q: "How far in advance do I need to book Shah Rukh Khan?", a: "We recommend booking Shah Rukh Khan a minimum of 90–120 days in advance for events in India. For peak wedding season (October to February), 6 months advance planning is strongly advised. For brand endorsement contracts, the process typically begins 6–12 months before campaign launch. Last-minute bookings within 30 days are occasionally possible subject to his schedule." },
  { q: "Does TKC Talent have a direct relationship with Shah Rukh Khan's management?", a: "TKC Talent, as a division of The Kabir Company, has spent over 20 years building direct relationships with the management teams of India's top celebrities, including Shah Rukh Khan. We do not route enquiries through intermediaries or aggregator platforms — our team contacts management directly, which means faster confirmations, better-negotiated fees and a more reliable booking process." },
  { q: "What does TKC Talent manage when booking Shah Rukh Khan?", a: "TKC Talent manages the full end-to-end booking process: availability confirmation, commercial negotiation, legal contracts and artist riders, GST-compliant invoicing, business class travel, 5-star hotel accommodation, personal security coordination, green room setup, and a dedicated on-ground TKC coordinator present from 4 hours before SRK's arrival until his departure." },
  { q: "What is included in Shah Rukh Khan's artist rider?", a: "Shah Rukh Khan's standard event rider covers 5-star suite-level accommodation for himself and core entourage, specific F&B requirements, a private green room with access control, business class travel, personal security and defined photography and media protocols. TKC Talent shares the full rider specifications with clients post-booking confirmation." },
  { q: "Can I book Shah Rukh Khan for an event outside India?", a: "Yes. TKC Talent manages international Shah Rukh Khan appearances for events in the UAE, UK, USA, Singapore, Canada and other destinations with significant Indian diaspora communities. International fees start from ₹5 Crore and above, with additional international logistics costs including charter or business class travel for the full entourage, international security, visa coordination and hospitality." },
];

const related = [
  { name: "Salman Khan", category: "Bollywood Actor — A-List", fee: "₹3.5 Cr – ₹4 Cr+", img: salmanImg, slug: "/celebrity-charges" },
  { name: "Hrithik Roshan", category: "Bollywood Actor — A-List", fee: "₹2 Cr – ₹3 Cr+", img: hrithikImg, slug: "/celebrity-charges" },
  { name: "Akshay Kumar", category: "Bollywood Actor — A-List", fee: "₹2.5 Cr – ₹3.5 Cr+", img: akshayImg, slug: "/celebrity-charges" },
  { name: "Ranveer Singh", category: "Bollywood Actor — A-List", fee: "₹2 Cr – ₹2.5 Cr+", img: ranveerImg, slug: "/celebrity-charges" },
  { name: "Deepika Padukone", category: "Bollywood Actress — A-List", fee: "₹2 Cr – ₹3 Cr+", img: deepikaImg, slug: "/celebrity-charges" },
  { name: "Allu Arjun", category: "Pan-India Actor", fee: "₹2 Cr – ₹4 Cr+", img: prabhasImg, slug: "/celebrity-charges" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Shah Rukh Khan",
      alternateName: ["SRK", "King Khan", "King of Bollywood"],
      description: "Indian actor, film producer and television personality. One of Bollywood's most iconic stars with a career spanning 33+ years and 80+ films.",
      jobTitle: "Actor, Film Producer",
      nationality: "Indian",
      birthDate: "1965-11-02",
      birthPlace: { "@type": "Place", name: "New Delhi, India" },
      award: ["Padma Shri (2005)", "14 Filmfare Awards", "UNESCO Pyramide con Marni Award"],
      sameAs: [
        "https://www.instagram.com/iamsrk/",
        "https://twitter.com/iamsrk",
        "https://en.wikipedia.org/wiki/Shah_Rukh_Khan",
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
        { "@type": "ListItem", position: 3, name: "Bollywood Actors", item: `${SITE_URL}/celebrity-charges` },
        { "@type": "ListItem", position: 4, name: "Book Shah Rukh Khan", item: PAGE_URL },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Book Shah Rukh Khan for Your Event",
      description: "Three-step process to book Shah Rukh Khan for weddings, corporate events and brand campaigns through TKC Talent.",
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.body,
      })),
    },
  ],
};

export const Route = createFileRoute("/book-shah-rukh-khan")({
  head: () => ({
    meta: [
      { title: "Book Shah Rukh Khan for Events in India — Fee, Availability & Booking | TKC Talent" },
      { name: "description", content: "Want to book Shah Rukh Khan for your wedding, corporate event or brand launch? TKC Talent offers direct access, verified 2026 fees and complete end-to-end execution. Get a quote in 30 minutes." },
      { name: "keywords", content: "book Shah Rukh Khan, Shah Rukh Khan booking fee, Shah Rukh Khan for wedding, how to hire Shah Rukh Khan, Shah Rukh Khan appearance fee India, SRK celebrity booking" },
      { property: "og:title", content: "Book Shah Rukh Khan for Your Event | TKC Talent — India's Celebrity Booking Agency" },
      { property: "og:description", content: "Direct access to Shah Rukh Khan for weddings, corporate events & brand campaigns. Transparent 2026 fees. TKC Talent by The Kabir Company — 20+ years of celebrity booking in India." },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: `${SITE_URL}${srkImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book Shah Rukh Khan for Your Event | TKC Talent" },
      { name: "twitter:description", content: "Direct access, verified 2026 fees and end-to-end execution." },
      { name: "twitter:image", content: `${SITE_URL}${srkImg}` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(validateJsonLd("/book-shah-rukh-khan", jsonLd)) }],
  }),
  component: BookSrkPage,
});

function BookSrkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-foreground/10">
        <img
          src={srkHeroWide}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav variant="dark" />
        </div>
        <div className="relative z-[1] px-5 pb-12 pt-28 sm:px-10 sm:pb-24 sm:pt-40">
          <nav className="mb-8 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/celebrity-booking-india" className="hover:text-foreground">Celebrity Booking India</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/celebrity-charges" className="hover:text-foreground">Bollywood Actors</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Book Shah Rukh Khan</span>
          </nav>

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            <div className="col-span-12 lg:col-span-7">
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">
                Last updated: May 2026 · Verified by TKC Talent
              </p>
              <h1 className="font-display text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[1.02]">
                How to Book{" "}
                <span className="bg-brand/30 px-2">Shah Rukh Khan</span>{" "}
                <span className="italic text-foreground/60">for Your Event</span> — Weddings, Corporate & Brand Appearances
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-lg">
                Shah Rukh Khan — Bollywood's King, India's most recognised global superstar, and the single most searched celebrity for event bookings in India. Whether you're planning a luxury wedding reception, a high-profile brand launch or a landmark corporate gala, an SRK appearance transforms your occasion into an experience guests talk about for years.
              </p>
              <p className="mt-4 max-w-2xl text-xs leading-relaxed text-foreground/60 sm:text-base">
                TKC Talent, a division of The Kabir Company, provides direct access to Shah Rukh Khan's management team for event appearances, brand endorsements and private celebrations across India and internationally — handling every step from first enquiry to the moment SRK walks on stage.
              </p>
              <ul className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-[13px] text-foreground/80 sm:text-base">
                <li>✔ Direct access to SRK's management — no intermediaries</li>
                <li>✔ Verified 2026 appearance fees with itemised quotes</li>
                <li>✔ Travel, 5-star hospitality, security & on-ground coordination</li>
                <li>✔ Legal contracts, artist riders & GST compliance in-house</li>
                <li>✔ Response within 30 minutes — 9 AM to 11 PM IST, 7 days</li>
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="https://wa.me/919599599699?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20Shah%20Rukh%20Khan" target="_blank" rel="noopener" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                  Get a Quote on WhatsApp →
                </a>
                <a href="#book" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">
                  Submit Booking Enquiry →
                </a>
              </div>
              <p className="mt-4 text-xs text-foreground/50">Response within 30 minutes · 9 AM – 11 PM IST</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                <img
                  src={srkImg}
                  alt="Shah Rukh Khan — Celebrity Booking for Events in India | TKC Talent"
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D GALLERY CAROUSEL */}
      <Srk3DCarousel />

      {/* ABOUT */}
      <section className="px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">02 · About</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          About Shah Rukh Khan — India's Biggest Bollywood Star
        </h2>
        <div className="mt-8 grid grid-cols-12 gap-6 sm:mt-10 sm:gap-8">
          <div className="col-span-12 lg:col-span-7 space-y-4 text-sm leading-relaxed text-foreground/75 sm:space-y-5 sm:text-lg">
            <p>Shah Rukh Khan — known globally as SRK and King Khan — is without question Bollywood's most iconic living star. With a film career spanning over three decades, more than 80 films, and an estimated net worth that places him among the wealthiest actors on the planet, SRK represents the absolute pinnacle of Indian celebrity for any event, brand or occasion.</p>
            <p>Born in New Delhi on 2 November 1965, he debuted with <em>Deewana</em> in 1992 and went on to redefine Indian romantic cinema with <em>Dilwale Dulhania Le Jayenge</em>, <em>Kuch Kuch Hota Hai</em>, <em>Kabhi Khushi Kabhie Gham</em>, <em>Kal Ho Na Ho</em>, <em>Chennai Express</em>, and his recent global blockbuster <em>Pathaan</em> — which became the highest-grossing Bollywood film of all time at the time of release, earning over ₹1,050 Crore worldwide.</p>
            <p>As a brand ambassador, Shah Rukh Khan has represented over 40 major brands including Hyundai, LUX, Pepsi, Tag Heuer, Dish TV, D'Décor, Byju's and OPPO. He is a consistent fixture in Forbes India's Celebrity 100 list and has been ranked among the most powerful people in Indian media for over a decade.</p>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-foreground p-5 text-background sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-background/60 sm:text-xs">Quick Stats</p>
              <ul className="mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3">
                <li>📅  Career: 1992 – Present (33+ years)</li>
                <li>🎬  Films: 80+ Bollywood & international</li>
                <li>🏆  14 Filmfare Awards + 100+ national awards</li>
                <li>📱  Instagram: 35M+ followers</li>
                <li>💰  Net Worth: ~$770M (Forbes est.)</li>
                <li>🌍  Global reach: 4 Billion+ fans worldwide</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-brand/10 p-5 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand sm:text-xs">Brand Credentials</p>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground/85 sm:mt-5 sm:space-y-3">
                <li>🎯  40+ brand endorsements (active & past)</li>
                <li>📊  Forbes Celebrity 100 — Top 3 consistently</li>
                <li>🌟  Padma Shri Awardee (2005)</li>
                <li>🤝  Brand value: $40M+ (Duff & Phelps est.)</li>
                <li>🏟  Co-owner, KKR (IPL team)</li>
                <li>🎤  Live events: command audiences of 50,000+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">03 · Why Book SRK</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          Why Shah Rukh Khan is India's Most Sought-After Event Celebrity
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          Every event organiser, brand manager and wedding family wants to know the same thing: what does it actually feel like when Shah Rukh Khan walks into your room? Here is why SRK remains the number one booking request at TKC Talent year after year.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 transition-colors hover:bg-foreground/[0.04] sm:p-7">
              <h3 className="font-display text-lg font-bold sm:text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">04 · Event Types</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          What Events Can Shah Rukh Khan Appear At?
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          TKC Talent manages the full scope of SRK appearances — from intimate HNI celebrations to large-scale public events. Here are the key categories we handle:
        </p>
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

      {/* HOW TO BOOK */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">05 · Booking Process</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          How to Book Shah Rukh Khan — 3 Steps with TKC Talent
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          Booking a global superstar like Shah Rukh Khan requires precision, discretion and deep industry relationships. Here is exactly how it works:
        </p>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-foreground/15 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className={`p-6 sm:p-8 ${i === 1 ? "bg-brand text-brand-foreground" : "bg-background"}`}>
              <div className={`font-display text-4xl font-bold sm:text-5xl ${i === 1 ? "text-brand-foreground/40" : "text-foreground/20"}`}>{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold sm:text-2xl">{s.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-brand-foreground/85" : "text-foreground/70"}`}>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-foreground/65">
          Every step is managed by a dedicated TKC Talent booking manager assigned exclusively to your event. One point of contact — no juggling agencies, no chasing confirmations.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="https://wa.me/919599599699" target="_blank" rel="noopener" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90">
            Start Your SRK Booking Now →
          </a>
          <a href="tel:+919599599699" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium hover:bg-foreground/5">
            Call: +91 95995 99699
          </a>
        </div>
      </section>

      {/* FEES */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">06 · 2026 Pricing</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          Shah Rukh Khan Booking Fee — Indicative Pricing for 2026
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          Shah Rukh Khan's appearance fee is among the highest in Indian celebrity entertainment — reflecting his unparalleled market position, global brand value and consistent audience draw. All fees below are indicative starting points for 2026, exclusive of GST (18%), travel, hospitality and technical riders.
        </p>
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
        <p className="mt-5 max-w-3xl text-sm text-foreground/60">
          Rule of thumb: budget 25–35% above the base artist fee for the full cost stack (travel, hospitality, security, riders, GST). Exact fees are provided in a fully itemised proposal within 30 minutes of receiving your brief. TKC Talent does not charge hidden markups — what you see in the proposal is what you pay.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="https://wa.me/919599599699" target="_blank" rel="noopener" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90">
            Get Your Itemised SRK Quote →
          </a>
          <Link to="/celebrity-charges" className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium hover:bg-foreground/5">
            View Full Celebrity Fee Guide →
          </Link>
        </div>
      </section>

      {/* WHAT TKC HANDLES */}
      <section className="border-t border-foreground/10 bg-foreground px-5 py-14 text-background sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-background/50 sm:text-xs">07 · End-to-End Execution</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          What TKC Talent Handles — End-to-End, Zero Exceptions
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-background/70 sm:text-lg">
          When you book Shah Rukh Khan through TKC Talent, you're getting The Kabir Company's full two-decade execution capability — the same team that has delivered 200+ celebrity appearances annually across India's most prestigious venues.
        </p>
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

      {/* RIDER */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">08 · Artist Rider</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          Shah Rukh Khan — Key Event Requirements & What to Expect
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          Understanding Shah Rukh Khan's standard event requirements upfront helps you plan more accurately, avoid last-minute surprises and get a more precise budget from TKC Talent from day one.
        </p>
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

      {/* FAQ */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">09 · FAQs</p>
            <h2 className="font-display text-[clamp(1.5rem,5.5vw,3.5rem)] font-bold leading-[1.05]">
              Shah Rukh Khan Booking — Frequently Asked Questions
            </h2>
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

      {/* RELATED */}
      <section className="border-t border-foreground/10 px-5 py-14 sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-foreground/50 sm:text-xs">10 · Related Artists</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.05]">
          Can't Get SRK's Dates? Consider These Alternatives
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-foreground/65 sm:text-lg">
          Shah Rukh Khan's calendar fills up fast — especially during peak wedding and corporate event season. If SRK's availability doesn't match your event date, TKC Talent can secure one of these equally iconic alternatives.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link key={r.name} to={r.slug} className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-colors hover:bg-foreground/[0.04]">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5">
                <img src={r.img} alt={`${r.name} — alternative to Shah Rukh Khan`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
        <div className="mt-8">
          <Link to="/celebrity-booking-india" className="text-sm underline-offset-4 hover:underline">→ View Full Artist Roster</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-foreground/10 bg-brand px-5 py-14 text-brand-foreground sm:px-10 sm:py-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">11 · Book Now</p>
        <h2 className="max-w-4xl font-display text-[clamp(1.6rem,5.5vw,4rem)] font-bold leading-[1.05]">
          Book Shah Rukh Khan for Your Event — Get a Quote in 30 Minutes
        </h2>
        <p className="mt-5 max-w-3xl text-sm text-brand-foreground/80 sm:text-lg">
          Ready to make your event unforgettable? TKC Talent gives you direct, no-intermediary access to Shah Rukh Khan's management team — with verified availability, transparent pricing and a fully managed booking process from first enquiry to final bow.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
          <a href="tel:+919599599699" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">Call</p>
            <p className="mt-3 font-display text-xl font-medium sm:text-2xl">+91 95995 99699</p>
            <p className="mt-2 text-xs text-brand-foreground/70">9 AM – 11 PM IST · 7 days</p>
          </a>
          <a href="https://wa.me/919599599699?text=Hi%2C%20I%27d%20like%20to%20book%20Shah%20Rukh%20Khan" target="_blank" rel="noopener" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-foreground/60 sm:text-xs">WhatsApp</p>
            <p className="mt-3 font-display text-xl font-medium sm:text-2xl">Message us now →</p>
            <p className="mt-2 text-xs text-brand-foreground/70">Fastest response channel</p>
          </a>
          <a href="mailto:hello@tkctalent.com?subject=Shah%20Rukh%20Khan%20booking%20enquiry" className="rounded-2xl border border-brand-foreground/20 p-5 transition-colors hover:bg-brand-foreground/10 sm:p-7">
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