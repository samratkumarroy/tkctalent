import { Picture } from "./Picture";
import { toPicture } from "@/lib/picture";
import imgWeddings from "@/assets/home/break-weddings.png?w=640;960;1280;1920&format=avif;webp;png&as=picture";
import imgPanIndia from "@/assets/home/break-panindia.png?w=640;960;1280;1920&format=avif;webp;png&as=picture";

const weddingsPic = toPicture(imgWeddings as never);
const panIndiaPic = toPicture(imgPanIndia as never);

export function ImageBreak() {
  return (
    <>
      <section className="px-6 sm:px-10">
        <Picture
          data={weddingsPic}
          alt="Luxury Weddings — Signature Offering"
          ratio="aspect-[21/9]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1200px"
        />
      </section>

      <section className="px-6 sm:px-10 mt-10">
        <Picture
          data={panIndiaPic}
          alt="Pan-India Icon — Featured Artist"
          ratio="aspect-[16/9]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1200px"
        />
      </section>
    </>
  );
}
