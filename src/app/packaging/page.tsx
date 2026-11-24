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
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Ready for the Retail Shelf</h2>
          <p className="mt-4 leading-relaxed text-forest-800">Our retail rice packaging combines practical design with professional product presentation. Each pack can be customized with your branding, product information, barcodes and market specific labelling requirements.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Available sizes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>5 kg retail bags</li>
            <li>10 kg retail and wholesale bags</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Practical Solutions for Large Scale Supply</h2>
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
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Your Brand. Our Expertise.</h2>
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
          <p className="mt-4 leading-relaxed text-forest-800">Additional packaging formats, including vacuum packs, cartons and palletized configurations, are available upon request.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Speak with our team to discuss the best packaging solution for your products.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/contact">Discuss Your Packaging Requirements</Link>
        </section>
      </div>
    </>
  );
}
