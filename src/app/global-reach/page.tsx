import type { Metadata } from "next";
import Link from "next/link";
import ExportMarketsMap from "@/components/export-markets-map";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Global Reach",
  description: "At Prime Rice, we help businesses access quality rice through dependable international supply solutions. We work with importers, wholesalers, distributors and retailers across different regions, understanding that every market has its own requirements.",
};

const markets = [
  ["Middle East","Supplying aromatic Basmati and long grain rice to meet the preferences of retail, wholesale and foodservice businesses."],
  ["Africa","Offering quality rice varieties and bulk supply options suited to diverse consumer markets and distribution requirements."],
  ["Europe","Providing rice products and customized packaging solutions tailored to retail and commercial market requirements."],
  ["Asia","Supporting businesses with a diverse selection of rice varieties for everyday consumption, wholesale distribution and foodservice."],
  ["USA","Serving importers, distributors and retail businesses with quality rice solutions tailored to market requirements and consistent supply expectations."],
  ["Canada","Supporting wholesalers, distributors and retailers with dependable rice supply options, customized packaging and business focused service."],
] as const;

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        eyebrow="Connecting Businesses Across the World"
        title="Quality Rice Without Borders"
        description="At Prime Rice, we help businesses access quality rice through dependable international supply solutions. We work with importers, wholesalers, distributors and retailers across different regions, understanding that every market has its own requirements."
        image="/images/export-port.webp"
        imageAlt="Cargo ship and cranes at a container port"
      />
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-6 lg:px-10">
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">Markets We Serve</h2>
          <p className="mt-4 leading-relaxed text-forest-800">From product selection and packaging to shipment coordination, we focus on making the purchasing process as straightforward as possible.</p>
          <ExportMarketsMap />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map(([market, description]) => (
              <li key={market} className="rounded-xl bg-forest-50 p-5">
                <h3 className="font-serif text-2xl text-forest-950">{market}</h3>
                <p className="mt-2 leading-relaxed text-forest-800">{description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-9">
          <h2 className="font-serif text-3xl text-forest-950 sm:text-4xl">International Shipping Solutions</h2>
          <p className="mt-4 leading-relaxed text-forest-800">We offer flexible shipment options based on your order quantity, destination and commercial requirements. Our team can assist with product specifications, packaging arrangements and freight quotations.</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-forest-50 p-5">
              <dt className="font-semibold text-forest-950">FOB · Free on Board</dt>
              <dd className="mt-2 text-forest-800">Prime Rice loads the goods aboard the vessel at the agreed port of shipment. The buyer arranges ocean freight and insurance.</dd>
            </div>
            <div className="rounded-xl bg-forest-50 p-5">
              <dt className="font-semibold text-forest-950">CIF · Cost, Insurance and Freight</dt>
              <dd className="mt-2 text-forest-800">Prime Rice arranges and pays for freight and insurance to the named destination port. Risk transfers when the goods are loaded aboard at the port of shipment.</dd>
            </div>
          </dl>
          <h3 className="mt-7 font-serif text-2xl text-forest-950">Let&apos;s Plan Your Next Shipment</h3>
          <p className="mt-4 leading-relaxed text-forest-800">Share your required rice variety, order quantity and destination port. Our team will work with you to provide a suitable quotation for your business.</p>
          <Link className="mt-6 inline-flex rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-700" href="/contact">Get a Freight Quote</Link>
        </section>
      </div>
    </>
  );
}
