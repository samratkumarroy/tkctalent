const reasons = [
  {
    n: "01",
    title: "Direct celebrity access",
    body: "Established first-hand relationships with celebrity managers across Bollywood, music and digital.",
  },
  {
    n: "02",
    title: "Transparent pricing",
    body: "Honest, itemised quotes — no hidden agent layers, surprise markups or last-minute add-ons.",
  },
  {
    n: "03",
    title: "Contracts & compliance",
    body: "Legal paperwork, artist riders, GST and statutory compliance handled in-house.",
  },
  {
    n: "04",
    title: "End-to-end execution",
    body: "Travel, 5-star hospitality, security and on-ground coordination — fully covered.",
  },
  {
    n: "05",
    title: "Trusted by HNI clients",
    body: "Backed by The Kabir Company's two decades in luxury weddings and corporate entertainment.",
  },
  {
    n: "06",
    title: "Pan-India reach",
    body: "Delhi · Gurgaon · Noida · Faridabad · Mumbai · Jaipur · Dubai — and international destinations.",
  },
];

export function WhyChoose() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            Why TKC Talent
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95]">
            Why India's Top Brands & Families Choose TKC Talent
          </h2>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <li key={r.n} className="bg-background p-8">
            <p className="font-display text-sm font-medium text-foreground/40">{r.n}</p>
            <h3 className="mt-6 font-display text-2xl font-bold">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{r.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}