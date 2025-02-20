import { db } from "@/db"
import { Cuencas, España, Embalses, AllData, LiveData, PortugalData } from "@/db/schema"
import { desc, eq, inArray, sql } from "drizzle-orm"

export async function GetCuencas() {
  return db.select().from(Cuencas)
}

export async function GetEsp() {
  return db.select().from(España)
}

export async function GetEmbalses() {
  return db.select().from(Embalses)
}

export async function GetEmbalseByName(ids: string[]) {
  return db
    .select()
    .from(
      db
        .select({
          id: AllData.id,
          embalse: AllData.embalse,
          cuenca: AllData.cuenca,
          fecha: AllData.fecha,
          capacidad_total: AllData.capacidad_total,
          volumen_actual: AllData.volumen_actual,
          porcentaje: AllData.porcentaje,
          // Match the exact case in the column alias
          rowNum: sql<number>`ROW_NUMBER() OVER (PARTITION BY ${AllData.embalse} ORDER BY ${AllData.fecha} DESC)`.as("rowNum"),
        })
        .from(AllData)
        .where(
          inArray(
            sql`LOWER(${AllData.embalse})`,
            ids.map((id) => id.toLowerCase())
          )
        )
        .as("ranked_data")
    )
    .where(sql`"rowNum" <= 2`)
}
export async function GetLiveData(emb: string) {
  return db
    .select()
    .from(LiveData)
    .where(sql`LOWER(${LiveData.embalse}) = LOWER(${emb})`)
    .orderBy(desc(LiveData.timestamp))
}

export async function GetHistoricalData(emb: string) {
  const result = await db
    .select({
      id: AllData.id,
      embalse: AllData.embalse,
      cuenca: AllData.cuenca,
      fecha: sql<Date>`COALESCE(${AllData.fecha}, NOW())`,
      capacidad_total: AllData.capacidad_total,
      volumen_actual: AllData.volumen_actual,
      porcentaje: AllData.porcentaje,
    })
    .from(AllData)
    .where(sql`LOWER(${AllData.embalse}) = LOWER(${emb})`)
    .orderBy(desc(AllData.fecha))

  return result
}

export async function GetPortugalData(emb: string) {
  return db.select().from(PortugalData).where(eq(PortugalData.embalse, emb))
}
