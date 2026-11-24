import Image from "next/image";
import Link from "next/link";
import { primeRiceContact as contact } from "@/lib/prime-rice-contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/rice-types", label: "Rice Products" },
  { href: "/packaging", label: "Packaging Solutions" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 font-serif text-2xl text-cream">
              <Image src="/images/prime-rice.webp" alt="" width={56} height={56} className="rounded-lg" />
              Prime Rice
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed">
              A global rice supplier offering premium Basmati and Non Basmati rice, flexible packaging solutions and dependable export services. We are committed to delivering consistent quality and building lasting business relationships.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-semibold text-gold-300">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:underline">{label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold text-gold-300">Get in Touch</h2>
            <p className="mt-4 leading-relaxed">
              Contact our export team for product inquiries, wholesale orders and customized supply solutions.
            </p>
            <address className="mt-4 grid gap-2 not-italic">
              <strong>{contact.name}</strong>
              <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
              <p>{contact.address}</p>
            </address>
          </div>
        </div>
        <p className="mt-10 border-t border-cream/15 pt-5 text-sm">
          © 2026 Prime Rice &amp; Import Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
