import { Picture } from "./Picture";
import { toPicture } from "@/lib/picture";
import img1 from "@/assets/home/story-1.png?w=400;640;900&format=avif;webp;png&as=picture";
import img2 from "@/assets/home/story-2.png?w=400;640;900&format=avif;webp;png&as=picture";
import img3 from "@/assets/home/story-3.png?w=400;640;900&format=avif;webp;png&as=picture";

const stories = [
  {
    step: "Step 01",
    head: "Share Event Details",
    body: "Tell us your date, location, budget and type of event — wedding, corporate, concert or private party.",
    img: toPicture(img1 as never),
  },
  {
    step: "Step 02",
    head: "Receive Curated Options",
    body: "We send a shortlist of celebrities matched to your audience, vibe and budget — with transparent, itemised pricing.",
    img: toPicture(img2 as never),
  },
  {
    step: "Step 03",
    head: "Confirm & Execute",
    body: "We lock availability, sign legal contracts, manage logistics and run end-to-end coordination on the day.",
    img: toPicture(img3 as never),
  },
];

export function Stories() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-foreground/50">
            How celebrity booking works
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            How to Book a Celebrity in India — 3 Simple Steps
          </h2>
        </div>
        <span className="font-display text-sm font-medium text-foreground/60 sm:text-base">
          (03)
        </span>
      </div>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-foreground/70">
        Booking a Bollywood celebrity or live performer for your event should not be complicated.
        At TKC Talent, we have simplified the entire process into three transparent, fully managed
        steps — from your first enquiry to the artist's final bow.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {stories.map((s) => (
          <article key={s.head}>
            <Picture
              data={s.img}
              alt={s.head}
              ratio="aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 92vw, (max-width: 1280px) 32vw, 400px"
            />
            <div className="mt-4 flex items-center gap-4 text-xs text-foreground/60">
              <span>{s.step}</span>
              <span aria-hidden>•</span>
              <span>{s.head}</span>
            </div>
            <p className="mt-2 font-display text-lg font-medium leading-snug">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
