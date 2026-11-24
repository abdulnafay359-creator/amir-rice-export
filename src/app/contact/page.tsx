import type { Metadata } from "next";
import InquiryForm from "@/components/inquiry-form";
import { primeRiceContact as contact } from "@/lib/prime-rice-contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Prime Rice for bulk orders, private-label packaging and rice export quotations.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
      <div>
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
          <h2 className="font-serif text-2xl text-forest-950">Contact our team</h2>
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
        </div>
      </div>
      <div>
        <p className="mb-4 leading-relaxed text-forest-800">
          Please provide your product requirements and contact information so our team can prepare a relevant quotation.
        </p>
        <InquiryForm />
      </div>
    </section>
  );
}
