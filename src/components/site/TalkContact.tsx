export function TalkContact() {
  return (
    <section
      id="book"
      className="overflow-hidden border-t border-foreground/10 px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="flex items-center gap-6 whitespace-nowrap">
        <span className="font-display text-[clamp(4rem,18vw,16rem)] font-bold leading-none">
          Book
        </span>
        <span className="h-px flex-1 bg-foreground/40" aria-hidden />
        <span className="font-display text-[clamp(4rem,18vw,16rem)] font-bold leading-none">
          Now
        </span>
      </div>
      <div className="mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-medium sm:text-3xl">
          Looking to hire a celebrity for your event in India or Delhi NCR?
        </h2>
        <p className="mt-3 text-base text-foreground/70">
          Get in touch with TKC Talent for exclusive access, the best pricing and complete event
          management support.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Call</p>
          <a
            href="tel:+919599599699"
            className="mt-3 block font-display text-2xl font-medium hover:opacity-70"
          >
            +91 95995 99699
          </a>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">WhatsApp</p>
          <a
            href="https://wa.me/919599599699"
            target="_blank"
            rel="noopener"
            className="mt-3 block font-display text-2xl font-medium hover:opacity-70"
          >
            Message us →
          </a>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Email</p>
          <a
            href="mailto:hello@tkctalent.com"
            className="mt-3 block font-display text-2xl font-medium hover:opacity-70"
          >
            hello@tkctalent.com
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="tel:+919599599699"
          className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Get a quote now
        </a>
        <a
          href="https://wa.me/919599599699"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium hover:bg-foreground/5"
        >
          WhatsApp us
        </a>
      </div>
    </section>
  );
}