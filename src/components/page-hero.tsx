import Image from "next/image";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  image: string;
  imageAlt: string;
  fit?: "cover" | "contain";
};

export default function PageHero({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  fit = "cover",
}: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-forest-950 text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-9 sm:px-6 md:grid-cols-2 md:gap-10 md:py-14 lg:px-10">
        <div className="harvest-hero-copy border-l-2 border-gold-400 pl-5 sm:pl-7">
          {eyebrow && <p className="mb-3 text-sm font-semibold tracking-wide text-gold-300">{eyebrow}</p>}
          <h1 className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-md text-base leading-relaxed text-forest-100 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-cream/15 ${fit === "contain" ? "bg-white" : "bg-forest-900"}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 48vw, 100vw"
            className={fit === "contain" ? "object-contain" : "object-cover"}
          />
        </div>
      </div>
    </section>
  );
}
