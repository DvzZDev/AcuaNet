import { db } from "@/db"
import { Cuencas, España, Embalses } from "@/db/schema"
import { inArray } from "drizzle-orm"

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
