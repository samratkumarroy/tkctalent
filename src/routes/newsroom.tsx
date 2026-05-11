import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import logoAhmedabad from "@/assets/newsroom/logos/ahmedabad-mirror.png";
import logoAni from "@/assets/newsroom/logos/ani.png";
import logoBharat from "@/assets/newsroom/logos/bharat-18.png";
import logoBs from "@/assets/newsroom/logos/business-standard.png";
import logoDailyhunt from "@/assets/newsroom/logos/dailyhunt.png";
import logoFirstIndia from "@/assets/newsroom/logos/first-india.png";
import logoHnn from "@/assets/newsroom/logos/hnn24x7.png";
import logoIE from "@/assets/newsroom/logos/indian-express.png";
import logoLiveHindustan from "@/assets/newsroom/logos/live-hindustan.png";
import logoMidday from "@/assets/newsroom/logos/mid-day.png";
import logoNewsNation from "@/assets/newsroom/logos/news-nation.png";
import logoNews18 from "@/assets/newsroom/logos/news18-hindi.png";
import logoPioneer from "@/assets/newsroom/logos/pioneer-edge.png";
import logoPnn from "@/assets/newsroom/logos/pnn-digital.png";
import logoSoCity from "@/assets/newsroom/logos/so-city.png";
import logoToi from "@/assets/newsroom/logos/times-of-india.png";
import logoTribune from "@/assets/newsroom/logos/tribune-india.png";
import logoUni from "@/assets/newsroom/logos/uni-india.png";
import { validateJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/newsroom`;

type Article = {
  publisher: string;
  logo: string;
  headline: string;
  url: string;
  date?: string;
  body?: string;
};

const logoMap: Record<string, string> = {
  "Times of India": logoToi,
  "Indian Express": logoIE,
  "Live Hindustan": logoLiveHindustan,
  "Business Standard": logoBs,
  "Tribune India": logoTribune,
  "First India": logoFirstIndia,
  "PNN Digital": logoPnn,
  "Mid-Day": logoMidday,
  "ANI": logoAni,
  "Pioneer Edge": logoPioneer,
  "So.City": logoSoCity,
  "Ahmedabad Mirror": logoAhmedabad,
  "News Nation": logoNewsNation,
  "News18 Hindi": logoNews18,
  "Bharat 18": logoBharat,
  "HNN24x7": logoHnn,
  "UNI India": logoUni,
  "Dailyhunt": logoDailyhunt,
};

const articles: Article[] = [
  { publisher: "Times of India", headline: "Jharkhand CM inaugurates first Jharkhand International Trade Fair — produced by IITEO", url: "https://timesofindia.indiatimes.com/jharkhand-chief-minister-inaugurates-first-jharkhand-international-trade-fair-more-than-350-companies-are-participating-in-the-fair-/articleshow/11951912.cms", logo: logoToi, body: "Times of India reports the inauguration of Jharkhand's first International Trade Fair at Morahabadi Maidan, Ranchi — a 350-company showcase produced and executed end-to-end by IITEO, a Kabir Company venture." },
  { publisher: "Indian Express", date: "2017", headline: "Delhi celebrates Moonliit Fest — a Kabir Company production", url: "https://indianexpress.com/article/lifestyle/art-and-culture/moonliit-fest-2017-delhiites-celebrate-weekend-filled-with-dance-food-and-fun/", logo: logoIE, body: "Indian Express covers Moonliit Fest 2017 — a weekend of music, food, fashion and art curated by The Kabir Company that drew thousands of Delhiites across two nights." },
  { publisher: "Live Hindustan", headline: "Bargain Fest Season 3 begins in Dehradun", url: "https://www.livehindustan.com/uttarakhand/dehradun/story-the-bargain-fest-season-3-from-today-1709669.html", logo: logoLiveHindustan, body: "Live Hindustan reports on the third edition of Bargain Fest in Dehradun — a multi-brand lifestyle pop-up produced by The Kabir Company's experiential team." },
  { publisher: "Business Standard", date: "2025", headline: "Business Standard recognises The Kabir Company's growing PR footprint", url: "https://www.business-standard.com/content/press-releases-ani/akanksha-puri-live-at-cafe-underpass-a-bollywood-night-to-remember-125091000007_1.html", logo: logoBs, body: "Business Standard syndicates coverage of Akanksha Puri's Bollywood Night at Cafe Underpass, marking another milestone in TKC's celebrity-led nightlife programming." },
  { publisher: "Tribune India", date: "Sep 2025", headline: "Akanksha Puri lights up Cafe Underpass — a Bollywood night by The Kabir Company", url: "https://www.tribuneindia.com/news/business/akanksha-puri-live-at-cafe-underpass-a-bollywood-night-to-remember/", logo: logoTribune, body: "The Tribune chronicles a packed Bollywood-themed night with Akanksha Puri performing live — staged, produced and promoted by The Kabir Company at its flagship Delhi venue." },
  { publisher: "Tribune India", date: "Jun 2025", headline: "Shamsher Lehri live at Cafe Underpass — produced by The Kabir Company", url: "https://www.tribuneindia.com/news/business/shamsher-lehri-live-at-cafe-underpass-june-21-2025/", logo: logoTribune, body: "Tribune India spotlights singer Shamsher Lehri's intimate live set at Cafe Underpass — part of TKC's monthly artist residency programme in the capital." },
  { publisher: "Tribune India", date: "Apr 2025", headline: "5 years of Cafe Underpass: a Delhi nightlife milestone", url: "https://www.tribuneindia.com/news/business/celebrating-5-years-of-nightlife-excellence-cafe-underpass-journey-and-upcoming-gulam-jugni-live-concert/", logo: logoTribune, body: "The Tribune marks five years of Cafe Underpass with a feature on TKC's nightlife journey and the upcoming Gulam Jugni live concert headlining the anniversary." },
  { publisher: "Tribune India", headline: "Cafe Underpass transforms Delhi's nightlife", url: "https://www.tribuneindia.com/news/business/discover-the-best-night-club-in-delhi-cafe-underpass-transforms-the-capitals-nightlife/", logo: logoTribune, body: "Tribune India profiles Cafe Underpass as Delhi's most consistent live-music club — crediting The Kabir Company's curation, sound design and celebrity bookings." },
  { publisher: "Tribune India", headline: "International Trade Fair starts in Doon — organised by IITEO", url: "https://www.tribuneindia.com/news/archive/features/international-trade-fair-starts-in-doon-311523", logo: logoTribune, body: "Tribune India covers the launch of the International Trade Fair in Dehradun, conceptualised and executed on-ground by IITEO, the trade-events arm of The Kabir Company." },
  { publisher: "First India", date: "2025", headline: "TKC named among India's Top 10 Companies Transforming the Business Landscape", url: "https://firstindia.co.in/news/press-releases/from-innovation-to-impacttop-10-companies-transforming-indias-business-landscape", logo: logoFirstIndia, body: "First India places The Kabir Company in its national Top 10 — recognising its innovation across artist management, nightlife and large-format event production." },
  { publisher: "PNN Digital", date: "2025", headline: "PNN Digital spotlights TKC in national impact list", url: "https://pnndigital.com/business/from-innovation-to-impacttop-10-companies-transforming-indias-business-landscape/", logo: logoPnn, body: "PNN Digital syndicates the 'Innovation to Impact' feature naming The Kabir Company among Indian ventures redefining experiential entertainment at scale." },
  { publisher: "Mid-Day", date: "2025", headline: "Mid-Day features TKC in 'From Innovation to Impact'", url: "https://www.mid-day.com/buzz/article/from-innovation-to-impact-companies-transforming-indias-business-landscape-6316", logo: logoMidday, body: "Mid-Day's national business round-up profiles The Kabir Company's growth story — from a Delhi events shop to a pan-India artist and IP house." },
  { publisher: "ANI", date: "Sep 2025", headline: "A Bollywood night to remember at Cafe Underpass", url: "https://aninews.in/news/business/akanksha-puri-live-at-cafe-underpass-a-bollywood-night-to-remember20250909173717/", logo: logoAni, body: "ANI's national wire syndicates Akanksha Puri's sold-out Bollywood night at Cafe Underpass — a TKC production picked up by 40+ outlets." },
  { publisher: "ANI", date: "Apr 2025", headline: "Five years of nightlife excellence at Cafe Underpass", url: "https://www.aninews.in/news/business/celebrating-5-years-of-nightlife-excellence-cafe-underpass-journey-and-upcoming-gulam-jugni-live-concert20250404103959/", logo: logoAni, body: "ANI marks the fifth anniversary of TKC's Cafe Underpass — tracking the venue's evolution into one of north India's most-booked live-music destinations." },
  { publisher: "ANI", date: "2017", headline: "Moonliit Fest 2017 — music, food and fashion by TKC", url: "https://www.aninews.in/", logo: logoAni, body: "ANI's lifestyle desk covers Moonliit Fest — TKC's flagship outdoor festival blending live music, fashion pop-ups and curated food across a Delhi weekend." },
  { publisher: "Pioneer Edge", headline: "MTV 'Date to Remember' runway audition held in Doon", url: "https://pioneeredge.in/mtv-date-to-remember-runway-model-audition-held-in-doon/", logo: logoPioneer, body: "Pioneer Edge reports on the MTV D2R model audition staged in Dehradun — a Kabir Company × MTV property bringing national television formats to tier-2 cities." },
  { publisher: "So.City", date: "2017", headline: "Moonliit Fest — concert + flea market by TKC", url: "https://so.city/delhi/article/a-concert-cum-flea-market-fest-thats-got-oodles-of-food-good-music-moonliit-fest", logo: logoSoCity, body: "So.City reviews Moonliit Fest as Delhi's best concert-meets-flea-market weekend — produced by The Kabir Company with food, music and design under one roof." },
  { publisher: "Ahmedabad Mirror", date: "2025", headline: "Sunil Grover takes over Cafe Underpass in the biggest event of 2025", url: "https://www.ahmedabadmirror.com/biggest-event-of-2025-sunil-grover-takes-over-cafe-underpass-in-delhi/81900061.html", logo: logoAhmedabad, body: "Ahmedabad Mirror calls Sunil Grover's TKC-produced takeover of Cafe Underpass the biggest comedy night of 2025 — sold out within hours of the on-sale." },
  { publisher: "Ahmedabad Mirror", headline: "TKC: Delhi's top corporate event planner & wedding entertainment specialist", url: "https://www.ahmedabadmirror.com/the-kabir-company-delhis-top-corporate-event-planner--wedding-entertainment-specialists/81900336.html", logo: logoAhmedabad, body: "Ahmedabad Mirror profiles The Kabir Company as Delhi's go-to partner for corporate events and high-end weddings — with a roster spanning singers, comedians and Bollywood headliners." },
  { publisher: "Ahmedabad Mirror", date: "2025", headline: "TKC's 2025 roadmap: bigger celebrity entertainment & movie promotions", url: "https://www.ahmedabadmirror.com/the-kabir-companys-ambitious-plans-for-2025-expanding-celebrity-entertainment-and-major-movie-promotions/81887107.html", logo: logoAhmedabad, body: "Ahmedabad Mirror previews TKC's 2025 expansion — scaling celebrity-led tours, multi-city movie promotions and brand-funded entertainment IPs across India." },
  { publisher: "News Nation", headline: "Nimbus Realty Award — Sophie Choudry & Arbaaz Khan headline a TKC production", url: "https://english.newsnationtv.com/brand-stories/brand-stories-english/kabir-company-nimbus-realty-award-sophie-choudry-arbaaz-khan-11019632", logo: logoNewsNation, body: "News Nation covers the Nimbus Realty Awards night, headlined by Sophie Choudry and Arbaaz Khan — talent, hosting and stage production delivered by The Kabir Company." },
  { publisher: "News18 Hindi", headline: "IITEO's Jharkhand International Trade Fair opens at Morahabadi Maidan", url: "https://hindi.news18.com/news/jharkhand/ranchi-jharkhand-international-trade-fair-in-ranchi-morahabadi-maidan-5022401.html", logo: logoNews18, body: "News18 Hindi reports the Ranchi launch of the Jharkhand International Trade Fair — a 350+ exhibitor showcase produced by IITEO under The Kabir Company group." },
  { publisher: "Bharat 18", headline: "Bharat 18 features IITEO & TKC's trade-fair work", url: "https://thekabircompany.com/bharat-18-coverage", logo: logoBharat, body: "Bharat 18 highlights the operational scale behind IITEO's flagship trade-fair calendar — staged, marketed and run nationally by The Kabir Company group." },
  { publisher: "HNN24x7", headline: "TKC × MTV D2R: Dehradun's biggest audition at Centrio Mall", url: "https://hnn24x7.com/kabir-company-in-association-with-mtv-d2r-to-host-dehraduns-biggest-audition-on-18th-november-at-centrio-mall/", logo: logoHnn, body: "HNN24x7 announces The Kabir Company's MTV Date to Remember audition at Centrio Mall — Dehradun's largest single-day model casting call of the year." },
  { publisher: "UNI India", date: "2025", headline: "TKC among ventures driving India's new business era", url: "https://www.uniindia.com/news/pnn/story/3494522.html", logo: logoUni, body: "UNI India's national wire features The Kabir Company among Indian ventures rewriting the playbook for entertainment, events and celebrity-led commerce." },
  { publisher: "Dailyhunt", date: "2025", headline: "Dailyhunt syndicates TKC's national recognition", url: "https://m.dailyhunt.in/news/india/english/loktej+english-epaper-loktejen/from+innovation+to+impact+top+10+companies+transforming+indias+business+landscape-newsid-n669084116", logo: logoDailyhunt, body: "Dailyhunt amplifies the 'Innovation to Impact' national feature — placing The Kabir Company alongside India's most-watched business stories of the year." },
];

const featuredLogos = [
  logoIE, logoToi, logoMidday, logoBs, logoFirstIndia, logoTribune,
  logoAni, logoSoCity, logoNewsNation, logoNews18, logoUni, logoPnn,
  logoLiveHindustan, logoAhmedabad, logoPioneer, logoHnn, logoBharat, logoDailyhunt,
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#page`,
      url: PAGE_URL,
      name: "TKC Talent Newsroom — Press & Media Coverage",
      description:
        "Explore 26+ press features of The Kabir Company (TKC Talent) — Delhi's premier event & artist management agency, covered by 18 top publications including Times of India, Indian Express, Tribune India, ANI and Mid-Day.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Newsroom", item: PAGE_URL },
      ],
    },
    ...articles.map((a) => ({
      "@type": "NewsArticle",
      headline: a.headline,
      url: a.url,
      ...(a.date ? { datePublished: a.date } : {}),
      publisher: { "@type": "Organization", name: a.publisher },
      author: { "@type": "Organization", name: a.publisher },
      mentions: [{ "@type": "Organization", name: "The Kabir Company" }],
      about: ["Event Management Delhi", "Artist Management India"],
    })),
  ],
};

export const Route = createFileRoute("/newsroom")({
  head: () => ({
    meta: [
      { title: "TKC Newsroom | The Kabir Company in the Press — 26+ Media Features" },
      {
        name: "description",
        content:
          "Explore 26+ press features of The Kabir Company — Delhi's premier event & artist management agency, covered by 18 top publications including Times of India, Indian Express, Tribune India, ANI and Mid-Day.",
      },
      { name: "keywords", content: "The Kabir Company press, TKC Talent newsroom, event management Delhi news, artist management India press, celebrity event management coverage" },
      { property: "og:title", content: "TKC Newsroom — India's Most Featured Event & Artist Management Firm" },
      { property: "og:description", content: "26+ press features across 18 publications. Times of India, Indian Express, Tribune India, Mid-Day, ANI and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TKC Newsroom — Featured in India's Top Publications" },
      { name: "twitter:description", content: "26+ press features across 18 publications." },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(validateJsonLd("/newsroom", jsonLd)) }],
  }),
  component: NewsroomPage,
});

function NewsroomPage() {
  const stats = [
    { value: "26+", label: "Press features" },
    { value: "18", label: "Top publications" },
    { value: "12+", label: "Years on the record" },
    { value: "Pan-India", label: "Editorial reach" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground text-background">
        <Nav />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="relative grid grid-cols-12 gap-6 px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24">
          <div className="col-span-12">
            <p className="font-display text-xs uppercase tracking-[0.4em] text-background/60">
              ★ Featured
            </p>
            <h1 className="mt-4 font-display text-[clamp(4rem,18vw,16rem)] font-bold leading-[0.82]">
              News<span className="text-brand">room</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-lg uppercase tracking-[0.2em] text-background/70 sm:text-xl">
              TKC | The Kabir Company
              <br />
              India's most featured event & artist management firm
            </p>
          </div>
        </div>

        {/* publications strip */}
        <div className="relative border-t border-background/10 bg-foreground/95 py-6">
          <div
            className="flex gap-12 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
              {[...featuredLogos, ...featuredLogos].map((src, i) => (
                <div
                  key={i}
                  className="flex h-28 w-[260px] shrink-0 items-center justify-center rounded-md bg-background px-6 sm:h-32 sm:w-[300px]"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
                  />
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-foreground/50">
              (01) About the coverage
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95]">
              On the record across India's most-read newsrooms.
            </h2>
            <p className="mt-6 max-w-xl text-foreground/75 sm:text-lg">
              From the Jharkhand International Trade Fair to five years of Cafe Underpass —
              The Kabir Company has been chronicled by editors at the country's leading print,
              digital and wire publications. Below: every feature, in one place.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <dl className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-6">
                  <dt className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS GRID */}
      <section className="border-t border-foreground/10 bg-foreground/[0.02] px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-foreground/50">
              (02) Publications
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
              Where we've been featured.
            </h2>
          </div>
          <span className="font-display text-2xl font-medium text-foreground/40 sm:text-4xl">
            (18)
          </span>
        </div>
        <ul className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-3 md:grid-cols-6">
          {Object.entries(logoMap).map(([name, src]) => (
            <li
              key={name}
              className="flex aspect-[4/3] items-center justify-center bg-background p-6 transition-colors hover:bg-foreground/[0.04]"
            >
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="max-h-10 w-auto max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ARTICLES LIST */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-foreground/50">
              (03) Press archive
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[0.95]">
              Selected stories from India's leading newsrooms.
            </h2>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Each card carries the publisher mark, the headline as it appeared in print or
              online, and a short editorial summary. Click any card to read the original story.
            </p>
          </div>
          <span className="font-display text-2xl font-medium text-foreground/40 sm:text-4xl">
            ({String(articles.length).padStart(2, "0")})
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <li key={a.url + i} className="bg-background">
              <a
                href={a.url}
                target="_blank"
                rel="noopener nofollow"
                className="group flex h-full flex-col p-6 transition-colors hover:bg-foreground/[0.03] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs text-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a.date && (
                    <span className="rounded-full border border-foreground/15 px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                      {a.date}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex h-40 items-center justify-center rounded-md bg-foreground/[0.03] p-6 sm:h-48">
                  <img
                    src={a.logo}
                    alt={a.publisher}
                    loading="lazy"
                    className="max-h-28 w-auto max-w-[90%] object-contain transition group-hover:scale-[1.03] sm:max-h-32"
                  />
                </div>
                <p className="mt-2 font-display text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  {a.publisher}
                </p>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug transition-colors group-hover:text-brand sm:text-xl">
                  {a.headline}
                </h3>
                {a.body && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {a.body}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-display text-[11px] uppercase tracking-[0.25em] text-foreground/50 group-hover:text-brand">
                    Read story
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-brand"
                  >
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 bg-foreground px-6 py-20 text-background sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-background/60">
              Press & media enquiries
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95]">
              Story idea? We're a phone call away.
            </h2>
            <p className="mt-4 max-w-xl text-background/70">
              For interviews, statements, talent access or coverage of upcoming TKC productions —
              reach our PR desk directly.
            </p>
          </div>
          <div className="col-span-12 flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <a
              href="mailto:hello@tkctalent.com"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-sm font-bold text-brand-foreground transition hover:opacity-90"
            >
              hello@tkctalent.com
            </a>
            <a
              href="tel:+919599599699"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 font-display text-sm font-bold transition hover:bg-background/10"
            >
              +91 95995 99699
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
