import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Global Reach",
  description:
    "Amir Rice Export ships from Karachi Port and Port Qasim to buyers across the Middle East, Africa, Europe and Asia.",
};

const REGIONS = ["Middle East", "Africa", "Europe", "Asia"];

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        title="From Karachi to your port."
        description="We ship to importers, distributors and retailers across the Middle East, Africa, Europe and Asia."
        image="/images/export-port.webp"
        imageAlt="Illustration of a container port and cargo ship"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {REGIONS.map((region) => (
            <div
              key={region}
              className="rounded-2xl border border-forest-950/10 bg-white/60 p-7"
            >
              <h2 className="font-serif text-2xl text-forest-900">
                {region}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-forest-950/10 bg-cream-dark/60 px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-xl font-serif text-2xl leading-tight tracking-tight text-forest-900 sm:text-3xl">
            Not sure about freight to your port?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-forest-700/80">
            Share the destination port and quantity — we will quote FOB and CIF
            side by side.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-800"
          >
            Get a freight quote
          </Link>
        </div>
      </section>
    </>
  );
}