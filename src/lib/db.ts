import "server-only";
import { neon } from "@neondatabase/serverless";

export function getDatabase() {
  const connectionString = process.env.DATABASE_URL_POOLED;

  if (!connectionString) {
    throw new Error("DATABASE_URL_POOLED must be set to query Neon Postgres.");
  }

  return neon(connectionString);
}
