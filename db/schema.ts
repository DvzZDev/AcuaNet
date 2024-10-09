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
    fechaModificacion: timestamp("fecha_modificacion", { withTimezone: false }),
    capacidad: integer("capacidad"),
    embalsada: integer("embalsada"),
    variacion: doublePrecision("variacion"),
    porcentajeEmbalsada: doublePrecision("porcentaje_embalsada"),
    porcentajeVariacion: doublePrecision("porcentaje_variacion"),
    foto: varchar("foto", { length: 255 }),
  },
  (table) => ({
    pk: primaryKey(table.cuenca),
  })
)

export const Embalses = pgTable(
  "datos_embalses",
  {
    fechaModificacion: timestamp("fecha_modificacion", {
      withTimezone: false,
    }).defaultNow(),
    nombreEmbalse: varchar("nombre_embalse", { length: 255 }).notNull(),
    nombreCuenca: varchar("nombre_cuenca", { length: 255 }),
    aguaEmbalsada: integer("agua_embalsada"),
    aguaEmbalsadapor: doublePrecision("agua_embalsadapor"),
    variacionUltimaSemana: doublePrecision("variacion_ultima_semana"),
    variacionUltimaSemanapor: doublePrecision("variacion_ultima_semanapor"),
    capacidadTotal: integer("capacidad_total"),
    mismaSemanaUltimoAno: doublePrecision("misma_semana_ultimo_año"),
    mismaSemanaUltimoAnopor: doublePrecision("misma_semana_ultimo_añopor"),
    mismaSemana10Años: doublePrecision("misma_semana_10años"),
    mismaSemana10Añospor: doublePrecision("misma_semana_10añospor"),
  },
  (table) => ({
    pk: primaryKey(table.nombreEmbalse),
  })
)

export const Espana = pgTable(
  "datos_españa",
  {
    porcentajeEmbalsado: integer("porcentaje_embalsado").notNull(),
    fecha: date("fecha"),
    id: varchar("id", { length: 255 }).notNull(),
  },
  (table) => ({
    pk: primaryKey(table.id),
  })
)
