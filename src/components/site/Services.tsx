const services = [
  {
    n: "01",
    icon: "🎬",
    title: "Bollywood Celebrity Booking",
    body: "Hire India's most iconic actors and actresses for brand endorsements, corporate appearances, luxury weddings and film promotions. Direct access to Bollywood's A-list — Salman Khan, Kareena Kapoor Khan, Alia Bhatt, Allu Arjun, Prabhas and more — means faster confirmations and better pricing than any aggregator platform.",
  },
  {
    n: "02",
    icon: "🎤",
    title: "Singer & Playback Artist Booking",
    body: "From arena-filling headliners to intimate sangeet performers, we book India's finest playback and live singers — Arijit Singh, Badshah, Guru Randhawa, Neha Kakkar, Lucky Ali, Sunidhi Chauhan and hundreds more — with full sound, light and production management included.",
  },
  {
    n: "03",
    icon: "😂",
    title: "Comedian Booking for Corporate Events",
    body: "Elevate your corporate gala, annual day or brand event with India's top stand-up comedians. Sunil Grover and our roster of verified corporate comedians bring guaranteed laughs — brand-safe, culturally sharp, and always audience-appropriate.",
  },
  {
    n: "04",
    icon: "🎧",
    title: "Celebrity DJ Booking",
    body: "Headline DJs for weddings, after-parties and nightlife events — with full sound, lighting and production equipment handled by our in-house production team. Available for Delhi NCR venues, destination weddings in Goa, Jaipur and Udaipur, and pan-India.",
  },
  {
    n: "05",
    icon: "📱",
    title: "Influencer & Digital Talent",
    body: "Partner with India's most-followed digital creators for product launches, brand campaigns and experiential activations. From micro-influencers to mega content creators, we handle contracts, briefs, deliverables and compliance — so your campaign runs flawlessly.",
  },
  {
    n: "06",
    icon: "🎭",
    title: "Live Entertainment & Specialty Acts",
    body: "Book live bands, classical dance troupes, Sufi performers, magicians and specialty acts for weddings, corporate galas and experiential events across India. Every act is vetted, contracted and managed end-to-end by TKC Talent.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            Celebrity booking services
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95]">
            Talent for Every Kind of Event — Bollywood to Comedy, Singers to DJs
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/70">
            Whether you are planning a destination wedding sangeet in Udaipur, a product launch
            for a Fortune 500 brand, or a 10,000-person concert in Delhi — TKC Talent delivers
            the right celebrity with the right brief, every time.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <ul className="col-span-12 grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="bg-background p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-medium text-foreground/40">{s.n}</span>
                <span aria-hidden className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
