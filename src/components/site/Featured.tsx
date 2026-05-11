import { Picture } from "./Picture";
import { toPicture } from "@/lib/picture";
import imgBollywood from "@/assets/home/featured-bollywood.png?w=480;768;1200;1600&format=avif;webp;png&as=picture";
import imgWeddings from "@/assets/home/featured-weddings.png?w=480;768;1200;1600&format=avif;webp;png&as=picture";
import imgBrand from "@/assets/home/featured-brand.png?w=480;768;1200;1600&format=avif;webp;png&as=picture";
import imgComedy from "@/assets/home/featured-comedy.png?w=480;768;1200;1600&format=avif;webp;png&as=picture";

const projects = [
  {
    title: "Bollywood A-list",
    tags: "Salman Khan · Kareena Kapoor · Alia Bhatt",
    img: toPicture(imgBollywood as never),
    span: "md:col-span-5",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Luxury Weddings",
    tags: "Sangeet headliners · Destination weddings",
    img: toPicture(imgWeddings as never),
    span: "md:col-span-7",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Brand & Endorsements",
    tags: "Youth campaigns · Product launches",
    img: toPicture(imgBrand as never),
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Corporate Comedy & Live Acts",
    tags: "Stand-up · Annual days · Corporate galas",
    img: toPicture(imgComedy as never),
    span: "md:col-span-7",
    ratio: "aspect-[4/5]",
  },
];

export function Featured() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-display text-[clamp(4rem,16vw,14rem)] font-bold leading-[0.85]">
          Celebrities
        </h2>
        <span className="font-display text-2xl font-medium text-foreground/60 sm:text-4xl">
          (04)
        </span>
      </div>
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {projects.map((p) => (
          <figure key={p.title} className={`col-span-12 ${p.span} group`}>
            <Picture
              data={p.img}
              alt={p.title}
              ratio={p.ratio}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 92vw, (max-width: 1280px) 58vw, 760px"
              imgClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-display text-base font-medium sm:text-lg">{p.title}</span>
              <span className="text-xs text-foreground/60">{p.tags}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
