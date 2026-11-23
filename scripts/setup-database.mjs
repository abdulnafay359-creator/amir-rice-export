import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("Set DATABASE_URL before running database setup.");
}

try {
  const sql = neon(process.env.DATABASE_URL);
  await sql`
    CREATE TABLE IF NOT EXISTS public.rice_export_inquiries (
      id uuid PRIMARY KEY,
      created_at timestamptz NOT NULL DEFAULT now(),
      name varchar(120) NOT NULL,
      company varchar(160) NOT NULL,
      email varchar(254) NOT NULL,
      country varchar(100) NOT NULL,
      rice varchar(80) NOT NULL,
      quantity varchar(60) NOT NULL,
      message varchar(3000) NOT NULL
    )
  `;
  console.log("Rice export inquiry table is ready.");
} catch {
  console.error("Database setup failed. Check the Neon connection and permissions.");
  process.exitCode = 1;
}
