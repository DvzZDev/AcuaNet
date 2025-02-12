import { db } from "@/db"
import { Cuencas, España, Embalses, AllData, LiveData } from "@/db/schema"
import { desc, inArray, sql } from "drizzle-orm"

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
  return db.select().from(Embalses).where(inArray(Embalses.nombre_embalse, ids))
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
