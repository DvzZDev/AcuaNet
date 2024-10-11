import { db } from "db"
import { Cuencas, España, Embalses } from "db/schema"

export async function GetCuencas() {
  return db.select().from(Cuencas)
}

export async function GetEsp() {
  return db.select().from(España)
}

export async function GetEmbalses() {
  return db.select().from(Embalses)
}
