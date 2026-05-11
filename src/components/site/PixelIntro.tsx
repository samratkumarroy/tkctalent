import { useEffect, useRef, useState } from "react";

export function PixelIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Start visible so SSR renders the overlay too — no flash of the homepage.
  const [show, setShow] = useState(true);
  const [revealReady, setRevealReady] = useState(false);
  const [closing, setClosing] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("tkc-intro-seen");
    if (seen) setShow(false);
  }, []);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type BgPixel = { x: number; y: number; base: number; amp: number; speed: number; phase: number; };
    type LogoPixel = { sx: number; sy: number; tx: number; ty: number; x: number; y: number; delay: number; duration: number; shade: number; twPhase: number; twSpeed: number; };

    let bgPixels: BgPixel[] = [];
    let logoPixels: LogoPixel[] = [];
    let cellSize = 10;
    const bgDot = 2;

    const ASSEMBLE_START = 1400;
    const ASSEMBLE_SPAN = 4200;
    const MOVE_DURATION = 1600;

    const FONT: Record<string, number[][]> = {
      T: [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
      K: [[1,0,0,0,1],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
      C: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],
    };

    const buildGlyphCells = () => {
      const letters = ["T", "K", "C"];
      const LETTER_W = 5, LETTER_H = 7, SPACING = 2;
      const cells: Array<{ gx: number; gy: number }> = [];
      letters.forEach((ch, li) => {
        const matrix = FONT[ch];
        const ox = li * (LETTER_W + SPACING);
        for (let r = 0; r < LETTER_H; r++) for (let c = 0; c < LETTER_W; c++) if (matrix[r][c]) cells.push({ gx: ox + c, gy: r });
      });
      return cells;
    };

    const glyphCells = buildGlyphCells();
    const GLYPH_W = 5 * 3 + 2 * 2;
    const GLYPH_H = 7;

    const buildPixels = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cellSize = Math.max(6, Math.min(14, Math.floor(Math.min(width, height) / 55)));
      const glyphPxW = GLYPH_W * cellSize;
      const glyphPxH = GLYPH_H * cellSize;
      const startX = Math.floor((width - glyphPxW) / 2);
      const startY = Math.floor((height - glyphPxH) / 2);

      logoPixels = glyphCells.map(({ gx, gy }) => ({
        sx: Math.random() * width,
        sy: Math.random() * height,
        tx: startX + gx * cellSize,
        ty: startY + gy * cellSize,
        x: 0, y: 0,
        delay: ASSEMBLE_START + Math.random() * ASSEMBLE_SPAN,
        duration: MOVE_DURATION + Math.random() * 400,
        shade: 0.3 + Math.random() * 0.35,
        twPhase: Math.random() * Math.PI * 2,
        twSpeed: 0.0015 + Math.random() * 0.002,
      }));

      const cell = 16;
      const bg: BgPixel[] = [];
      for (let y = 0; y < height + cell; y += cell) {
        for (let x = 0; x < width + cell; x += cell) {
          if (Math.random() < 0.18) continue;
          bg.push({
            x: x + (Math.random() - 0.5) * 3,
            y: y + (Math.random() - 0.5) * 3,
            base: 0.05 + Math.random() * 0.1,
            amp: 0.15 + Math.random() * 0.4,
            speed: 0.0008 + Math.random() * 0.0022,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      bgPixels = bg;
    };

    buildPixels();

    const onResize = () => { buildPixels(); startTime = 0; arrivedAnnounced = false; };
    window.addEventListener("resize", onResize);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawStaticReduced = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      for (const p of bgPixels) {
        const a = Math.min(1, p.base + p.amp * 0.5);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, bgDot, bgDot);
      }
      const drawSize = cellSize - 1;
      for (const p of logoPixels) {
        p.x = p.tx; p.y = p.ty;
        const a = Math.min(1, 0.25 + p.shade);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, drawSize, drawSize);
      }
    };

    if (reduceMotion.matches) {
      drawStaticReduced();
      setRevealReady(true);
      return () => { window.removeEventListener("resize", onResize); };
    }

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let startTime = 0;
    let arrivedAnnounced = false;

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      for (const p of bgPixels) {
        const tw = 0.5 + 0.5 * Math.sin(elapsed * p.speed + p.phase);
        const a = Math.min(1, p.base + p.amp * tw);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, bgDot, bgDot);
      }

      let allArrived = true;
      const drawSize = cellSize - 1;
      for (const p of logoPixels) {
        const local = elapsed - p.delay;
        let t: number;
        if (local <= 0) {
          p.x = p.sx; p.y = p.sy; t = 0; allArrived = false;
          const tw = 0.5 + 0.5 * Math.sin(elapsed * p.twSpeed + p.twPhase);
          const a = 0.1 + 0.35 * tw;
          ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
          ctx.fillRect(p.x, p.y, bgDot, bgDot);
          continue;
        } else if (local >= p.duration) {
          t = 1; p.x = p.tx; p.y = p.ty;
        } else {
          t = ease(local / p.duration);
          p.x = p.sx + (p.tx - p.sx) * t;
          p.y = p.sy + (p.ty - p.sy) * t;
          allArrived = false;
        }

        const tw = 0.6 + 0.4 * Math.sin(elapsed * p.twSpeed + p.twPhase);
        const settleAlpha = (0.25 + p.shade * (0.5 + 0.5 * t)) * tw;
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, settleAlpha).toFixed(3)})`;
        const size = bgDot + (drawSize - bgDot) * t;
        ctx.fillRect(p.x, p.y, size, size);
      }

      if (allArrived && !arrivedAnnounced) {
        arrivedAnnounced = true;
        setRevealReady(true);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [show]);

  const dismiss = () => {
    if (closing) return;
    setClosing(true);
    sessionStorage.setItem("tkc-intro-seen", "1");
    window.setTimeout(() => setShow(false), 700);
  };

  useEffect(() => {
    if (!revealReady) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") dismiss(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealReady]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-700 ${closing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-label="The Kabir Company intro"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className={`absolute inset-x-0 bottom-[10%] flex flex-col items-center justify-center transition-all duration-700 ${revealReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <p className="mb-4 text-[11px] tracking-[0.5em] uppercase text-white/40">The Kabir Company</p>
        <button
          type="button"
          onClick={dismiss}
          className="group relative inline-flex items-center gap-3 px-6 py-3 text-white text-xs sm:text-sm tracking-[0.4em] font-medium uppercase"
        >
          <span className="absolute inset-x-0 -bottom-1 h-px bg-white/40 group-hover:bg-white transition-colors" />
          Enter Site
          <span aria-hidden className="inline-block h-1.5 w-1.5 bg-white translate-y-[1px] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
