const socials = [
  { label: "Facebook", href: "https://www.facebook.com/thekabirco" },
  { label: "X / Twitter", href: "https://x.com/thekabircompany" },
  { label: "YouTube", href: "https://www.youtube.com/@TheKabirCompany" },
  { label: "Instagram", href: "https://www.instagram.com/thekabircompany/" },
  { label: "Pinterest", href: "https://in.pinterest.com/thekabircompany/" },
  { label: "IMDb", href: "https://www.imdb.com/title/tt35350271/" },
];

export function Footer() {
  return (
    <footer className="px-6 py-12 sm:px-10 sm:py-16">
      <div className="grid grid-cols-12 gap-6 text-sm">
        <div className="col-span-12 md:col-span-5">
          <p className="font-display text-2xl font-bold">
            TKC<span className="ml-1 align-super text-[0.6em]">Talent</span>
          </p>
          <p className="mt-3 text-foreground/70">
            The Kabir Company — leading event management and artist booking company.
          </p>
          <p className="mt-4 text-foreground/60">
            600, CR Park, New Delhi 110019
          </p>
          <p className="mt-1 text-foreground/60">
            <a href="tel:+919599599699" className="hover:opacity-70">+91 95995 99699</a>
            {" · "}
            <a href="mailto:hello@tkctalent.com" className="hover:opacity-70">hello@tkctalent.com</a>
          </p>
          <p className="mt-6 text-xs text-foreground/50">
            © {new Date().getFullYear()} TKC Talent — powered by The Kabir Company.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-7">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/50">Sitemap</p>
          <ul className="space-y-1.5 text-foreground/80">
            <li><a href="/" className="hover:opacity-70">Home</a></li>
            <li><a href="/celebrity-booking-india" className="hover:opacity-70">Celebrity Booking India</a></li>
            <li><a href="/celebrity-charges" className="hover:opacity-70">Celebrity Charges</a></li>
            <li><a href="/newsroom" className="hover:opacity-70">Newsroom</a></li>
            <li><a href="/#services" className="hover:opacity-70">Services</a></li>
            <li><a href="/#book" className="hover:opacity-70">Book Now</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/50">Follow</p>
          <ul className="space-y-1.5 text-foreground/80">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener" className="hover:opacity-70">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}