const cities = [
  {
    city: "Delhi",
    body: "Luxury weddings, brand launches and premium events.",
  },
  {
    city: "Gurgaon",
    body: "Corporate events, private parties and high-end celebrations.",
  },
  {
    city: "Noida",
    body: "Corporate events, influencer campaigns and media activations.",
  },
  {
    city: "Faridabad",
    body: "Weddings, private events and regional celebrations.",
  },
  {
    city: "Mumbai",
    body: "Bollywood appearances, brand films and award nights.",
  },
  {
    city: "Jaipur · Udaipur · Goa",
    body: "Destination weddings and luxury private celebrations.",
  },
];

export function Locations() {
  return (
    <section id="locations" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            Celebrity booking across India
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95]">
            Celebrity Booking Across India — Delhi NCR & Beyond
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/70">
            TKC Talent operates across India's major metro cities and top destination wedding
            locations. Our local expertise and national network ensures seamless celebrity
            booking and execution — wherever your event is held.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((c) => (
          <li key={c.city} className="bg-background p-8">
            <h3 className="font-display text-2xl font-bold">{c.city}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}