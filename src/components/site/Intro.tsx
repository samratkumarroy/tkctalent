export function Intro() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">About TKC Talent</p>
          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95]">
            India's Leading Celebrity Booking Agency for Weddings, Corporate Events & Brand Launches
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 space-y-5">
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            <strong>TKC Talent</strong> connects brands, families and corporations with India's
            biggest Bollywood celebrities, playback singers, comedians, DJs and live entertainers —
            for events that are remembered for decades.
          </p>
          <p className="text-sm italic leading-relaxed text-foreground/70">
            A division of <strong>The Kabir Company</strong>, India's premier event and artist
            management agency since 2005.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>✔ Direct access to Bollywood A-list, singers & comedians</li>
            <li>✔ Transparent, itemised pricing — no hidden agent layers</li>
            <li>✔ End-to-end execution: contracts, travel, logistics & on-ground coordination</li>
            <li>✔ Pan-India reach — Delhi NCR, Mumbai, Jaipur, Goa & international</li>
          </ul>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#book"
              className="inline-block border-b border-foreground pb-1 font-display text-base font-medium hover:opacity-70"
            >
              Get a Celebrity Quote Today →
            </a>
            <a
              href="/celebrity-charges"
              className="inline-block border-b border-foreground/40 pb-1 font-display text-base font-medium text-foreground/80 hover:opacity-70"
            >
              View 2026 Celebrity Charges →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
