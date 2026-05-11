import { useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/site/SmartImage";
import { Link } from "@tanstack/react-router";

type Slide = { src: string; name: string; fee: string; href?: "/book-alia-bhatt" | "/book-kareena-kapoor" };

const SLIDES: Slide[] = [
  { src: "/actresses/deepika-padukone.png", name: "Deepika Padukone", fee: "₹2–3 Cr" },
  { src: "/actresses/alia-bhatt.png", name: "Alia Bhatt", fee: "₹2–3.5 Cr", href: "/book-alia-bhatt" },
  { src: "/actresses/priyanka-chopra.png", name: "Priyanka Chopra", fee: "₹2–3 Cr" },
  { src: "/actresses/katrina-kaif.png", name: "Katrina Kaif", fee: "₹1.5–2.5 Cr" },
  { src: "/actresses/anushka-sharma.png", name: "Anushka Sharma", fee: "₹2–3 Cr" },
  { src: "/actresses/kareena-kapoor.png", name: "Kareena Kapoor Khan", fee: "₹1.5–3.5 Cr", href: "/book-kareena-kapoor" },
  { src: "/actresses/kiara-adwani.png", name: "Kiara Advani", fee: "₹1–1.5 Cr" },
  { src: "/actresses/rashmika-mandanna.png", name: "Rashmika Mandanna", fee: "₹75 L–1.5 Cr" },
  { src: "/actresses/tamanna-bhatia.png", name: "Tamannaah Bhatia", fee: "₹1.5–2 Cr" },
  { src: "/actresses/janhvi-kapoor.png", name: "Janhvi Kapoor", fee: "₹60–80 L" },
  { src: "/actresses/sara-ali-khan.png", name: "Sara Ali Khan", fee: "₹60–80 L" },
  { src: "/actresses/nora-fatehi.png", name: "Nora Fatehi", fee: "₹75 L–1.2 Cr" },
  { src: "/actresses/disha-patani.png", name: "Disha Patani", fee: "₹50–75 L" },
];

/**
 * Lightweight CSS-3D coverflow built on transforms only. Pure presentation —
 * no heavy libs, autoplay paused on hover/drag, swipe-aware.
 */
export function ActressCoverflow() {
  const total = SLIDES.length;
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [stageW, setStageW] = useState(0);
  const startX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % total);
    }, 3800);
    return () => clearInterval(id);
  }, [total]);

  // Track stage width for responsive 3D translate distance.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setStageW(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Keyboard arrows when stage is focused.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!stageRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    pausedRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const w = stageRef.current?.offsetWidth ?? window.innerWidth;
    setDrag(Math.max(-1.2, Math.min(1.2, (e.clientX - startX.current) / (w * 0.45))));
  };
  const onPointerUp = () => {
    if (drag > 0.2) go(-1);
    else if (drag < -0.2) go(1);
    setDrag(0);
    startX.current = null;
    setTimeout(() => (pausedRef.current = false), 1200);
  };

  // Responsive geometry — tight spacing on phones, wider on desktop.
  const isNarrow = stageW > 0 && stageW < 560;
  const isMid = stageW >= 560 && stageW < 900;
  const spreadPct = isNarrow ? 32 : isMid ? 42 : 50;
  const depthPx = isNarrow ? 110 : isMid ? 150 : 180;
  const rotateDeg = isNarrow ? -22 : isMid ? -28 : -32;

  return (
    <section
      className="relative overflow-hidden bg-foreground text-background"
      aria-labelledby="actress-coverflow-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.85 0.18 30) 0, transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.7 0.2 320) 0, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-background/55 sm:text-xs">
          Featured Roster · 2026
        </p>
        <h2
          id="actress-coverflow-heading"
          className="max-w-3xl font-display text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.02]"
        >
          India's most-booked Bollywood actresses,{" "}
          <span className="italic text-background/60">in one frame.</span>
        </h2>

        <div
          ref={stageRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured Bollywood actresses"
          className="relative mt-10 h-[340px] touch-pan-y select-none outline-none sm:mt-14 sm:h-[460px] md:h-[520px]"
          style={{ perspective: isNarrow ? "1000px" : "1400px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => setTimeout(() => (pausedRef.current = false), 1500)}
        >
          <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
            {SLIDES.map((slide, i) => {
              let offset = i - active - drag;
              const half = total / 2;
              if (offset > half) offset -= total;
              if (offset < -half) offset += total;
              const abs = Math.abs(offset);
              const visible = abs <= 2.5;
              const translateX = offset * spreadPct;
              const translateZ = -Math.min(abs, 3) * depthPx;
              const rotateY = Math.max(-50, Math.min(50, offset * rotateDeg));
              const opacity = visible ? Math.max(0, 1 - abs * 0.32) : 0;
              const z = 100 - Math.round(abs * 10);
              return (
                <div
                  key={slide.src}
                  className="absolute left-1/2 top-1/2 h-[280px] w-[195px] cursor-pointer will-change-transform sm:h-[420px] sm:w-[300px] md:h-[480px] md:w-[340px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                    transition: drag === 0 ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms" : "opacity 200ms",
                    opacity,
                    zIndex: z,
                    pointerEvents: visible ? "auto" : "none",
                  }}
                  onClick={() => setActive(i)}
                  role="button"
                  aria-label={slide.name}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-background/15">
                    <SmartImage
                      containerClassName="absolute inset-0 h-full w-full"
                      src={slide.src}
                      alt={`${slide.name} — Bollywood actress booking via TKC Talent`}
                      className="h-full w-full object-cover"
                      draggable={false}
                      eager={abs <= 1}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 sm:p-5">
                      <p className="font-display text-sm font-semibold text-white sm:text-lg">
                        {slide.name}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                        {slide.fee} · per appearance
                      </p>
                      {slide.href && (
                        <Link
                          to={slide.href}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-white underline-offset-4 hover:underline sm:text-xs"
                        >
                          View booking page →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground"
          >
            ←
          </button>
          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Go to ${s.name}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-background" : "w-1.5 bg-background/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}