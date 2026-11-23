"use client";

import { useRef, useState } from "react";
import { riceTypes } from "@/lib/rice-types";

type Status = "idle" | "submitting" | "sent" | "error";

const FIELD =
  "mt-1.5 w-full rounded-xl border border-forest-950/15 bg-cream px-4 py-3 text-sm text-forest-950 outline-none transition-colors placeholder:text-forest-600/50 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20";
const LABEL =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-700";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const previousAttempt = useRef<{ id: string; data: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const data = JSON.stringify(fields);
    const id = previousAttempt.current?.data === data ? previousAttempt.current.id : crypto.randomUUID();
    previousAttempt.current = { id, data };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, id }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error ?? "Could not send the inquiry. Please try again.");
        setStatus("error");
        return;
      }
      previousAttempt.current = null;
      setStatus("sent");
    } catch {
      setError("Could not send the inquiry. Please try again or email info@amirriceexport.com.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-forest-950/10 bg-white/60 p-8 text-center">
        <p className="font-serif text-2xl text-forest-900">Inquiry received.</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-forest-700/80">
          Thank you — we will reply with pricing and packing options shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-forest-950/20 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-950/5"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-forest-950/10 bg-white/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Full name
          </label>
          <input id="name" name="name" required maxLength={120} autoComplete="name" className={FIELD} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className={LABEL}>
            Company
          </label>
          <input id="company" name="company" maxLength={160} autoComplete="organization" className={FIELD} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={FIELD}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="country" className={LABEL}>
            Destination country
          </label>
          <input id="country" name="country" maxLength={100} className={FIELD} placeholder="e.g. United Arab Emirates" />
        </div>
        <div>
          <label htmlFor="rice" className={LABEL}>
            Rice type
          </label>
          <select id="rice" name="rice" defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select a variety
            </option>
            {riceTypes.map((rice) => (
              <option key={rice.slug} value={rice.slug}>
                {rice.name}
              </option>
            ))}
            <option value="other">Other / custom grade</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className={LABEL}>
            Quantity (MT)
          </label>
          <input
            id="quantity"
            name="quantity"
            inputMode="decimal"
            maxLength={60}
            className={FIELD}
            placeholder="e.g. 25"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>
            Specification & requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={3000}
            className={FIELD}
            placeholder="Broken percentage, packing format, destination port, target price…"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-forest-900 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>

    </form>
  );
}
