import {
  pgTable,
  varchar,
  integer,
  doublePrecision,
  timestamp,
  primaryKey,
  date,
} from "drizzle-orm/pg-core"

export const Cuencas = pgTable(
  "datos_cuencas",
  {
    cuenca: varchar("cuenca", { length: 50 }).notNull(),
    fecha_modificacion: timestamp("fecha_modificacion", { withTimezone: false }),
    capacidad: integer("capacidad"),
    embalsada: integer("embalsada"),
    variacion: doublePrecision("variacion"),
    porcentaje_embalsada: doublePrecision("porcentaje_embalsada"),
    porcentaje_variacion: doublePrecision("porcentaje_variacion"),
    foto: varchar("foto", { length: 255 }),
  },
  (table) => ({
    pk: primaryKey(table.cuenca),
  })
)

export const Embalses = pgTable(
  "datos_embalses",
  {
    fecha_modificacion: timestamp("fecha_modificacion", {
      withTimezone: false,
    }).defaultNow(),
    nombre_embalse: varchar("nombre_embalse", { length: 255 }).notNull(),
    nombre_cuenca: varchar("nombre_cuenca", { length: 255 }),
    agua_embalsada: integer("agua_embalsada"),
    agua_embalsadapor: doublePrecision("agua_embalsadapor"),
    variacion_ultima_semana: doublePrecision("variacion_ultima_semana"),
    variacion_ultima_semanapor: doublePrecision("variacion_ultima_semanapor"),
    capacidad_total: integer("capacidad_total"),
    misma_semana_ultimoAno: doublePrecision("misma_semana_ultimo_año"),
    misma_semana_ultimoAnopor: doublePrecision("misma_semana_ultimo_añopor"),
    misma_semana_10Años: doublePrecision("misma_semana_10años"),
    misma_semana_10Añospor: doublePrecision("misma_semana_10añospor"),
  },
  (table) => ({
    pk: primaryKey(table.nombre_embalse),
  })
)

export const España = pgTable(
  "datos_españa",
  {
    porcentaje_embalsado: integer("porcentaje_embalsado").notNull(),
    fecha: date("fecha"),
    id: varchar("id", { length: 255 }).notNull(),
  },
  (table) => ({
    pk: primaryKey(table.id),
  })
)
