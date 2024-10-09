import { db } from "db"
import { Embalses } from "db/schema"

export async function Cuencas() {
  return db.select().from(Embalses)
}
