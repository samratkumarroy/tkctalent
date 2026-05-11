import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Featured } from "@/components/site/Featured";
import { Services } from "@/components/site/Services";
import { ImageBreak } from "@/components/site/ImageBreak";
import { Stories } from "@/components/site/Stories";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Faqs } from "@/components/site/Faqs";
import { TalkContact } from "@/components/site/TalkContact";
import { Footer } from "@/components/site/Footer";
import { PixelIntro } from "@/components/site/PixelIntro";
import { CurvedHeroCarousel } from "@/components/site/CurvedHeroCarousel";
import { Pricing } from "@/components/site/Pricing";
import { Locations } from "@/components/site/Locations";
import { TrustBlock } from "@/components/site/TrustBlock";
import { LongForm } from "@/components/site/LongForm";
import { validateJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://tkctalent.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TKC Talent",
      legalName: "The Kabir Company",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.jpg`,
      sameAs: [
        "https://www.instagram.com/thekabircompany",
        "https://www.linkedin.com/company/the-kabir-company",
      ],
      description:
        "India's trusted Bollywood celebrity booking agency. Book actors, singers, performers and influencers for weddings, corporate events and brand launches.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "TKC Talent — The Kabir Company",
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      telephone: "+91-9599599699",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "600, CR Park",
        addressLocality: "New Delhi",
        addressRegion: "DL",
        postalCode: "110019",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6362,
        longitude: 77.2497,
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "Place", name: "Worldwide" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TKC Talent",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to book a celebrity in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Celebrity fees range from ₹5 Lakhs to ₹4 Cr+ depending on the artist, event type, duration and location. Share your brief and we'll send a tailored quote within 24–48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "How can I hire a celebrity for an event?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact TKC Talent with your event details. We curate options, confirm availability, manage contracts and handle execution end-to-end.",
          },
        },
        {
          "@type": "Question",
          name: "Can celebrities attend weddings and private events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — celebrities are regularly booked for weddings, sangeet nights, private parties and corporate functions.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book a celebrity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend booking at least 30–90 days in advance for the best availability and pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle contracts and logistics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TKC Talent manages everything end-to-end — contracts, travel, hospitality, security and on-ground coordination.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Celebrity Booking & Talent Management",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Celebrity Booking Agency India | Bollywood Artist Management | TKC Talent" },
      {
        name: "description",
        content:
          "Book Bollywood celebrities, singers & comedians for weddings, corporate events & brand launches across India. Direct access, transparent pricing, end-to-end execution. Get a quote in 48 hrs — TKC Talent by The Kabir Company.",
      },
      { name: "keywords", content: "celebrity booking agency India, Bollywood celebrity booking, artist management India, hire celebrity for event, celebrity booking Delhi, book singer for wedding" },
      { property: "og:title", content: "TKC Talent | Celebrity Booking India — Bollywood, Singers, Comedians" },
      {
        property: "og:description",
        content:
          "Direct access to India's biggest celebrities. TKC Talent by The Kabir Company — 20+ years, transparent pricing, zero-compromise execution.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TKC Talent | Celebrity Booking India" },
      { name: "twitter:description", content: "Direct access to India's biggest celebrities. 20+ years, transparent pricing, end-to-end execution." },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(validateJsonLd("/", jsonLd)),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <PixelIntro />
      <Hero />
      <Intro />
      <TrustBlock />
      <Featured />
      <CurvedHeroCarousel />
      <Services />
      <ImageBreak />
      <Stories />
      <Pricing />
      <Locations />
      <WhyChoose />
      <LongForm />
      <Faqs />
      <TalkContact />
      <Footer />
    </main>
  );
}
