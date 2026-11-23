import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/rice-types", label: "Rice Types" },
  { href: "/packaging", label: "Packaging" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-forest-950/10 bg-forest-950 text-forest-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-cream">Amir Rice Export</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-200/80">
              Premium Basmati and non-Basmati rice from the fields of Punjab and
              Sindh — sorted, milled and shipped to buyers across the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ISO", "HACCP", "Halal"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cream/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-forest-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-forest-200/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-forest-200/80">
              <li>204 Progressive Plaza, Beaumont Road, Civil Lines, Karachi, Pakistan</li>
              <li>
                <a
                  href="mailto:info@amirriceexport.com"
                  className="transition-colors hover:text-cream"
                >
                  info@amirriceexport.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+922135221185"
                  className="transition-colors hover:text-cream"
                >
                  +92 21 3522 1185
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
            >
              Start an inquiry
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-forest-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© Amir Rice Export &amp; Import Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
