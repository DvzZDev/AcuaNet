// Tipos TypeScript para las tablas de la base de datos
export interface Cuencas {
  cuenca: string
  fecha_modificacion?: Date | null
  capacidad?: number | null
  embalsada?: number | null
  variacion?: number | null
  porcentaje_embalsada?: number | null
  porcentaje_variacion?: number | null
  foto?: string | null
}

export interface Embalses {
  fecha_modificacion?: Date | null
  nombre_embalse: string
  nombre_cuenca?: string | null
  agua_embalsada?: number | null
  agua_embalsadapor?: number | null
  variacion_ultima_semana?: number | null
  variacion_ultima_semanapor?: number | null
  capacidad_total?: number | null
  misma_semana_ultimo_año?: number | null
  misma_semana_ultimo_añopor?: number | null
  misma_semana_10años?: number | null
  misma_semana_10añospor?: number | null
  lat?: number | null
  lon?: number | null
  cota?: number | null
  pais?: string | null
}

export interface España {
  porcentaje_embalsado: number
  fecha?: Date | null
  id: string
}

export interface AllData {
  id: string
  embalse: string
  cuenca: string
  fecha: Date
  capacidad_total: number
  volumen_actual: number
  porcentaje: number
}

export interface PortugalData {
  fecha?: Date | null
  embalse: string
  cuenca?: string | null
  volumen_actual?: number | null
  porcentaje?: number | null
  variacion_ultima_semana?: number | null
  variacion_ultima_semanapor?: number | null
  capacidad_total?: number | null
  lat?: number | null
  lon?: number | null
  pais?: string | null
}

export interface LiveData {
  id: string
  embalse: string
  volumen?: number | null
  porcentaje?: number | null
  timestamp?: Date | null
  cota?: number | null
}

export interface EmbalsesCoords {
  embalse: string
  lat?: number | null
  long?: number | null
}

// Nombres de las tablas
export const TABLE_NAMES = {
  CUENCAS: "datos_cuencas",
  EMBALSES: "datos_embalses",
  ESPAÑA: "datos_españa",
  ALL_DATA: "embalses2025",
  PORTUGAL_DATA: "portugal_data",
  LIVE_DATA: "live_data",
  EMBALSES_COORDS: "embalses_coords",
} as const
