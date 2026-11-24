
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/rice-types", label: "Rice Products" },
  { href: "/packaging", label: "Packaging Solutions" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-950/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:h-20 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/prime-rice.webp" alt="" width={48} height={48} className="h-12 w-12 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-forest-900 sm:text-xl">
              Prime Rice
            </span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-forest-600 sm:block">
              Premium Rice · Pakistan
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-forest-900"
                    : "text-forest-700/80 hover:text-forest-900"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-800 lg:inline-flex"
          >
            Request a quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-xl border border-forest-950/15 text-forest-900 transition-colors hover:bg-forest-950/5 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest-950/10 bg-cream lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-forest-900 text-cream"
                    : "text-forest-800 hover:bg-forest-950/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-forest-950"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}