export interface VariacionCuencas {
  cuenca: string | null
  porcentaje_variacion: number | null
}

export interface VariacionEmbalses {
  nombre_embalse: string | null
  variacion_ultima_semanapor: number | null
}

export interface Cuenca {
  cuenca: string
  fecha_modificacion: Date | null
  capacidad: number | null
  embalsada: number | null
  variacion: number | null
  porcentaje_embalsada: number | null
  porcentaje_variacion: number | null
  foto: string | null
}

export interface Esp {
  id: string
  porcentaje_embalsado: number
  fecha: Date | null
}

export interface BentoProps {
  cuencas: Cuenca[]
  variacionCuencas: VariacionCuencas[]
  variacionEmbalses: VariacionEmbalses[]
  esp: Esp[]
}

export interface Embalses {
  fecha_modificacion: Date | null
  nombre_embalse: string | null
  nombre_cuenca: string | null
  agua_embalsada: number | null
  agua_embalsadapor: number | null
  variacion_ultima_semana: number | null
  variacion_ultima_semanapor: number | null
  capacidad_total: number | null
  misma_semana_ultimo_año: number | null
  misma_semana_ultimo_añopor: number | null
  misma_semana_10años: number | null
  misma_semana_10añospor: number | null
}
