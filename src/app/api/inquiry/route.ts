import { getDatabase } from "@/lib/db";
import { riceTypes } from "@/lib/rice-types";

const allowedRice = new Set(["", "other", ...riceTypes.map((rice) => rice.slug)]);
const limits = { name: 120, company: 160, email: 254, country: 100, phone: 60, port: 120, packaging: 160, rice: 80, quantity: 60, message: 3000 };

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return Response.json({ error: "Invalid request." }, { status: 403 });
  }

  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 16384) {
      return Response.json({ error: "Inquiry is too large." }, { status: 413 });
    }
    input = JSON.parse(raw);
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch {
    return Response.json({ error: "Invalid inquiry." }, { status: 400 });
  }

  const id = input.id;
  const fields = Object.fromEntries(
    Object.keys(limits).map((key) => {
      const value = input[key];
      return [key, typeof value === "string" ? value.trim() : ""];
    }),
  );
  const { name, company, email, country, rice, quantity, message, phone, port, packaging } = fields;

  if (
    typeof id !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id) ||
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedRice.has(rice) ||
    Object.entries(limits).some(([key, max]) => fields[key].length > max || fields[key].includes("\0"))
  ) {
    return Response.json({ error: "Check your name, email and inquiry details." }, { status: 400 });
  }

  try {
    const sql = getDatabase();
    await sql`
      INSERT INTO public.rice_export_inquiries (id, name, company, email, country, rice, quantity, message, phone, port, packaging)
      VALUES (${id}, ${name}, ${company}, ${email}, ${country}, ${rice}, ${quantity}, ${message}, ${phone}, ${port}, ${packaging})
      ON CONFLICT (id) DO NOTHING
    `;
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    console.error("Could not save rice export inquiry.");
    return Response.json({ error: "Could not save the inquiry. Please try again or contact us by email." }, { status: 503 });
  }
}
