import type { Metadata } from "next";
import { Suspense } from "react";
import InquiryForm from "@/components/inquiry-form";
import { primeRiceContact as contact } from "@/lib/prime-rice-contact";
import { riceTypes } from "@/lib/rice-types";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Prime Rice for bulk orders, private-label packaging and rice export quotations.",
};

async function QuoteForm({ searchParams }: Pick<PageProps<"/contact">, "searchParams">) {
  const { rice } = await searchParams;
  const selectedRice = riceTypes.find((variety) => variety.slug === rice)?.slug;
  return <InquiryForm key={selectedRice ?? ""} selectedRice={selectedRice} />;
}

export default function ContactPage({ searchParams }: PageProps<"/contact">) {
  const addressQuery = encodeURIComponent(contact.address);

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
      <div>
        <p className="mb-3 font-semibold text-forest-700">Let&apos;s Talk Business</p>
        <h1 className="font-serif text-4xl tracking-tight text-forest-950 sm:text-5xl">
          Your Next Rice Shipment Starts Here.
        </h1>
        <p className="mt-5 leading-relaxed text-forest-800">
          Looking for a reliable rice supplier? Whether you are interested in bulk orders, specific rice varieties or private label packaging, our team is here to help.
        </p>
        <p className="mt-4 leading-relaxed text-forest-800">
          Share your requirements with us, and we will work with you to find a suitable solution for your business.
        </p>

        <div className="mt-8 rounded-2xl border border-forest-950/10 bg-cream-dark p-6">
          <h2 className="font-serif text-2xl text-forest-950">Get in Touch</h2>
          <p className="mt-3 leading-relaxed">
            For product information, business inquiries, packaging requirements or export quotations, feel free to contact our team directly.
          </p>
          <address className="mt-5 grid gap-2 not-italic">
            <strong>{contact.name}</strong>
            <a className="underline" href={`tel:${contact.phone}`}>{contact.phone}</a>
            <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>
            <p>{contact.address}</p>
          </address>
          <p className="mt-4">We look forward to working with you.</p>
          <iframe
            title="Map of the Prime Rice office area in Karachi"
            src={`https://maps.google.com/maps?q=${addressQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mt-5 h-48 w-full rounded-xl border border-forest-950/10"
          />
          <a
            className="mt-4 inline-flex font-semibold text-forest-800 underline underline-offset-4"
            href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
          >
            Open office address in Google Maps
          </a>
        </div>
      </div>
      <div>
        <h2 className="mb-3 font-serif text-3xl text-forest-950">Request a Quote</h2>
        <p className="mb-4 leading-relaxed text-forest-800">
          Please provide your product requirements and contact information so our team can prepare a relevant quotation.
        </p>
        <Suspense fallback={<p role="status">Loading inquiry form…</p>}>
          <QuoteForm searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
