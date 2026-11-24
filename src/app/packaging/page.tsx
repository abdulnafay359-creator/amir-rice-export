import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Packaging Solutions",
  description: "The right packaging plays an important role in protecting product quality and building customer confidence. We offer a range of rice packaging solutions for retailers, wholesalers, distributors and private label businesses.",
};

export default function PackagingPage() {
  return (
    <>
      <PageHero
        title="Designed for Your Market. Packed for Your Business."
        description="The right packaging plays an important role in protecting product quality and building customer confidence. We offer a range of rice packaging solutions for retailers, wholesalers, distributors and private label businesses."
        image="/images/prime-rice.webp"
        imageAlt="Prime Rice logo"
        fit="contain"
      />
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 lg:px-10">
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Rice Packaging Solutions</h2>
          <p className="mt-4 leading-relaxed text-forest-800">From consumer ready packs to bulk export bags, our packaging options can be tailored to your commercial requirements.</p>
        </section>
        <div className="grid gap-7 lg:grid-cols-2">
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Retail Packaging</h2>
            <div className="mt-5"><figure className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
                <Image src="/images/prime-rice-retail-packaging.webp" alt="Retail rice bags with clear viewing windows" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-forest-700">Illustrative mockup · 5 kg and 10 kg branded bag formats</figcaption>
            </figure></div>
          <p className="mt-4 leading-relaxed text-forest-800">Our retail rice packaging combines practical design with professional product presentation. Each pack can be customized with your branding, product information, barcodes and market specific labelling requirements.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Available sizes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>5 kg retail bags</li>
            <li>10 kg retail and wholesale bags</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Bulk Packaging</h2>
            <div className="mt-5"><figure className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
                <Image src="/images/prime-rice-bulk-packaging.webp" alt="Rice sacks stacked on a pallet" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-forest-700">Illustrative mockup · 20 kg, 30 kg and 40 kg export bag formats</figcaption>
            </figure></div>
          <p className="mt-4 leading-relaxed text-forest-800">Our bulk rice packaging is designed for wholesale distribution, commercial buyers and container shipments. We offer different bag materials and sizes depending on your storage, transportation and handling requirements.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Available sizes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>20 kg bags</li>
            <li>30 kg bags</li>
            <li>40 kg bags</li>
          </ul>
          <p className="mt-4 leading-relaxed text-forest-800">Packaging materials include jute, woven polypropylene (PP) and BOPP bags.</p>
        </section>
        </div>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Packaging Materials</h2>
          <div className="mt-5 max-w-xl"><figure className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
                <Image src="/images/prime-rice-materials-packaging.webp" alt="Jute, woven polypropylene and laminated bags side by side" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-forest-700">Illustrative mockup · jute, woven polypropylene (PP) and BOPP</figcaption>
            </figure></div>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Private Label Rice Packaging</h2>
          <div className="mt-5 max-w-xl"><figure className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
                <Image src="/images/prime-rice-private-label-packaging.webp" alt="Rice bags with different private-label artwork and bag styles" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-forest-700">Illustrative mockup · custom artwork, logos and bag styles</figcaption>
            </figure></div>
          <p className="mt-4 leading-relaxed text-forest-800">Bring your own rice brand to market with our private label packaging solutions. We work with your requirements to create packaging that reflects your brand identity and meets the needs of your customers.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Customize your packaging with:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>Brand name and logo</li>
            <li>Packaging artwork</li>
            <li>Bag size and material</li>
            <li>Product information</li>
            <li>Barcodes and market specific labels</li>
          </ul>
          <p className="mt-4 leading-relaxed text-forest-800">Whether you are launching a new rice brand or expanding an existing product range, we offer flexible packaging options to support your business.</p>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Need a Customized Packaging Solution?</h2>
          <div className="mt-5 max-w-xl"><figure className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
                <Image src="/images/prime-rice-additional-packaging.webp" alt="Vacuum rice packs, shipping cartons and palletized boxes" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-forest-700">Illustrative mockup · vacuum packs, cartons and palletized shipments</figcaption>
            </figure></div>
          <p className="mt-4 leading-relaxed text-forest-800">Additional packaging formats, including vacuum packs, cartons and palletized configurations, are available upon request.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Speak with our team to discuss the best packaging solution for your products.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/contact">Discuss Your Packaging Requirements</Link>
        </section>
      </div>
    </>
  );
}
