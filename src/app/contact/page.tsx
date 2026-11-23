import type { Metadata } from "next";
import InquiryForm from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a rice quotation from Amir Rice Export. Share your grade, quantity and destination port.",
};

const DETAILS = [
  { label: "Office", href: "https://www.google.com/maps/search/?api=1&query=204+Progressive+Plaza+Beaumont+Road+Karachi", value: "204 Progressive Plaza, Beaumont Road, Civil Lines, Karachi, Pakistan" },
  { label: "Email", value: "info@amirriceexport.com", href: "mailto:info@amirriceexport.com" },
  { label: "Phone", value: "+92 21 3522 1185", href: "tel:+922135221185" },
  { label: "Alternate phone", value: "+92 21 3522 1186", href: "tel:+922135221186" },
  { label: "Alternate email", value: "artrice1@hotmail.com", href: "mailto:artrice1@hotmail.com" },
  { label: "Hours", value: "09:00–17:00 PKT" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:py-20">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-600">
          Contact us
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-forest-950 sm:text-5xl">
          Let’s talk about your next shipment.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-forest-800/80">
          Share your rice grade, quantity and destination port.
        </p>

        <dl className="mt-10 divide-y divide-forest-950/10 border-y border-forest-950/10">
          {DETAILS.map((item) => (
            <div key={item.label} className="flex items-start justify-between gap-6 py-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-600">
                {item.label}
              </dt>
              <dd className="text-right text-sm font-medium text-forest-900">
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-forest-600">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

      </div>

      <InquiryForm />
    </section>
  );
}