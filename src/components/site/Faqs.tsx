const faqs = [
  {
    q: "How much does it cost to book a celebrity in India?",
    a: "Celebrity fees in India range from ₹5 Lakhs for emerging influencers and comedians to ₹4 Crore and above for Bollywood A-list actors. The final fee depends on the artist, event type, duration, location and market demand at the time of booking. Share your brief with TKC Talent and receive a tailored, itemised quote within 24–48 hours.",
  },
  {
    q: "How can I hire a celebrity for my event?",
    a: "Simply contact TKC Talent with your event details — date, location, type of event and approximate budget. Our team curates a shortlist of suitable celebrities, confirms availability, negotiates the commercial terms and handles all contracts and logistics end-to-end. The entire process is managed by one dedicated team from start to finish.",
  },
  {
    q: "Can celebrities perform at private weddings and sangeet nights?",
    a: "Yes. Celebrities are regularly booked for luxury weddings, sangeet nights, receptions and milestone private celebrations. All appearances are governed by a signed confidentiality agreement, and our team manages every aspect of the artist's presence — from green room requirements to stage performance.",
  },
  {
    q: "How far in advance should I book a celebrity?",
    a: "We recommend booking at least 30–90 days in advance to secure the best availability and pricing. For peak wedding season (October to February) and major corporate events, 90–120 days advance booking is strongly advised. Last-minute bookings within 7–15 days are possible subject to artist schedules and availability.",
  },
  {
    q: "Do you handle artist contracts and logistics?",
    a: "Yes, completely. TKC Talent manages the full execution stack — legal contracts and artist riders, GST compliance, travel and 5-star accommodation, security, green room setups and on-ground coordination on the day. You deal with one team. We handle everything else.",
  },
  {
    q: "Which cities do you serve for celebrity bookings?",
    a: "TKC Talent operates pan-India and internationally. Primary service areas include Delhi, Gurgaon, Noida, Faridabad, Mumbai, Jaipur, Udaipur and Goa. We also handle destination weddings and international events in Dubai and Southeast Asia. Contact us for bespoke arrangements in any location.",
  },
];

export function Faqs() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">FAQs</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95]">
            Frequently Asked Questions — Celebrity Booking in India
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
            {faqs.map((f, i) => (
              <li key={f.q} className="py-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-foreground/40">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium sm:text-2xl">{f.q}</h3>
                </div>
                <p className="mt-3 pl-10 text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
