export type Artist = {
  name: string;
  tier: string;
  fee: string;
  events: string;
  slug?: string; // /book-<slug>/
  image?: string; // public path to portrait, e.g. /actresses/deepika-padukone.png
};

export type Faq = { q: string; a: string };

export type Related = { label: string; sub: string; to: string };

export type CategoryPageData = {
  slug: string; // route segment, e.g. "bollywood-celebrity-booking"
  category: string; // human label
  title: string; // <title>
  description: string; // meta description
  h1: string;
  primaryKw: string;
  secondaryKws: string;
  hero: {
    eyebrow: string;
    headline: string; // shorter display version
    italicTail?: string;
    intro: string;
    bullets: string[];
  };
  longForm: { heading: string; paragraphs: string[] };
  artists: Artist[];
  faqs: Faq[];
  related: Related[];
  itemListName: string;
};

const RELATED_ALL: Related[] = [
  {
    label: "Bollywood Actors",
    sub: "A-list to mid-tier Bollywood actors",
    to: "/bollywood-celebrity-booking",
  },
  {
    label: "Bollywood Actresses",
    sub: "India's leading film actresses",
    to: "/bollywood-actress-booking",
  },
  {
    label: "Singers & Performers",
    sub: "Playback singers & live performers",
    to: "/singer-booking-india",
  },
  {
    label: "Stand-Up Comedians",
    sub: "Corporate & private comedy shows",
    to: "/comedian-booking-india",
  },
  {
    label: "Celebrity DJs",
    sub: "Top DJs for weddings & events",
    to: "/celebrity-dj-booking",
  },
  {
    label: "Pan-India Celebrities",
    sub: "South Indian & regional stars",
    to: "/pan-india-celebrity-booking",
  },
  {
    label: "Digital Influencers",
    sub: "YouTube, Instagram & creator talent",
    to: "/influencer-booking-india",
  },
];

const relatedExcept = (slug: string) =>
  RELATED_ALL.filter((r) => r.to !== `/${slug}`);

export const CATEGORY_PAGES: CategoryPageData[] = [
  {
    slug: "bollywood-celebrity-booking",
    category: "Bollywood Actor Booking",
    title:
      "Bollywood Celebrity Booking India 2026 — Book Actors for Events | TKC Talent",
    description:
      "Book Bollywood actors for weddings, corporate events & brand launches across India. Direct access to Shah Rukh Khan, Salman Khan, Hrithik Roshan & 20+ A-list stars. Verified 2026 fees. TKC Talent.",
    h1: "Bollywood Celebrity Booking India — Hire Actors for Weddings, Corporate Events & Brand Launches",
    primaryKw: "bollywood celebrity booking India",
    secondaryKws:
      "book bollywood actor for wedding, hire bollywood celebrity for corporate event, bollywood star booking fee 2026, bollywood actor appearance India",
    hero: {
      eyebrow: "Category 01 · Bollywood Actors · 2026",
      headline: "Bollywood Celebrity",
      italicTail: "booking, fully managed.",
      intro:
        "TKC Talent is India's premier Bollywood celebrity booking agency — connecting brands, HNI families and corporate clients with India's biggest Bollywood actors for weddings, brand launches and corporate galas. From Shah Rukh Khan and Salman Khan to Ranveer Singh, Kartik Aaryan and Sunny Deol, our roster covers every tier of Bollywood male talent.",
      bullets: [
        "Direct access to 20+ Bollywood A-list and mid-tier actors",
        "Verified 2026 appearance fees — ₹25 L to ₹4 Cr+",
        "Weddings, corporate events, brand endorsements & international appearances",
        "End-to-end management: contracts, travel, security, on-ground coordination",
        "Quote in 30 minutes — 9 AM to 11 PM IST, 7 days a week",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Bollywood Actor Booking Agency",
      paragraphs: [
        "Bollywood celebrity booking in India has never been more competitive — or more rewarding. With the explosion of destination weddings, premium corporate event culture and brand-led experiential marketing, the demand for Bollywood actor appearances has grown exponentially. TKC Talent stands at the centre of this market, managing 200+ celebrity bookings annually through direct relationships with every major Bollywood management house in Mumbai and Delhi.",
        "Our Bollywood actor roster covers the full commercial spectrum — from the global superstars (Shah Rukh Khan, Salman Khan, Aamir Khan) at ₹3.5–4 Crore and above, through current-generation A-list (Hrithik Roshan, Ranveer Singh, Ranbir Kapoor) at ₹2–2.5 Crore, to mid-tier stars (Kartik Aaryan, Tiger Shroff, Vicky Kaushal) delivering exceptional value at ₹50 Lakh to ₹1.5 Crore, and character icons like Pankaj Tripathi and Nawazuddin Siddiqui for content-driven brand campaigns.",
        "What separates TKC Talent from booking aggregators and directories is execution. Confirming an artist's name is the easy part — managing travel, rider requirements, security protocols, legal contracts, on-day coordination and post-event content rights is where most agencies fail. We manage the full stack: one team, one invoice, one point of accountability from first enquiry to final bow.",
      ],
    },
    artists: [
      { name: "Shah Rukh Khan", tier: "A-List", fee: "₹3.5 Cr – ₹4 Cr+", events: "Brand launches, luxury weddings", slug: "shah-rukh-khan" },
      { name: "Salman Khan", tier: "A-List", fee: "₹3.5 Cr – ₹4 Cr+", events: "Weddings, high-impact appearances", slug: "salman-khan" },
      { name: "Aamir Khan", tier: "A-List", fee: "₹3 Cr – ₹3.5 Cr+", events: "Premium brand campaigns", slug: "aamir-khan" },
      { name: "Akshay Kumar", tier: "A-List", fee: "₹2.5 Cr – ₹3 Cr+", events: "Corporate events, brand launches", slug: "akshay-kumar" },
      { name: "Hrithik Roshan", tier: "A-List", fee: "₹2 Cr – ₹2.5 Cr+", events: "Luxury events, fitness brands", slug: "hrithik-roshan" },
      { name: "Ranveer Singh", tier: "A-List", fee: "₹2 Cr – ₹2.5 Cr+", events: "Youth brands, high-energy events", slug: "ranveer-singh" },
      { name: "Ranbir Kapoor", tier: "A-List", fee: "₹2 Cr – ₹2.5 Cr+", events: "Premium weddings, lifestyle brands", slug: "ranbir-kapoor" },
      { name: "Ajay Devgn", tier: "A-List", fee: "₹2 Cr – ₹3 Cr+", events: "Government events, corporate", slug: "ajay-devgn" },
      { name: "Shahid Kapoor", tier: "A-List", fee: "₹1 Cr – ₹1.5 Cr+", events: "Weddings, fashion brands", slug: "shahid-kapoor" },
      { name: "Tiger Shroff", tier: "Mid-Tier", fee: "₹75 L – ₹1.5 Cr", events: "Action brands, youth events", slug: "tiger-shroff" },
      { name: "Varun Dhawan", tier: "Mid-Tier", fee: "₹75 L – ₹1 Cr", events: "Weddings, FMCG brands", slug: "varun-dhawan" },
      { name: "Kartik Aaryan", tier: "Mid-Tier", fee: "₹75 L – ₹1.5 Cr", events: "Youth brands, sangeet nights", slug: "kartik-aaryan" },
      { name: "Vicky Kaushal", tier: "Mid-Tier", fee: "₹60 L – ₹1 Cr", events: "Premium weddings, lifestyle", slug: "vicky-kaushal" },
      { name: "Sidharth Malhotra", tier: "Mid-Tier", fee: "₹50 L – ₹80 L", events: "Weddings, brand activations", slug: "sidharth-malhotra" },
      { name: "Aayushmann Khurrana", tier: "Mid-Tier", fee: "₹50 L – ₹75 L", events: "Social brands, corporate", slug: "aayushmann-khurrana" },
      { name: "Rajkummar Rao", tier: "Mid-Tier", fee: "₹50 L – ₹75 L", events: "Content brands, premium events", slug: "rajkummar-rao" },
      { name: "Pankaj Tripathi", tier: "Character", fee: "₹25 L – ₹50 L", events: "OTT brands, corporate events", slug: "pankaj-tripathi" },
      { name: "Sunny Deol", tier: "Retro Icon", fee: "₹75 L – ₹1 Cr", events: "Nostalgia campaigns, weddings", slug: "sunny-deol" },
      { name: "Saif Ali Khan", tier: "A-List", fee: "₹75 L – ₹1 Cr", events: "Luxury brands, premium events", slug: "saif-ali-khan" },
      { name: "Nawazuddin Siddiqui", tier: "Character", fee: "₹20 L – ₹40 L", events: "OTT, art-house brand campaigns", slug: "nawazuddin-siddiqui" },
    ],
    faqs: [
      { q: "How much does it cost to book a Bollywood actor for an event in India?", a: "Bollywood actor fees in India range from ₹20 Lakhs for character and emerging actors to ₹4 Crore+ for A-list superstars like Shah Rukh Khan or Salman Khan. The fee depends on the artist, event type, appearance duration and location. TKC Talent provides a fully itemised quote within 30 minutes." },
      { q: "Which Bollywood actors are available for weddings?", a: "Most Bollywood actors are available for luxury weddings and sangeet nights under signed confidentiality agreements. Popular wedding bookings include Shah Rukh Khan, Salman Khan, Hrithik Roshan, Ranveer Singh, Shahid Kapoor, Varun Dhawan and Kartik Aaryan." },
      { q: "How far in advance should I book a Bollywood actor?", a: "For A-list Bollywood actors, we recommend 90–120 days minimum. During peak wedding season (October to February), 6 months advance planning is strongly advised. Mid-tier actors can sometimes be confirmed within 30–45 days." },
      { q: "What does a Bollywood actor booking include?", a: "Availability confirmation, commercial negotiation, legal performance contract, artist rider management, GST-compliant invoicing, business class travel, 5-star hospitality, personal security coordination, green room setup and a dedicated on-ground TKC coordinator." },
      { q: "Can I book a Bollywood actor for a corporate event?", a: "Yes. Corporate bookings — annual days, product launches, leadership conclaves, brand activations — are one of TKC Talent's most active categories. Akshay Kumar, Ajay Devgn, Ranveer Singh and Kartik Aaryan are particularly popular." },
    ],
    related: relatedExcept("bollywood-celebrity-booking"),
    itemListName: "Bollywood Actors Available for Booking — TKC Talent 2026",
  },

  {
    slug: "bollywood-actress-booking",
    category: "Bollywood Actress Booking",
    title:
      "Book Bollywood Actress for Events India 2026 — Weddings & Brand Launches | TKC Talent",
    description:
      "Book Bollywood actresses for weddings, sangeet nights & brand campaigns across India. Deepika, Alia, Kareena, Katrina & 50+ artists. Verified 2026 fees. TKC Talent by The Kabir Company.",
    h1: "Book a Bollywood Actress for Your Event — Weddings, Brand Launches & Corporate Functions India 2026",
    primaryKw: "book bollywood actress for event India",
    secondaryKws:
      "bollywood actress booking fee 2026, hire actress for wedding India, book Deepika Padukone, book Alia Bhatt for event, Kareena Kapoor wedding booking",
    hero: {
      eyebrow: "Category 02 · Bollywood Actresses · 2026",
      headline: "Bollywood Actress",
      italicTail: "for your event.",
      intro:
        "TKC Talent manages India's most comprehensive Bollywood actress booking roster — across A-List, Mid-Tier, Rising, Versatile and Icon tiers. Whether you are planning a luxury sangeet night, a beauty brand launch, a fashion event or a landmark HNI celebration, we have the right actress for your occasion, audience and budget.",
      bullets: [
        "Bollywood actresses across A-List, Mid-Tier, Rising, Versatile & Icon tiers",
        "Fees from ₹8 L (Legacy icons) to ₹3.5 Cr+ (A-list) per appearance",
        "Weddings, sangeet nights, beauty brands, fashion events & corporate functions",
        "Full NDA management — complete confidentiality guaranteed",
        "Response within 30 minutes — direct access to artist management",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Bollywood Actress Booking Agency",
      paragraphs: [
        "Bollywood actress bookings for events in India have grown significantly over the past five years — driven by the rise of HNI destination weddings, the explosion of beauty and fashion brand activations, and increasing demand for female celebrity presence at corporate events and government functions.",
        "Our A-list roster — Deepika Padukone, Alia Bhatt, Kareena Kapoor Khan, Priyanka Chopra, Katrina Kaif — represents the absolute pinnacle of Bollywood female celebrity, commanding appearance fees from ₹1.5 Crore to ₹3.5 Crore. Mid-tier names like Kriti Sanon, Kiara Advani, Sonakshi Sinha, Yami Gautam and Jacqueline Fernandez deliver exceptional event value from ₹30 Lakh to ₹2 Crore.",
        "Every actress booking through TKC Talent is managed under a signed NDA — protecting your event, your family and your guests from unwanted publicity. We handle travel, 5-star accommodation, styling coordination, green room requirements, personal security and on-day event management.",
      ],
    },
    artists: [
      // A-List
      { name: "Deepika Padukone", tier: "A-List", fee: "₹2–3 Cr", events: "Beauty, luxury, premium events", image: "/actresses/deepika-padukone.png" },
      { name: "Alia Bhatt", tier: "A-List", fee: "₹2–2.5 Cr", events: "Youth brands, weddings", image: "/actresses/alia-bhatt.png" },
      { name: "Priyanka Chopra", tier: "A-List", fee: "₹2–3 Cr", events: "International brands, global events", image: "/actresses/priyanka-chopra.png" },
      { name: "Kareena Kapoor Khan", tier: "A-List", fee: "₹2.5–3.5 Cr", events: "Luxury weddings, HNI events", image: "/actresses/kareena-kapoor.png" },
      { name: "Katrina Kaif", tier: "A-List", fee: "₹1.5–2.5 Cr", events: "Beauty brands, weddings", image: "/actresses/katrina-kaif.png" },
      { name: "Anushka Sharma", tier: "A-List", fee: "₹2–3 Cr", events: "Premium brands, select events", image: "/actresses/anushka-sharma.png" },
      { name: "Kajol", tier: "A-List", fee: "₹1.5–2.5 Cr", events: "Family brands, heritage campaigns", image: "/actresses/kajol.png" },
      { name: "Rani Mukerji", tier: "A-List", fee: "₹1–2 Cr", events: "Premium events, family brands", image: "/actresses/rani-mukerji.png" },
      { name: "Vidya Balan", tier: "A-List", fee: "₹75 L–1.5 Cr", events: "Content brands, award events", image: "/actresses/vidya-balan.png" },
      // Mid-Tier
      { name: "Kriti Sanon", tier: "Mid-Tier", fee: "₹1.5–2 Cr", events: "Beauty, fashion, weddings", image: "/actresses/kirti-sanan.png" },
      { name: "Kiara Advani", tier: "Mid-Tier", fee: "₹1–1.5 Cr", events: "Weddings, youth brands", image: "/actresses/kiara-adwani.png" },
      { name: "Shraddha Kapoor", tier: "Mid-Tier", fee: "₹1–1.5 Cr", events: "Youth brands, sangeet nights", image: "/actresses/shraddha-kapoor.png" },
      { name: "Kangana Ranaut", tier: "Mid-Tier", fee: "₹1–1.5 Cr", events: "Premium brands, award events", image: "/actresses/kangana-ranaut.png" },
      { name: "Taapsee Pannu", tier: "Mid-Tier", fee: "₹30–60 L", events: "Content brands, corporate events", image: "/actresses/taapsee-pannu.png" },
      { name: "Ananya Panday", tier: "Mid-Tier", fee: "₹60–90 L", events: "Youth brands, fashion events", image: "/actresses/ananya-panday.png" },
      { name: "Vaani Kapoor", tier: "Mid-Tier", fee: "₹40–70 L", events: "Fashion, weddings", image: "/actresses/vaani-kapoor.png" },
      { name: "Sonakshi Sinha", tier: "Mid-Tier", fee: "₹40–70 L", events: "Weddings, fashion shows", image: "/actresses/sonakshi-sinha.png" },
      { name: "Yami Gautam", tier: "Mid-Tier", fee: "₹30–60 L", events: "Weddings, corporate events", image: "/actresses/yami-gautam.png" },
      { name: "Nora Fatehi", tier: "Mid-Tier", fee: "₹75 L–1.2 Cr", events: "Sangeet nights, performances", image: "/actresses/nora-fatehi.png" },
      { name: "Tamannaah Bhatia", tier: "Mid-Tier", fee: "₹1.5–2 Cr", events: "South India brands, weddings", image: "/actresses/tamanna-bhatia.png" },
      { name: "Esha Gupta", tier: "Mid-Tier", fee: "₹30–60 L", events: "Fashion, brand activations", image: "/actresses/esha-gupta.png" },
      { name: "Jacqueline Fernandez", tier: "Mid-Tier", fee: "₹40–75 L", events: "Brand events, sangeet nights", image: "/actresses/jacqueline-fern-ndez.png" },
      { name: "Urvashi Rautela", tier: "Mid-Tier", fee: "₹30–60 L", events: "Youth brands, performances", image: "/actresses/urvashi-rautela.png" },
      { name: "Sunny Leone", tier: "Mid-Tier", fee: "₹30–50 L", events: "Sangeet nights, brand events", image: "/actresses/sunny-leone.png" },
      { name: "Huma Qureshi", tier: "Mid-Tier", fee: "₹20–40 L", events: "Brand activations, events", image: "/actresses/huma-qureshi.png" },
      { name: "Sanya Malhotra", tier: "Mid-Tier", fee: "₹25–50 L", events: "Content brands, premium events", image: "/actresses/sanya-malhotra.png" },
      { name: "Fatima Sana Shaikh", tier: "Mid-Tier", fee: "₹20–40 L", events: "Brand campaigns, events", image: "/actresses/fatima-sana-shaikh.png" },
      { name: "Shruti Haasan", tier: "Mid-Tier", fee: "₹40–70 L", events: "South brands, weddings", image: "/actresses/shruti-haasan.png" },
      { name: "Tara Sutaria", tier: "Mid-Tier", fee: "₹20–40 L", events: "Fashion, youth brands", image: "/actresses/tara-sutaria.png" },
      { name: "Nushrratt Bharuccha", tier: "Mid-Tier", fee: "₹20–40 L", events: "Brand activations, events", image: "/actresses/nushrratt-bharuccha.png" },
      { name: "Chitrangada Singh", tier: "Mid-Tier", fee: "₹15–30 L", events: "Premium brands, fashion", image: "/actresses/chitrangada-singh.png" },
      // Rising
      { name: "Janhvi Kapoor", tier: "Rising", fee: "₹60–80 L", events: "Youth brands, weddings", image: "/actresses/janhvi-kapoor.png" },
      { name: "Sara Ali Khan", tier: "Rising", fee: "₹60–80 L", events: "Youth brands, fashion", image: "/actresses/sara-ali-khan.png" },
      { name: "Disha Patani", tier: "Rising", fee: "₹50–75 L", events: "Fitness, fashion brands", image: "/actresses/disha-patani.png" },
      { name: "Sharvari Wagh", tier: "Rising", fee: "₹40–60 L", events: "Brand campaigns, events", image: "/actresses/sharvari-wagh.png" },
      { name: "Rashmika Mandanna", tier: "Rising", fee: "₹75 L–1.5 Cr", events: "Pan-India brands, youth events", image: "/actresses/rashmika-mandanna.png" },
      { name: "Pooja Hegde", tier: "Rising", fee: "₹60–90 L", events: "Pan-India brands, weddings", image: "/actresses/pooja-hegde.png" },
      { name: "Mrunal Thakur", tier: "Rising", fee: "₹25–45 L", events: "Content brands, fashion", image: "/actresses/mrinal-thakur.png" },
      { name: "Wamiqa Gabbi", tier: "Rising", fee: "₹15–30 L", events: "Content brands, events", image: "/actresses/wamiqa-gabbi.png" },
      { name: "Adah Sharma", tier: "Rising", fee: "₹15–25 L", events: "Brand activations, events", image: "/actresses/adah-sharma.png" },
      { name: "Rakul Preet", tier: "Rising", fee: "₹40–70 L", events: "Pan-India brands, weddings", image: "/actresses/rakul-preet.png" },
      { name: "Sreeleela", tier: "Rising", fee: "₹40–70 L", events: "South brands, youth events", image: "/actresses/sreeleela.png" },
      { name: "Aneet Padda", tier: "Rising", fee: "₹15–30 L", events: "Emerging brands, events", image: "/actresses/aneet-padda.png" },
      { name: "Palak Tiwari", tier: "Rising", fee: "₹15–30 L", events: "Youth brands, fashion", image: "/actresses/palak-tiwari.png" },
      { name: "Shanaya Kapoor", tier: "Rising", fee: "₹15–30 L", events: "Fashion, lifestyle brands", image: "/actresses/shanaya-kapoor.png" },
      { name: "Sonam Bajwa", tier: "Rising", fee: "₹20–40 L", events: "Punjabi brands, weddings", image: "/actresses/sonam-bajwa.png" },
      { name: "Nikita Dutta", tier: "Rising", fee: "₹10–20 L", events: "Brand activations, events", image: "/actresses/nikita-dutta.png" },
      { name: "Rhea Chakraborty", tier: "Rising", fee: "₹10–20 L", events: "Lifestyle brands, events", image: "/actresses/rhea-chakraborty.png" },
      { name: "Karishma Tanna", tier: "Rising", fee: "₹10–20 L", events: "Brand activations, events", image: "/actresses/karishma-tanna.png" },
      // Versatile
      { name: "Konkona Sen Sharma", tier: "Versatile", fee: "₹20–40 L", events: "OTT brands, premium events", image: "/actresses/konkona-sen-sharma.png" },
      { name: "Aditi Rao Hydari", tier: "Versatile", fee: "₹20–40 L", events: "Heritage, luxury brands", image: "/actresses/aditi-rao-hydari.png" },
      { name: "Nimrat Kaur", tier: "Versatile", fee: "₹15–30 L", events: "Premium brands, OTT events", image: "/actresses/nimrat-kaur.png" },
      { name: "Dia Mirza", tier: "Versatile", fee: "₹10–20 L", events: "Sustainability brands, events", image: "/actresses/dia-mirza.png" },
      // Icons & TV
      { name: "Shilpa Shetty", tier: "Icon", fee: "₹30–60 L", events: "Wellness brands, lifestyle events", image: "/actresses/shilpa-shetty.png" },
      { name: "Lara Dutta", tier: "Icon", fee: "₹15–30 L", events: "Beauty brands, nostalgia events", image: "/actresses/lara-dutta.png" },
      { name: "Mandira Bedi", tier: "Icon", fee: "₹8–15 L", events: "Lifestyle, wellness events", image: "/actresses/mandira-bedi.png" },
      { name: "Saumya Tandon", tier: "TV Icon", fee: "₹6–12 L", events: "TV brand activations, events", image: "/actresses/saumya-tandon.png" },
      { name: "Jennifer Winget", tier: "TV Icon", fee: "₹8–15 L", events: "TV brand events, fashion", image: "/actresses/jennifer-winget.png" },
      { name: "Shweta Tiwari", tier: "TV Icon", fee: "₹10–12 L", events: "TV brand events, lifestyle", image: "/actresses/shweta-tiwari.png" },
      { name: "Shehnaaz Gill", tier: "Rising", fee: "₹20–25 L", events: "Youth brands, sangeet nights", image: "/actresses/shehnaz-gill.png" },
    ],
    faqs: [
      { q: "How much does it cost to book a Bollywood actress for a wedding?", a: "Bollywood actress fees for weddings range from ₹8 Lakhs (icon/legacy tier) to ₹3.5 Crore+ (A-list). Deepika Padukone and Kareena Kapoor Khan are at the top end; mid-tier stars like Yami Gautam and Sonakshi Sinha offer excellent value at ₹30–70 Lakhs." },
      { q: "Can a Bollywood actress attend a private sangeet night?", a: "Yes. Bollywood actresses regularly appear at sangeet nights, wedding receptions and HNI private celebrations under signed confidentiality agreements. TKC Talent manages all logistics and ensures complete discretion." },
      { q: "Which Bollywood actress is best for a beauty brand launch?", a: "Deepika Padukone, Katrina Kaif, Alia Bhatt, Kriti Sanon and Kiara Advani are among the most effective Bollywood actresses for beauty and cosmetics brand launches, given their fashion and beauty brand equity." },
      { q: "How do I book Kareena Kapoor Khan for my event?", a: "Contact TKC Talent with your event date, location, type and budget. We check Kareena's availability immediately, prepare a commercial proposal and manage the full booking. We recommend booking at least 120 days in advance for A-list actresses." },
      { q: "Are actress bookings kept confidential?", a: "Yes — all actress bookings for private events (weddings, sangeet nights, HNI functions) are managed under a signed NDA. No public announcement is made before management approval." },
    ],
    related: relatedExcept("bollywood-actress-booking"),
    itemListName: "Bollywood Actresses Available for Booking — TKC Talent 2026",
  },

  {
    slug: "singer-booking-india",
    category: "Singer Booking India",
    title:
      "Singer Booking India 2026 — Book Playback Singers for Weddings & Events | TKC Talent",
    description:
      "Book India's top playback singers & live performers for weddings, sangeet nights & concerts. Arijit Singh, Badshah, Neha Kakkar, Diljit Dosanjh & 35+ artists. Verified 2026 fees.",
    h1: "Singer Booking India 2026 — Book Playback Artists & Live Performers for Weddings, Sangeet Nights & Concerts",
    primaryKw: "singer booking India",
    secondaryKws:
      "book singer for wedding India, Arijit Singh booking fee, book Neha Kakkar sangeet, playback singer for event, live singer booking Delhi",
    hero: {
      eyebrow: "Category 03 · Playback & Live · 2026",
      headline: "Singer booking,",
      italicTail: "from sangeet to stadium.",
      intro:
        "TKC Talent manages India's most comprehensive singer booking roster — from Arijit Singh and A. R. Rahman at the absolute top of Indian music, through Badshah, Neha Kakkar, Guru Randhawa, Diljit Dosanjh and 30+ more, down to emerging regional talent for mid-budget occasions.",
      bullets: [
        "35+ singers across Top-Tier, Mid-Tier, Emerging & Regional categories",
        "Fees from ₹3 L (regional emerging) to ₹14 Cr+ (concert headliners)",
        "Sangeet nights, weddings, corporate galas, concerts & festivals",
        "Full sound, light & production management through TKC's in-house team",
        "Sound & technical rider review included — no surprises on event day",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Singer Booking Agency",
      paragraphs: [
        "Singer booking for weddings and events in India is the highest-volume celebrity booking category — and the one where getting it right matters most. The right singer transforms a sangeet night from a party into a memory.",
        "Our top-tier singer roster covers the artists that every client dreams of but struggles to access directly. Arijit Singh — India's most beloved romantic voice — commands a wedding booking fee of ₹1.2 Crore to ₹5 Crore depending on set duration, band, location and event scale. Badshah delivers the high-energy, anthemic sangeet performance that lights up a 1,000-person hall.",
        "Every TKC Talent singer booking includes full sound and production management through our in-house technical team — ensuring the artist's performance sounds as good as it looks. We manage stage setup, sound engineering, band requirements, lighting coordination and run-of-show scripting.",
      ],
    },
    artists: [
      { name: "Arijit Singh", tier: "Top Tier", fee: "₹1.2 Cr – ₹5 Cr+", events: "Sangeet nights, luxury weddings", slug: "arijit-singh" },
      { name: "A. R. Rahman", tier: "Top Tier", fee: "₹2 Cr – ₹3 Cr+", events: "Premium concerts, brand events", slug: "ar-rahman" },
      { name: "Diljit Dosanjh", tier: "Top Tier", fee: "₹1 Cr – ₹2 Cr", events: "Weddings, Punjabi celebrations", slug: "diljit-dosanjh" },
      { name: "Badshah", tier: "Top Tier", fee: "₹1 Cr – ₹1.5 Cr", events: "Sangeet, corporate, brand events", slug: "badshah" },
      { name: "Neha Kakkar", tier: "Top Tier", fee: "₹80 L – ₹1.2 Cr", events: "Sangeet nights, concerts", slug: "neha-kakkar" },
      { name: "Sonu Nigam", tier: "Top Tier", fee: "₹55 L – ₹80 L", events: "Weddings, cultural events", slug: "sonu-nigam" },
      { name: "Sunidhi Chauhan", tier: "Top Tier", fee: "₹40 L – ₹70 L", events: "Sangeet, award nights", slug: "sunidhi-chauhan" },
      { name: "Shankar Mahadevan", tier: "Top Tier", fee: "₹50 L – ₹80 L", events: "Cultural events, premium weddings", slug: "shankar-mahadevan" },
      { name: "Guru Randhawa", tier: "Mid-Tier", fee: "₹60 L – ₹90 L", events: "Sangeet, youth events", slug: "guru-randhawa" },
      { name: "Jubin Nautiyal", tier: "Mid-Tier", fee: "₹60 L – ₹85 L", events: "Romantic weddings, events", slug: "jubin-nautiyal" },
      { name: "Shreya Ghoshal", tier: "Mid-Tier", fee: "₹50 L – ₹80 L", events: "Classical-fusion weddings", slug: "shreya-ghoshal" },
      { name: "B Praak", tier: "Mid-Tier", fee: "₹15 L – ₹1 Cr", events: "Emotional weddings, sangeet", slug: "b-praak" },
      { name: "Darshan Raval", tier: "Mid-Tier", fee: "₹30 L – ₹60 L", events: "Romantic sangeet, college events", slug: "darshan-raval" },
      { name: "Armaan Malik", tier: "Mid-Tier", fee: "₹30 L – ₹55 L", events: "Weddings, brand events", slug: "armaan-malik" },
      { name: "Lucky Ali", tier: "Mid-Tier", fee: "₹20 L – ₹40 L", events: "Nostalgic sangeet, corporate", slug: "lucky-ali" },
      { name: "Mohit Chauhan", tier: "Mid-Tier", fee: "₹25 L – ₹45 L", events: "Soulful weddings, private events", slug: "mohit-chauhan" },
      { name: "Udit Narayan", tier: "Legend", fee: "₹40 L – ₹60 L", events: "Nostalgic sangeet, HNI events", slug: "udit-narayan" },
      { name: "Kumar Sanu", tier: "Legend", fee: "₹30 L – ₹50 L", events: "Retro weddings, nostalgia events", slug: "kumar-sanu" },
      { name: "Alka Yagnik", tier: "Legend", fee: "₹30 L – ₹50 L", events: "Nostalgia, premium weddings", slug: "alka-yagnik" },
      { name: "Asees Kaur", tier: "Emerging", fee: "₹8 L – ₹15 L", events: "Weddings, mid-budget events", slug: "asees-kaur" },
      { name: "Palak Muchhal", tier: "Emerging", fee: "₹10 L – ₹15 L", events: "Sangeet, weddings", slug: "palak-muchhal" },
      { name: "Shamsher Lehri", tier: "Regional", fee: "₹5 L – ₹12 L", events: "Haryanvi/Punjabi events", slug: "shamsher-lehri" },
    ],
    faqs: [
      { q: "How much does it cost to book Arijit Singh for a wedding?", a: "Arijit Singh's fee for weddings and sangeet nights ranges from ₹1.2 Crore to ₹5 Crore, depending on set duration, band size, location and event scale. He is India's most requested singer for luxury weddings." },
      { q: "Which singer should I book for a sangeet night?", a: "For high-energy sangeet nights, Badshah, Guru Randhawa, Neha Kakkar and Diljit Dosanjh are consistently top performers. For romantic, emotional sangeet evenings, Arijit Singh, Jubin Nautiyal and B Praak deliver the most impact." },
      { q: "What is Badshah's booking fee for an event?", a: "Badshah's performance fee ranges from ₹1–1.5 Crore for weddings and private events, and ₹2–4 Crore for large-scale concerts." },
      { q: "Does the singer booking include sound and production?", a: "Yes. All TKC Talent singer bookings include full technical rider review, sound engineering coordination, stage setup management and a dedicated on-ground coordinator." },
      { q: "Can I book multiple singers for the same event?", a: "Yes — TKC Talent regularly manages multi-artist singer bookings for large-scale weddings, concerts and festivals." },
    ],
    related: relatedExcept("singer-booking-india"),
    itemListName: "Singers Available for Booking India — TKC Talent 2026",
  },

  {
    slug: "comedian-booking-india",
    category: "Comedian Booking India",
    title:
      "Book Comedian for Corporate Event India 2026 — Stand-Up Comedy Booking | TKC Talent",
    description:
      "Book India's top stand-up comedians for corporate events, private parties & weddings. Sunil Grover, Kapil Sharma, Zakir Khan & 15+ artists. Verified 2026 fees. TKC Talent.",
    h1: "Comedian Booking India 2026 — Hire Stand-Up Comedians for Corporate Events, Weddings & Private Parties",
    primaryKw: "book comedian for corporate event India",
    secondaryKws:
      "stand-up comedian booking India, Sunil Grover booking fee, book Kapil Sharma for event, comedian for annual day, comedy show corporate India",
    hero: {
      eyebrow: "Category 04 · Stand-Up & Crossover · 2026",
      headline: "Comedian booking,",
      italicTail: "calibrated for the room.",
      intro:
        "Comedy is India's fastest-growing corporate entertainment category. TKC Talent manages the country's most sought-after stand-up comedians — from Bollywood crossover names like Sunil Grover and Kapil Sharma to Netflix-era stand-ups like Zakir Khan, Munawar Faruqui and Anubhav Singh Bassi.",
      bullets: [
        "16 comedians from Top-Tier Bollywood crossover to rising Netflix-era stand-ups",
        "Fees from ₹6 L (emerging) to ₹60 L+ (Kapil Sharma, Munawar Faruqui)",
        "Corporate events, annual days, wedding sangeet, private parties & college fests",
        "Content review and approval included — brand-safe, audience-appropriate",
        "Sets in Hindi, English or bilingual depending on audience",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Comedian Booking Agency",
      paragraphs: [
        "Stand-up comedy bookings for corporate events in India have grown 300% over the past five years — as HR teams, brand managers and event organisers have discovered that a great comedian delivers better employee engagement and stronger social media moments than almost any other entertainment format.",
        "At the top tier, Kapil Sharma and Sunil Grover are Bollywood crossover stars who bring instant recognition and guaranteed laughter. Munawar Faruqui has become one of the most requested names for premium comedy shows. Zakir Khan, Kanan Gill, Biswa Kalyan Rath, Anubhav Singh Bassi and Kenny Sebastian represent the Netflix-era golden generation of Indian stand-up.",
        "Every TKC Talent comedy booking includes content calibration — our team works with the comedian's management to ensure the set is appropriate for your audience, brand context and any content restrictions you require.",
      ],
    },
    artists: [
      { name: "Kapil Sharma", tier: "Top Tier", fee: "₹40 L – ₹60 L", events: "Corporate galas, HNI events", slug: "kapil-sharma" },
      { name: "Sunil Grover", tier: "Top Tier", fee: "₹30 L – ₹35 L", events: "Corporate, weddings, private", slug: "sunil-grover" },
      { name: "Munawar Faruqui", tier: "Top Tier", fee: "₹25 L – ₹40 L", events: "Youth events, premium shows", slug: "munawar-faruqui" },
      { name: "Bharti Singh", tier: "Top Tier", fee: "₹20 L – ₹30 L", events: "Family events, corporate", slug: "bharti-singh" },
      { name: "Krushna Abhishek", tier: "Top Tier", fee: "₹15 L – ₹25 L", events: "Corporate events, award nights", slug: "krushna-abhishek" },
      { name: "Zakir Khan", tier: "Mid-Tier", fee: "₹20 L – ₹30 L", events: "Youth events, college fests", slug: "zakir-khan" },
      { name: "Anubhav Singh Bassi", tier: "Mid-Tier", fee: "₹15 L – ₹25 L", events: "Corporate, premium shows", slug: "anubhav-singh-bassi" },
      { name: "Aakash Gupta", tier: "Mid-Tier", fee: "₹15 L – ₹25 L", events: "Corporate galas, private events", slug: "aakash-gupta" },
      { name: "Kenny Sebastian", tier: "Mid-Tier", fee: "₹15 L – ₹22 L", events: "English-language corporate", slug: "kenny-sebastian" },
      { name: "Kanan Gill", tier: "Mid-Tier", fee: "₹12 L – ₹20 L", events: "Corporate, college, private", slug: "kanan-gill" },
      { name: "Biswa Kalyan Rath", tier: "Mid-Tier", fee: "₹15 L – ₹25 L", events: "Niche corporate, premium shows", slug: "biswa-kalyan-rath" },
      { name: "Abish Mathew", tier: "Mid-Tier", fee: "₹10 L – ₹18 L", events: "Corporate, English-speaking audiences", slug: "abish-mathew" },
      { name: "Samay Raina", tier: "Rising", fee: "₹10 L – ₹20 L", events: "Youth-focused events, tech brands", slug: "samay-raina" },
      { name: "Gaurav Kapoor", tier: "Rising", fee: "₹8 L – ₹15 L", events: "Corporate events, college fests", slug: "gaurav-kapoor" },
      { name: "Rahul Subramanian", tier: "Mid-Tier", fee: "₹10 L – ₹15 L", events: "Corporate, premium shows", slug: "rahul-subramanian" },
      { name: "Nishant Tanwar", tier: "Rising", fee: "₹6 L – ₹12 L", events: "Emerging shows, college events", slug: "nishant-tanwar" },
    ],
    faqs: [
      { q: "How much does it cost to book a comedian for a corporate event in India?", a: "Comedy booking fees in India range from ₹6 Lakhs for emerging stand-ups to ₹60 Lakhs+ for Kapil Sharma at the top of the market. Most high-quality mid-tier comedians fall in the ₹12–25 Lakh range." },
      { q: "How much does Sunil Grover charge for a corporate event?", a: "Sunil Grover's fee for corporate events and private parties is approximately ₹30–35 Lakhs per show. He is one of India's most versatile comedy entertainers." },
      { q: "Can the comedian customise their set for our company event?", a: "Yes — all comedians in TKC Talent's roster can customise sets for corporate audiences. Content is reviewed and approved by your team before the event." },
      { q: "Which comedian is best for a large corporate annual day?", a: "For large corporate annual days (500+ guests), Kapil Sharma, Sunil Grover and Munawar Faruqui offer the widest audience appeal. For mid-size events, Zakir Khan, Aakash Gupta and Anubhav Singh Bassi consistently deliver." },
      { q: "Can a comedian perform at a wedding or sangeet night?", a: "Yes. Sunil Grover, Bharti Singh and Krushna Abhishek are particularly effective at wedding functions, blending entertainment with warmth and family-friendly humour." },
    ],
    related: relatedExcept("comedian-booking-india"),
    itemListName: "Comedians Available for Booking India — TKC Talent 2026",
  },

  {
    slug: "celebrity-dj-booking",
    category: "Celebrity DJ Booking",
    title:
      "Celebrity DJ Booking India 2026 — Hire DJs for Weddings & Events | TKC Talent",
    description:
      "Book India's top celebrity DJs for weddings, after-parties & corporate events. DJ Aqeel, DJ Chetas, DJ NYK & more. Full sound & production management. Verified 2026 fees.",
    h1: "Celebrity DJ Booking India 2026 — Hire Top DJs for Weddings, After-Parties & Corporate Events",
    primaryKw: "celebrity DJ booking India",
    secondaryKws:
      "book DJ for wedding India, best DJ for sangeet, DJ Aqeel booking fee, celebrity DJ for corporate event, top DJ for wedding Delhi",
    hero: {
      eyebrow: "Category 05 · DJs & Production · 2026",
      headline: "Celebrity DJ booking,",
      italicTail: "production included.",
      intro:
        "A headline DJ transforms a wedding reception, sangeet after-party or corporate gala into a full sensory experience. TKC Talent books India's most sought-after celebrity DJs with full sound, lighting and production management through our in-house technical team.",
      bullets: [
        "12 celebrity DJs across Top-Tier, Mid-Tier and Emerging categories",
        "Full sound, lighting and production management through TKC's in-house team",
        "Fees from ₹4 L (emerging) to ₹40 L+ (DJ Aqeel, DJ Chetas)",
        "Weddings, sangeet after-parties, corporate galas, nightlife & destination events",
        "International DJs available on request (Martin Garrix, DJ Snake — on application)",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Celebrity DJ Booking Agency",
      paragraphs: [
        "Celebrity DJ booking for weddings and corporate events in India has become a mainstream entertainment category — with HNI families and corporate event teams recognising that a headline DJ delivers a level of energy and atmosphere no live band or playlist system can replicate.",
        "India's top celebrity DJs — DJ Aqeel, DJ Chetas, DJ NYK — are entertainment brands in their own right, with Bollywood industry connections and the ability to read and amplify a room. Their Bollywood-to-EDM genre fluency means they can serve every demographic in an Indian wedding from grandparents to the college-age cousins.",
        "TKC Talent's DJ bookings are unique because we manage the full production stack internally — sound system, DJ booth, lighting rig, on-day setup and sound engineering — so you deal with one team, one brief and one responsibility.",
      ],
    },
    artists: [
      { name: "DJ Aqeel", tier: "Top Tier", fee: "₹20 L – ₹40 L", events: "Luxury weddings, premium nightlife", slug: "dj-aqeel" },
      { name: "DJ Chetas", tier: "Top Tier", fee: "₹20 L – ₹35 L", events: "Sangeet after-parties, corporate", slug: "dj-chetas" },
      { name: "DJ NYK", tier: "Top Tier", fee: "₹15 L – ₹30 L", events: "Weddings, festivals, nightlife", slug: "dj-nyk" },
      { name: "DJ Khushi", tier: "Top Tier", fee: "₹15 L – ₹25 L", events: "Weddings, after-parties", slug: "dj-khushi" },
      { name: "DJ Suketu", tier: "Top Tier", fee: "₹15 L – ₹25 L", events: "Corporate events, nightlife", slug: "dj-suketu" },
      { name: "DJ Kiran Kamath", tier: "Mid-Tier", fee: "₹10 L – ₹20 L", events: "Weddings, corporate galas", slug: "dj-kiran-kamath" },
      { name: "DJ Notorious", tier: "Mid-Tier", fee: "₹10 L – ₹18 L", events: "Premium weddings, nightlife", slug: "dj-notorious" },
      { name: "DJ Shadow Delhi", tier: "Mid-Tier", fee: "₹8 L – ₹15 L", events: "Corporate events, club nights", slug: "dj-shadow-delhi" },
      { name: "DJ Sheizwood", tier: "Mid-Tier", fee: "₹8 L – ₹15 L", events: "Weddings, destination events", slug: "dj-sheizwood" },
      { name: "DJ Skip", tier: "Emerging", fee: "₹5 L – ₹10 L", events: "Corporate, mid-budget weddings", slug: "dj-skip" },
      { name: "DJ Hardik", tier: "Emerging", fee: "₹4 L – ₹8 L", events: "Intimate weddings, college events", slug: "dj-hardik" },
    ],
    faqs: [
      { q: "How much does it cost to book a celebrity DJ for a wedding in India?", a: "Celebrity DJ fees for weddings range from ₹4 Lakhs for emerging DJs to ₹40 Lakhs+ for top-tier names like DJ Aqeel and DJ Chetas. Mid-tier DJs offer excellent value in the ₹8–20 Lakh range." },
      { q: "Which DJ is best for a sangeet after-party?", a: "DJ Chetas, DJ NYK and DJ Aqeel are the most popular choices for sangeet after-parties — they excel at Bollywood-to-EDM transitions that keep all age groups on the dancefloor." },
      { q: "Does the DJ booking include sound and lighting equipment?", a: "Yes. All TKC Talent DJ bookings include full sound, lighting and production management through our in-house technical team. No need to coordinate a separate production company." },
      { q: "Can I book a DJ for a destination wedding in Goa, Jaipur or Udaipur?", a: "Yes. TKC Talent manages DJ bookings for destination weddings across Goa, Jaipur, Udaipur and other premium destination wedding venues." },
      { q: "Are international DJs available through TKC Talent?", a: "Yes, on application. International DJs including globally touring artists are available for large-scale concerts and high-budget brand events." },
    ],
    related: relatedExcept("celebrity-dj-booking"),
    itemListName: "Celebrity DJs Available for Booking India — TKC Talent 2026",
  },

  {
    slug: "pan-india-celebrity-booking",
    category: "Pan-India Celebrity Booking",
    title:
      "Pan-India Celebrity Booking 2026 — Book South Indian Stars for Events | TKC Talent",
    description:
      "Book Pan-India & South Indian celebrities for events across India. Prabhas, Allu Arjun, Rajinikanth, Nayanthara & more. Direct access, verified 2026 fees. TKC Talent.",
    h1: "Pan-India Celebrity Booking 2026 — Hire South Indian & Regional Stars for Events, Brands & Weddings",
    primaryKw: "pan-India celebrity booking",
    secondaryKws:
      "book Prabhas for event, Allu Arjun booking fee, South Indian celebrity booking India, book Rajinikanth, Nayanthara appearance fee, pan-India star for brand launch",
    hero: {
      eyebrow: "Category 06 · South & Regional · 2026",
      headline: "Pan-India stars,",
      italicTail: "directly booked.",
      intro:
        "The pan-India entertainment market has been permanently transformed by RRR, KGF, Pushpa and Pathaan. TKC Talent is one of the few North India-based celebrity agencies with genuine, direct access to South Indian talent management across Chennai, Hyderabad, Bengaluru and Kochi.",
      bullets: [
        "16 Pan-India & South Indian stars across Telugu, Tamil, Malayalam & Kannada industries",
        "Fees from ₹30 L (emerging regional) to ₹8 Cr+ (Rajinikanth, Prabhas)",
        "Brand launches, corporate events, weddings, concerts & government functions",
        "Direct network in Chennai, Hyderabad, Bengaluru & Kochi management ecosystems",
        "Pan-India execution: any city in India, any event format, any scale",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Pan-India Celebrity Booking Agency",
      paragraphs: [
        "The explosion of Pan-India cinema has created a celebrity booking market that most North Indian agencies are unprepared for. TKC Talent saw this shift coming and built the relationships to serve it.",
        "Our network in the South Indian entertainment industry spans management agencies in Chennai, Hyderabad, Bengaluru and Kochi — giving us direct access to the talent management ecosystem that controls bookings for Rajinikanth, Kamal Haasan, Mahesh Babu, Vijay (Thalapathy), Nayanthara, Samantha Ruth Prabhu and the full roster of South Indian superstars.",
        "For brands targeting Pan-India audiences, South Indian superstars now offer something no Bollywood star can: genuine market penetration in Tamil Nadu, Andhra Pradesh, Telangana, Karnataka and Kerala, combined with rapidly growing national recognition.",
      ],
    },
    artists: [
      { name: "Prabhas", tier: "Pan-India A-List", fee: "₹3 Cr – ₹5 Cr+", events: "Mega brand launches, premium events", slug: "prabhas" },
      { name: "Allu Arjun", tier: "Pan-India A-List", fee: "₹2 Cr – ₹4 Cr+", events: "Brand campaigns, national launches", slug: "allu-arjun" },
      { name: "Rajinikanth", tier: "Legend", fee: "₹5 Cr – ₹8 Cr+", events: "Landmark events, Tamil brand campaigns", slug: "rajinikanth" },
      { name: "Kamal Haasan", tier: "Legend", fee: "₹3 Cr – ₹5 Cr+", events: "Premium events, cultural functions", slug: "kamal-haasan" },
      { name: "Vijay (Thalapathy)", tier: "Pan-India A-List", fee: "₹3 Cr – ₹5 Cr+", events: "Tamil brand launches, mass events", slug: "vijay-thalapathy" },
      { name: "Yash (KGF)", tier: "Pan-India A-List", fee: "₹3 Cr – ₹5 Cr+", events: "Mass brand campaigns, national events", slug: "yash" },
      { name: "Mahesh Babu", tier: "Pan-India A-List", fee: "₹2 Cr – ₹4 Cr+", events: "Telugu brand launches, corporate", slug: "mahesh-babu" },
      { name: "Ram Charan", tier: "Pan-India A-List", fee: "₹2 Cr – ₹4 Cr+", events: "Brand launches, pan-India events", slug: "ram-charan" },
      { name: "Jr. NTR", tier: "Pan-India A-List", fee: "₹2 Cr – ₹4 Cr+", events: "Pan-India brands, Telugu events", slug: "jr-ntr" },
      { name: "Dhanush", tier: "Pan-India A-List", fee: "₹1.5 Cr – ₹3 Cr+", events: "Tamil & national brands", slug: "dhanush" },
      { name: "Nayanthara", tier: "Pan-India A-List", fee: "₹2 Cr – ₹3.5 Cr+", events: "Pan-India brands, luxury events", slug: "nayanthara" },
      { name: "Samantha Ruth Prabhu", tier: "Pan-India A-List", fee: "₹1.5 Cr – ₹2.5 Cr+", events: "Brand campaigns, wellness events", slug: "samantha-ruth-prabhu" },
      { name: "Vijay Sethupathi", tier: "Pan-India Mid", fee: "₹1 Cr – ₹2 Cr+", events: "Premium events, brand films", slug: "vijay-sethupathi" },
      { name: "Fahadh Faasil", tier: "Regional", fee: "₹75 L – ₹1.5 Cr+", events: "Kerala brands, OTT events", slug: "fahadh-faasil" },
      { name: "Dulquer Salmaan", tier: "Regional", fee: "₹75 L – ₹1.5 Cr+", events: "Kerala & national brands", slug: "dulquer-salmaan" },
      { name: "Tovino Thomas", tier: "Regional", fee: "₹30 L – ₹60 L", events: "Kerala brands, regional events", slug: "tovino-thomas" },
    ],
    faqs: [
      { q: "How much does it cost to book Prabhas for an event in India?", a: "Prabhas's event appearance fee is approximately ₹3–5 Crore per appearance, exclusive of GST, travel and hospitality. He is one of India's highest-valued celebrities post-Pushpa and Kalki 2898-AD." },
      { q: "Can I book Allu Arjun for a brand launch in Delhi?", a: "Yes. TKC Talent manages Allu Arjun bookings for events across Delhi, Mumbai, Jaipur, Goa and all major Indian cities. His fee for events is approximately ₹2–4 Crore." },
      { q: "How do I book a South Indian celebrity if I'm based in Delhi or Mumbai?", a: "Contact TKC Talent directly. We have direct management relationships in Chennai, Hyderabad, Bengaluru and Kochi — so we can confirm availability, negotiate fees and manage the full logistics for South Indian celebrity appearances at events in any Indian city." },
      { q: "Which South Indian celebrity is best for a pan-India brand campaign?", a: "For pan-India brand campaigns, Prabhas, Allu Arjun and Nayanthara offer the widest cross-regional appeal. For Tamil Nadu, Vijay (Thalapathy) or Rajinikanth. For Kerala, Fahadh Faasil and Dulquer Salmaan." },
      { q: "Are South Indian celebrity bookings more expensive than Bollywood?", a: "Pan-India superstars like Prabhas, Allu Arjun, Rajinikanth and Nayanthara command fees comparable to Bollywood's top tier — ₹2–8 Crore per appearance. Regional South Indian stars offer excellent value at ₹30 Lakh to ₹1.5 Crore." },
    ],
    related: relatedExcept("pan-india-celebrity-booking"),
    itemListName: "Pan-India & South Indian Stars Available for Booking — TKC Talent 2026",
  },

  {
    slug: "influencer-booking-india",
    category: "Influencer Booking India",
    title:
      "Book Influencer for Brand Campaign India 2026 — Digital Creator Booking | TKC Talent",
    description:
      "Book India's top digital influencers & content creators for brand campaigns, product launches & events. Bhuvan Bam, CarryMinati, Prajakta Koli & more. Verified 2026 fees.",
    h1: "Influencer & Digital Creator Booking India 2026 — Hire Top Content Creators for Brand Campaigns & Events",
    primaryKw: "book influencer for brand campaign India",
    secondaryKws:
      "influencer booking fee India 2026, hire digital creator for product launch, book Bhuvan Bam, YouTube influencer for event, content creator booking India",
    hero: {
      eyebrow: "Category 07 · Digital Creators · 2026",
      headline: "Influencer booking,",
      italicTail: "fully managed.",
      intro:
        "India's digital creator economy has matured into one of the most powerful brand marketing channels in the world. TKC Talent connects brands with India's most-followed and most-trusted digital influencers for product launches, brand campaigns, experiential activations and corporate events.",
      bullets: [
        "12 influencers from Mega (20M+ subscribers) to Macro (1M+ followers) tiers",
        "Fees from ₹4 L (macro creators) to ₹50 L+ (mega creators) per campaign",
        "Product launches, brand campaigns, IPO events, experiential activations & corporate events",
        "Content brief review, compliance, deliverable management & performance reporting included",
        "Combined reach: 200M+ followers across YouTube, Instagram & Shorts",
      ],
    },
    longForm: {
      heading: "TKC Talent — India's Premier Influencer Booking Agency",
      paragraphs: [
        "Indian digital influencer marketing has crossed ₹3,500 Crore in annual spend — and for good reason. A single Instagram reel from Bhuvan Bam or a YouTube integration from CarryMinati reaches 10–25 million highly engaged viewers at a fraction of the cost of traditional celebrity advertising.",
        "Our influencer roster is curated for brand fit, not just follower count. Bhuvan Bam (BB Ki Vines) delivers unmatched youth brand comedy integration. CarryMinati and Triggered Insaan own India's gaming and tech brand space. Ranveer Allahbadia (BeerBiceps) is the gold standard for premium wellness, finance and luxury brand partnerships.",
        "TKC Talent's influencer booking process goes far beyond confirmation and fee collection. We manage the full partnership lifecycle: content brief development, creator review and revision cycles, compliance and disclosure requirements, deliverable approval, go-live coordination and performance metric reporting.",
      ],
    },
    artists: [
      { name: "Bhuvan Bam (BB Ki Vines)", tier: "Mega", fee: "₹30 L – ₹50 L+", events: "Youth brands, FMCG, entertainment", slug: "bhuvan-bam" },
      { name: "CarryMinati (Ajey Nagar)", tier: "Mega", fee: "₹25 L – ₹45 L+", events: "Gaming, tech, youth brands", slug: "carryminati" },
      { name: "Ashish Chanchlani", tier: "Mega", fee: "₹25 L – ₹40 L+", events: "FMCG, entertainment, youth", slug: "ashish-chanchlani" },
      { name: "Ranveer Allahbadia (BeerBiceps)", tier: "Mega", fee: "₹20 L – ₹35 L+", events: "Wellness, finance, premium brands", slug: "ranveer-allahbadia" },
      { name: "Prajakta Koli (MostlySane)", tier: "Macro", fee: "₹10 L – ₹20 L+", events: "Lifestyle, youth, social brands", slug: "prajakta-koli" },
      { name: "Niharika NM", tier: "Macro", fee: "₹8 L – ₹18 L+", events: "Fashion, lifestyle, youth brands", slug: "niharika-nm" },
      { name: "Triggered Insaan", tier: "Macro", fee: "₹10 L – ₹20 L+", events: "Gaming, tech, entertainment brands", slug: "triggered-insaan" },
      { name: "Dolly Singh", tier: "Macro", fee: "₹5 L – ₹10 L+", events: "Fashion, lifestyle, D2C brands", slug: "dolly-singh" },
      { name: "Komal Pandey", tier: "Macro", fee: "₹5 L – ₹10 L+", events: "Fashion, beauty, lifestyle", slug: "komal-pandey" },
    ],
    faqs: [
      { q: "How much does it cost to book an influencer for a brand campaign in India?", a: "Indian influencer fees range from ₹4 Lakhs for macro creators (1M+ followers) to ₹50 Lakhs+ for mega creators like Bhuvan Bam, CarryMinati and Ashish Chanchlani. Fees vary based on deliverable type, exclusivity and campaign duration." },
      { q: "What is Bhuvan Bam's booking fee for a brand campaign?", a: "Bhuvan Bam's brand campaign fee starts from ₹30 Lakhs and goes up to ₹50 Lakhs+ depending on deliverables, exclusivity and campaign duration. He has an audience of 25M+ across YouTube and Instagram." },
      { q: "What deliverables are included in an influencer booking?", a: "Deliverables vary by creator and campaign — typically a combination of Instagram reels, feed posts and stories; YouTube dedicated or integrated videos; Shorts; live event appearances; and social amplification." },
      { q: "Can I book an influencer for a live product launch event?", a: "Yes. TKC Talent manages influencer appearances at live events — product launches, store openings, brand activations, IPO celebrations and corporate events — alongside the digital deliverables." },
      { q: "How do I choose the right influencer for my brand?", a: "TKC Talent recommends influencers based on your brand's target audience, campaign objective, budget and deliverable requirements. We match for genuine audience alignment and proven brand partnership performance." },
    ],
    related: relatedExcept("influencer-booking-india"),
    itemListName: "Influencers & Digital Creators Available for Booking — TKC Talent 2026",
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(
  CATEGORY_PAGES.map((p) => [p.slug, p]),
) as Record<string, CategoryPageData>;

import { validateJsonLd } from "./jsonld";

export function buildCategoryJsonLd(p: CategoryPageData) {
  const SITE_URL = "https://tkctalent.com";
  const PAGE_URL = `${SITE_URL}/${p.slug}`;
  const doc = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        mainEntity: p.faqs.map((f) => ({
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
            item: `${SITE_URL}/celebrity-booking-india`,
          },
          { "@type": "ListItem", position: 3, name: p.category, item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        name: p.itemListName,
        url: PAGE_URL,
        itemListElement: p.artists.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: a.name,
          url: a.slug ? `${SITE_URL}/book-${a.slug}` : PAGE_URL,
        })),
      },
      {
        "@type": "Service",
        serviceType: p.category,
        provider: { "@type": "Organization", name: "TKC Talent" },
        areaServed: "IN",
        url: PAGE_URL,
        description: p.description,
      },
    ],
  };
  return validateJsonLd(p.slug, doc);
}