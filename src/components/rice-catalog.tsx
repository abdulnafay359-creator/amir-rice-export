"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { riceTypes } from "@/lib/rice-types";

const categories = ["All", "Basmati", "Non-Basmati", "Parboiled"] as const;

export default function RiceCatalog() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const visibleRice = category === "All" ? riceTypes : riceTypes.filter((rice) => rice.category === category);

  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter rice varieties">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`rounded-full border border-forest-950/15 px-4 py-2 text-sm font-semibold ${category === item ? "bg-forest-900 text-cream" : "bg-white text-forest-900 hover:bg-forest-50"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleRice.length} varieties shown</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRice.map((rice) => (
            <article
              key={rice.slug}
              id={rice.slug}
              className="scroll-mt-24 flex flex-col rounded-2xl border border-forest-950/10 bg-white/60 p-7 transition-shadow hover:shadow-lg hover:shadow-forest-950/5"
            >
              <Image
                src={rice.image}
                alt=""
                width={390}
                height={390}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="mb-5 aspect-square w-full rounded-xl object-cover"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                      {rice.category}
                    </p>
                    {rice.featured && (
                      <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-forest-950">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-serif text-2xl text-forest-900">
                    {rice.name}
                  </h2>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-forest-700/80">
                {rice.description}
              </p>

              <dl className="mt-5 flex flex-wrap items-baseline gap-x-2 border-t border-forest-950/10 pt-4 text-sm text-forest-700">
                <dt>Average grain length</dt>
                <dd className="font-semibold">{rice.grainLength ?? "Available on request"}</dd>
              </dl>

              <Link href={{ pathname: "/contact", query: { rice: rice.slug } }} className="mt-5 self-start text-sm font-semibold text-forest-800 underline">Request a quote</Link>
            </article>
          ))}
        </div>
    </>
  );
}
