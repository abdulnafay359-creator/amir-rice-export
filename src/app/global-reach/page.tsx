import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Global Reach",
  description: "At Prime Rice, we help businesses access quality rice through dependable international supply solutions. We work with importers, wholesalers, distributors and retailers across different regions, understanding that every market has its own requirements.",
};

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        title="Quality Rice Without Borders"
        description="At Prime Rice, we help businesses access quality rice through dependable international supply solutions. We work with importers, wholesalers, distributors and retailers across different regions, understanding that every market has its own requirements."
        image="/images/export-port.webp"
        imageAlt="Illustration of a container port and cargo ship"
      />
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 lg:px-10">
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">International Rice Supply</h2>
          <p className="mt-4 leading-relaxed text-forest-800">From product selection and packaging to shipment coordination, we focus on making the purchasing process as straightforward as possible.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-forest-800">
            <li>Supplying aromatic Basmati and long grain rice to meet the preferences of retail, wholesale and foodservice businesses.</li>
            <li>Offering quality rice varieties and bulk supply options suited to diverse consumer markets and distribution requirements.</li>
            <li>Providing rice products and customized packaging solutions tailored to retail and commercial market requirements.</li>
            <li>Supporting businesses with a diverse selection of rice varieties for everyday consumption, wholesale distribution and foodservice.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Shipment Options</h2>
          <p className="mt-4 leading-relaxed text-forest-800">We offer flexible shipment options based on your order quantity, destination and commercial requirements. Our team can assist with product specifications, packaging arrangements and freight quotations.</p>
          <p className="mt-4 leading-relaxed text-forest-800">FOB and CIF quotations are available depending on your shipment requirements.</p>
          <p className="mt-4 leading-relaxed text-forest-800">Share your required rice variety, order quantity and destination port. Our team will work with you to provide a suitable quotation for your business.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/contact">Get a Freight Quote</Link>
        </section>
      </div>
    </>
  );
}
