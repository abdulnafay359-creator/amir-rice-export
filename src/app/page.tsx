import Image from "next/image";
import Link from "next/link";
import HarvestVideo from "@/components/harvest-video";
import SectionHeading from "@/components/section-heading";
import { riceTypes } from "@/lib/rice-types";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-950 text-cream lg:grid lg:min-h-[39rem] lg:items-end">
        <HarvestVideo />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-forest-950/95 via-forest-950/65 to-transparent lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-forest-950/80 via-transparent to-forest-950/15 lg:block" />

        <div className="harvest-hero-copy relative mx-auto w-full max-w-7xl px-5 pb-12 pt-9 sm:px-6 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
              Pakistani rice exports
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Premium rice from the fields of <span className="italic text-gold-300">Pakistan.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest-100 sm:text-lg">
              Basmati and non-Basmati rice for importers, distributors and retailers,
              milled in Pakistan and shipped from Karachi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/rice-types" className="harvest-action rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-300">
                Explore rice types
              </Link>
              <Link href="/contact" className="harvest-action rounded-full border border-cream/65 bg-forest-950/20 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/15">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="harvest-reveal mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Image src="/images/company.jpg" alt="Amir Rice Export company operations" width={900} height={600} className="h-72 w-full rounded-2xl object-cover sm:h-96" />
        <SectionHeading eyebrow="Our expertise" title="Milled in Pakistan. Shipped from Karachi." description="Amir Rice Export & Import Co. operates four processing plants and supplies Pakistani rice to buyers across the Middle East, Europe, Asia and Africa." />
      </section>

      {/* Rice preview */}
      <section className="border-y border-forest-950/10 bg-cream-dark/40">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The range"
              title="Rice types we export."
            />
            <Link
              href="/rice-types"
              className="rounded-full border border-forest-950/20 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-950/5"
            >
              View all types
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {riceTypes.slice(0, 3).map((rice) => (
              <article
                key={rice.slug}
                className="harvest-reveal harvest-card group flex flex-col rounded-2xl border border-forest-950/10 bg-cream p-6 transition-shadow hover:shadow-lg hover:shadow-forest-950/5"
              >
                <Image
                  src={rice.image}
                  alt=""
                  width={390}
                  height={390}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="harvest-photo mb-5 aspect-square w-full rounded-xl object-cover"
                />
                <p className="text-sm font-semibold text-gold-700">
                  {rice.category}
                </p>
                <h3 className="mt-3 font-serif text-xl text-forest-900">
                  {rice.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-forest-700/80">
                  {rice.description}
                </p>
                <p className="mt-5 border-t border-forest-950/10 pt-4 text-xs font-medium text-forest-700">
                  Average grain length:{" "}
                  <span className="text-forest-900">{rice.grainLength}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging teaser */}
      <section className="harvest-reveal mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        <div>
          <SectionHeading
            eyebrow="Packaging"
            title="Retail bags, bulk sacks and private labels."
            description="Retail-ready bags, bulk woven sacks and full private-label programmes — printed with your brand, your barcodes and your compliance marks."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Retail bag sizes",
              "PP and BOPP woven bags",
              "Jute sacks",
              "Private label printing",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-forest-950/10 bg-white/60 px-4 py-3 text-sm font-medium text-forest-800"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/packaging"
            className="mt-8 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
          >
            See packaging options
          </Link>
        </div>

        <Image src="/images/retail-pack.jpg" alt="Branded rice bags from Amir Rice Export" width={900} height={600} className="h-80 w-full rounded-[2rem] bg-white object-contain" />
      </section>

      {/* Global reach band */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Global reach
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-cream sm:text-4xl">
              Shipping Pakistani rice from Karachi.
            </h2>
            <p className="mt-4 text-forest-200">We supply buyers across the Middle East, Africa, Europe and Asia.</p>
            <Link
              href="/global-reach"
              className="mt-8 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
            >
              Where we ship
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Middle East",
              "Africa",
              "Europe",
              "Asia",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cream/10 bg-forest-900/50 p-5"
              >
                <p className="text-sm font-semibold text-cream">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Processing" title="From milling to optical sorting." description="The company uses modern processing equipment and inspects rice during production to keep grades consistent." />
        <div className="harvest-reveal mt-8 grid gap-5 sm:grid-cols-2">
          <Image src="/images/processing.jpg" alt="Rice processing facility" width={900} height={600} className="h-64 w-full rounded-2xl object-cover" />
          <Image src="/images/sorting.jpg" alt="Optical rice sorting equipment" width={900} height={600} className="h-64 w-full rounded-2xl object-cover" />
        </div>
        <a href="https://player.vimeo.com/video/821665436?h=84c869f129" className="mt-6 inline-block font-semibold text-forest-800 underline">Watch the company video</a>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="rounded-[2rem] border border-forest-950/10 bg-cream-dark/60 px-6 py-12 text-center sm:px-12 lg:py-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight tracking-tight text-forest-900 sm:text-4xl">
            Tell us your grade, quantity and destination port.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
            >
              Request a quote
            </Link>
            <Link
              href="/rice-types"
              className="rounded-full border border-forest-950/20 px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-950/5"
            >
              Browse the range
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
