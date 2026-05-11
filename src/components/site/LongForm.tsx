export function LongForm() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            About The Kabir Company
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05]">
            The Kabir Company — India's Premier Celebrity Booking & Event Management Agency
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              When it comes to celebrity booking in India, no agency brings more experience, more
              direct access and more flawless execution than <strong>TKC Talent</strong> — a
              division of The Kabir Company. Established in 2005 and headquartered in New Delhi,
              The Kabir Company has spent over two decades building exclusive relationships with
              India's most influential celebrity managers, talent agencies and entertainment
              professionals.
            </p>
            <p>
              Our integrated model sets us apart from every aggregator platform and booking
              marketplace operating in India today. We are not a directory of artist profiles —
              we are a full-stack event and artist management company that handles talent
              acquisition, contract negotiation, logistics, production and on-ground execution
              under one roof. This is why India's most discerning clients — from HNI families
              planning destination weddings to Fortune 500 brand teams managing product launches —
              choose TKC Talent over anyone else.
            </p>
            <p>
              Our celebrity roster spans every category of entertainment. For Bollywood celebrity
              bookings, our clients have worked with Salman Khan, Kareena Kapoor Khan, Alia Bhatt,
              Allu Arjun, Prabhas and more. For live music, we have delivered Arijit Singh,
              Badshah, Guru Randhawa, Neha Kakkar, Lucky Ali and Sunidhi Chauhan to audiences
              across India. Our comedy bookings, including Sunil Grover, bring the house down at
              corporate galas and annual days. And for weddings, our sangeet night packages —
              combining top playback singers, celebrity DJs and specialty entertainment — create
              moments that are genuinely once in a lifetime.
            </p>
            <p>
              TKC Talent serves clients across Delhi, Gurgaon, Noida, Faridabad, Mumbai, Jaipur,
              Udaipur, Goa and internationally — with the same single-window service model that
              has earned us recognition from India's Prime Minister and former President, and
              consistent placement among the Top 10 Celebrity Management Companies in India.
            </p>
            <p className="font-display text-lg text-foreground sm:text-xl">
              Ready to bring a Bollywood icon, India's biggest singer or a comedy legend to your
              next event? Contact TKC Talent today for a confidential conversation and a tailored
              celebrity shortlist — delivered within 48 hours.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-block border-b border-foreground pb-1 font-display text-base font-medium hover:opacity-70"
            >
              Get a Celebrity Quote →
            </a>
            <a
              href="https://wa.me/919599599699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-foreground/40 pb-1 font-display text-base font-medium text-foreground/80 hover:opacity-70"
            >
              WhatsApp Us: +91 95995 99699 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
