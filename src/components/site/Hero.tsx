import heroHanumankind from "@/assets/tkc/hero-hanumankind.jpg?w=640;960;1280;1600;1920&format=avif;webp;jpg&as=picture";
import { Nav } from "./Nav";
import { useState } from "react";
import { toPicture } from "@/lib/picture";

const heroPic = toPicture(heroHanumankind as never);

export function Hero() {
  const [failed, setFailed] = useState(false);
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden text-brand-foreground sm:h-[90vh]">
      {!failed ? (
        <picture>
          {heroPic.sources.map((s) => (
            <source key={s.type} srcSet={s.srcset} type={s.type} sizes="100vw" />
          ))}
          <img
            src={heroPic.img.src}
            alt="Hanumankind — TKC Talent featured artist"
            className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
            width={heroPic.img.w ?? 1920}
            height={heroPic.img.h ?? 1080}
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            onError={() => setFailed(true)}
          />
        </picture>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/90" />
      )}
      <p className="sr-only">
        Celebrity Booking Agency in India — Hire Bollywood Celebrities, Singers & Influencers
      </p>
      <div className="absolute inset-x-0 top-0 z-10">
        <Nav />
      </div>
    </section>
  );
}