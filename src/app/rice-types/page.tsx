import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import RiceCatalog from "@/components/rice-catalog";


export const metadata: Metadata = {
  title: "Rice Products",
  description:
    "Basmati, non-Basmati and parboiled rice varieties exported by Prime Rice — with grain lengths and descriptions.",
};

export default function RiceTypesPage() {
  return (
    <>
      <PageHero
        title="Our Rice Products"
        eyebrow="Exceptional Quality. A Wide Range of Choices."
        description="Explore our selection of Basmati and Non Basmati rice, carefully selected to meet the needs of international wholesale, retail and foodservice markets. Each variety offers its own distinctive characteristics, cooking performance and grain quality."
        image="/images/rice-hero.jpg"
        imageAlt="A close-up of rice grains"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <RiceCatalog />

        <div className="mt-14 rounded-[2rem] border border-forest-950/10 bg-cream-dark/60 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-xl font-serif text-2xl leading-tight tracking-tight text-forest-900 sm:text-3xl">
            Looking for a Specific Rice Variety?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest-800">
            If you have particular requirements for grain length, quality, processing or packaging, get in touch with our team to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
