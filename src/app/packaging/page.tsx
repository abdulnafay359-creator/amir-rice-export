import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Packaging",
  description:
    "Retail bags, bulk PP woven sacks, jute, non-woven and private-label rice packaging from Amir Rice Export.",
};

const RETAIL = [
  { size: "5 kg", detail: "Printed retail bag" },
  { size: "10 kg", detail: "Retail and wholesale" },
];

const BULK = [
  { size: "20 kg", detail: "Jute or woven polypropylene" },
  { size: "30 kg", detail: "Jute or woven polypropylene" },
  { size: "40 kg", detail: "Jute or woven polypropylene" },
];

export default function PackagingPage() {
  return (
    <>
      <PageHero
        title="Rice packaging"
        description="Retail, jute and PP/BOPP bags with private-label printing."
        image="/images/retail-pack.jpg"
        imageAlt="Branded retail rice packs"
        fit="contain"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-forest-950/10 bg-white/60 p-7">
            <Image src="/images/retail-pack.jpg" alt="Branded retail rice packs" width={900} height={600} className="mb-6 h-64 w-full rounded-xl bg-white object-contain" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
              Retail
            </p>
            <h2 className="mt-2 font-serif text-2xl text-forest-900">
              Consumer packs
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-forest-700/80">
              Printed, sealed and shelf-ready — with barcodes, nutrition panels
              and market-specific labelling applied at the mill.
            </p>
            <ul className="mt-6 divide-y divide-forest-950/10">
              {RETAIL.map((item) => (
                <li
                  key={item.size}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="font-serif text-lg text-forest-900">
                    {item.size}
                  </span>
                  <span className="text-right text-xs text-forest-700/80">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-forest-950/10 bg-white/60 p-7">
            <Image src="/images/bulk-pack.jpg" alt="Export rice bag packaging" width={900} height={600} className="mb-6 h-64 w-full rounded-xl bg-white object-contain" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
              Bulk
            </p>
            <h2 className="mt-2 font-serif text-2xl text-forest-900">
              Wholesale & container loads
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-forest-700/80">
              Standard export sacks for distributor and tender supply, with bag material and lining agreed when you order.
            </p>
            <ul className="mt-6 divide-y divide-forest-950/10">
              {BULK.map((item) => (
                <li
                  key={item.size}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="font-serif text-lg text-forest-900">
                    {item.size}
                  </span>
                  <span className="text-right text-xs text-forest-700/80">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-forest-950/10 bg-forest-950 p-7 text-cream sm:p-10">
          <div className="max-w-2xl">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                Private label
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                Your brand, our mill.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-forest-200/80">
                Choose your bag size and material, then customize it with your branding.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[2rem] border border-forest-950/10 bg-cream-dark/60 px-6 py-12 text-center sm:px-12">
          <h2 className="max-w-xl font-serif text-2xl leading-tight tracking-tight text-forest-900 sm:text-3xl">
            Need a packing format that is not listed?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-forest-700/80">
            Vacuum packs, cartons and palletised configurations are available on
            request.
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
          >
            Ask about packaging
          </Link>
        </div>
      </section>
    </>
  );
}