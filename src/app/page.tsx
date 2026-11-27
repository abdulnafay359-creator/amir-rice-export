import Image from "next/image";
import Link from "next/link";
import DeliveryMarkets from "@/components/delivery-markets";
import HarvestVideo from "@/components/harvest-video";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-950 text-cream lg:grid lg:min-h-[39rem] lg:items-end">
        <HarvestVideo />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-forest-950/95 via-forest-950/65 to-transparent lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-forest-950/80 via-transparent to-forest-950/15 lg:block" />

        <div className="harvest-hero-copy relative mx-auto w-full max-w-7xl px-5 pb-12 pt-9 sm:px-6 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <h1 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Quality Rice. Reliable Supply. <span className="italic text-gold-300">Global Reach.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest-100 sm:text-lg">
              We supply premium Basmati and Non Basmati rice to importers, wholesalers, distributors and retailers worldwide. From careful grain selection to customized packaging, we focus on delivering consistent quality with every shipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/rice-types" className="harvest-action rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-300">
                Explore Our Products
              </Link>
              <Link href="/contact" className="harvest-action rounded-full border border-cream/65 bg-forest-950/20 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/15">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 lg:px-10">
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Your Reliable Partner in Global Rice Supply</h2>
          <p className="mt-4 leading-relaxed text-forest-800">At Prime Rice, we understand that choosing the right rice supplier is about more than just finding a quality product. It is about consistency, reliability and building a business relationship you can depend on.</p>
          <p className="mt-4 leading-relaxed text-forest-800">We offer a wide range of rice varieties to meet the requirements of different markets. Our focus on careful sourcing, processing and packaging helps us deliver products that meet our customers&apos; expectations.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Whether you require bulk shipments or customized retail packaging, we work closely with you to find the right solution for your business.</p>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">A Variety for Every Market</h2>
          <p className="mt-4 leading-relaxed text-forest-800">From aromatic, extra long grain Basmati to everyday Non Basmati rice, our product range is designed to meet different consumer preferences, market demands and business requirements.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="grid gap-5 rounded-xl bg-forest-50 p-5 xl:grid-cols-[9rem_1fr] xl:items-center">
            <Image src="/images/rice-catalog/1121-steam.webp" alt="" width={390} height={390} sizes="(min-width: 1280px) 144px, 320px" className="aspect-square w-full max-w-60 rounded-lg object-cover" />
            <div>
              <h3 className="font-serif text-2xl">Basmati Rice</h3>
              <p className="mt-4 leading-relaxed text-forest-800">Known for its distinctive aroma, long grains and delicate texture, our Basmati rice is ideal for premium retail, foodservice and wholesale markets.</p>
            </div>
          </article>
          <article className="grid gap-5 rounded-xl bg-forest-50 p-5 xl:grid-cols-[9rem_1fr] xl:items-center">
            <Image src="/images/rice-catalog/pk-386.webp" alt="" width={390} height={390} sizes="(min-width: 1280px) 144px, 320px" className="aspect-square w-full max-w-60 rounded-lg object-cover" />
            <div>
              <h3 className="font-serif text-2xl">Non Basmati Rice</h3>
              <p className="mt-4 leading-relaxed text-forest-800">A practical choice for everyday consumption, offering consistent grain quality and excellent value for large scale distribution.</p>
            </div>
          </article>
          </div>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/rice-types">Explore Our Products</Link>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Built Around Your Business Needs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>Consistent Quality: Careful grain selection and quality checks throughout the processing journey.</li>
            <li>Reliable Supply: Supply solutions designed to support long term business requirements.</li>
            <li>Flexible Packaging: Retail, wholesale and customized private label packaging options.</li>
            <li>Global Distribution: Export solutions tailored to international market requirements.</li>
            <li>Competitive Pricing: Quality products at commercially competitive prices.</li>
            <li>Customer Support: Clear communication and dedicated assistance throughout the order process.</li>
          </ul>
        </section>
        <section className="grid overflow-hidden rounded-2xl bg-forest-950 text-cream lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image src="/images/rice-hero.jpg" alt="Close-up of uncooked rice grains" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <h2 className="font-serif text-3xl text-gold-300 sm:text-4xl">Care in Every Grain</h2>
            <p className="mt-4 leading-relaxed text-forest-100">Quality begins with selecting the right rice. We focus on maintaining the natural characteristics of each variety at every stage.</p>
            <ol className="mt-6 flex flex-wrap gap-2" aria-label="Rice processing stages">
              {["Selection", "Cleaning", "Milling", "Sorting", "Grading", "Packaging"].map((stage) => (
                <li key={stage} className="rounded-full border border-gold-300/30 bg-forest-900 px-3 py-1.5 text-sm text-gold-100">{stage}</li>
              ))}
            </ol>
            <p className="mt-6 border-t border-cream/20 pt-5 leading-relaxed text-forest-100">Our approach helps ensure consistent grain size, appearance and cooking performance.</p>
          </div>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Your Product. Your Brand. Your Packaging.</h2>
          <p className="mt-4 leading-relaxed text-forest-800">We offer flexible packaging solutions for retail businesses, wholesalers and international distributors. Whether you need bulk rice shipments or products packed under your own brand, we can help you select packaging that suits your market.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/packaging">Explore Packaging Options</Link>
        </section>
        <section id="where-we-deliver" className="scroll-mt-24 overflow-hidden rounded-2xl border border-forest-950/10 bg-white/60">
          <div className="relative isolate overflow-hidden bg-forest-950 px-6 py-12 text-cream sm:px-9">
            <Image src="/images/export-port.webp" alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-20 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest-950/75" />
            <h2 className="font-serif text-3xl sm:text-4xl">Connecting Quality Rice with Global Markets</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-forest-100">We work with businesses across international markets, offering rice supply solutions that meet different regional preferences and commercial requirements.</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-forest-100">Our goal is to build lasting relationships through dependable service, consistent quality and transparent communication.</p>
          </div>
          <div className="px-6 pb-8 sm:px-9">
            <DeliveryMarkets />
            <Link href="/global-reach" className="mt-5 inline-flex font-semibold text-forest-800 underline underline-offset-4">Explore Global Reach</Link>
          </div>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Looking for a Reliable Rice Supplier?</h2>
          <p className="mt-4 leading-relaxed text-forest-800">Tell us about your product requirements, preferred packaging and order quantity. Our team will help you find the right rice supply solution for your business.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/contact">Get a Quote</Link>
        </section>
      </div>
    </>
  );
}
