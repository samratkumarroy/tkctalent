const tiers = [
  { who: "Bollywood Celebrities (A-list Actors)", range: "₹2 Cr – ₹4 Cr+", ideal: "Brand endorsements, luxury weddings" },
  { who: "Playback & Live Singers", range: "₹50 L – ₹14 Cr", ideal: "Concerts, sangeet nights, corporate events" },
  { who: "Stand-Up Comedians", range: "₹20 L – ₹50 L", ideal: "Corporate galas, private parties" },
  { who: "Celebrity DJs", range: "₹15 L – ₹80 L", ideal: "Weddings, after-parties, nightlife" },
  { who: "Influencers & Digital Talent", range: "₹5 L – ₹50 L", ideal: "Brand campaigns, product launches" },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            Celebrity booking cost in India
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95]">
            Celebrity Booking Fees in India — 2026 Pricing Guide
          </h2>
          <p className="mt-6 max-w-3xl text-base text-foreground/70">
            Celebrity fees vary based on the artist's popularity, event type, duration, location
            and current market demand. The ranges below are indicative starting points — share
            your event brief and we will send a tailored quote within 24–48 hours.
          </p>
        </div>
      </div>

      <div className="overflow-hidden border border-foreground/15">
        <table className="w-full border-collapse text-left">
          <thead className="bg-foreground/[0.04]">
            <tr>
              <th className="p-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 sm:p-6">Talent Category</th>
              <th className="p-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 sm:p-6">Fee Range</th>
              <th className="hidden p-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 sm:table-cell sm:p-6">Ideal For</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t) => (
              <tr key={t.who} className="border-t border-foreground/10">
                <td className="p-4 font-display text-base sm:p-6 sm:text-lg">{t.who}</td>
                <td className="p-4 font-display text-base font-medium sm:p-6 sm:text-lg">{t.range}</td>
                <td className="hidden p-4 text-sm text-foreground/70 sm:table-cell sm:p-6">{t.ideal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
        <p className="max-w-2xl text-sm text-foreground/70">
          Additional costs: GST (18%) · Travel & logistics · 5-star hospitality · Sound, light &
          production (where applicable)
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/celebrity-charges"
            className="inline-block border-b border-foreground pb-1 font-display text-base font-medium hover:opacity-70"
          >
            View Full 2026 Celebrity Charges →
          </a>
          <a
            href="#book"
            className="inline-block border-b border-foreground/40 pb-1 font-display text-base font-medium text-foreground/80 hover:opacity-70"
          >
            Get a Customised Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
