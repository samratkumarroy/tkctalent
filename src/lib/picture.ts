import type { PictureData } from "@/components/site/Picture";

type Raw = {
  sources: Record<string, string>;
  img: { src: string; w?: number; h?: number };
};

const TYPE_MAP: Record<string, string> = {
  avif: "image/avif",
  webp: "image/webp",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
};

const ORDER = ["avif", "webp"];

/** Normalize a vite-imagetools `?as=picture` import into PictureData. */
export function toPicture(raw: Raw): PictureData {
  const sources = ORDER.filter((k) => raw.sources[k]).map((k) => ({
    type: TYPE_MAP[k],
    srcset: raw.sources[k],
  }));
  return { sources, img: raw.img };
}