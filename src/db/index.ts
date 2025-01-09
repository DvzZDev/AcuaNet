import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

config({ path: ".env" })

// Configuración del pool de conexiones
const client = postgres(process.env.DATABASE_URL!, {
  max: 20, // Número máximo de conexiones activas en el pool
  idle_timeout: 5, // Tiempo máximo que una conexión inactiva estará abierta (en segundos)
  connect_timeout: 30, // Tiempo máximo para intentar una conexión (en segundos)
})

export const db = drizzle(client)
