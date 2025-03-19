import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const connectionString = "postgres://postgres.ucecfqxpiyqnyycbizvx:Ja3rB9e5tTuQwVoH@aws-0-eu-central-1.pooler.supabase.com:5432/postgres?sslmode=require"
const client = postgres(connectionString)

export const db = drizzle(client)
