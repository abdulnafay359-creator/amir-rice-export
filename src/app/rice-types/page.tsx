import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { riceTypes } from "@/lib/rice-types";


export const metadata: Metadata = {
  title: "Rice Products",
  description:
    "Basmati, non-Basmati and parboiled rice varieties exported by Prime Rice — with grain lengths and descriptions.",
};

export default function RiceTypesPage() {
  return (
    <>
      <PageHero
        title="Rice types we export."
        image="/images/rice-hero.jpg"
        imageAlt="A close-up of rice grains"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {riceTypes.map((rice) => (
            <article
              key={rice.slug}
              id={rice.slug}
              className="scroll-mt-24 flex flex-col rounded-2xl border border-forest-950/10 bg-white/60 p-7 transition-shadow hover:shadow-lg hover:shadow-forest-950/5"
            >
              <Image
                src={rice.image}
                alt=""
                width={390}
                height={390}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="mb-5 aspect-square w-full rounded-xl object-cover"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                    {rice.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-forest-900">
                    {rice.name}
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-forest-700/80">
                {rice.description}
              </p>

              {rice.grainLength && (
                <p className="mt-5 border-t border-forest-950/10 pt-4 text-sm text-forest-700">
                  Average grain length <strong>{rice.grainLength}</strong>
                </p>
              )}

              <Link href="/contact" className="mt-5 self-start text-sm font-semibold text-forest-800 underline">Request a quote</Link>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-forest-950/10 bg-cream-dark/60 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-xl font-serif text-2xl leading-tight tracking-tight text-forest-900 sm:text-3xl">
            Need a grade that is not listed?
          </h2>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
