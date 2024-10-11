export interface VariacionCuencas {
  cuenca: string | null
  porcentaje_variacion: number | null
}

export interface VariacionEmbalses {
  nombre_embalse: string | null
  variacion_ultima_semanapor: number | null
}

interface Cuenca {
  cuenca: string
  fecha_modificacion: Date | null
  capacidad: number | null
  embalsada: number | null
  variacion: number | null
  porcentaje_embalsada: number | null
  porcentaje_variacion: number | null
  foto: string | null
}

interface Esp {
  id: string
  porcentaje_embalsado: number
  fecha: string | null
}

export interface BentoProps {
  cuencas: Cuenca[]
  variacionCuencas: VariacionCuencas[]
  variacionEmbalses: VariacionEmbalses[]
  esp: Esp[]
}

export interface Embalses {
  filter(arg0: (elemento: Embalses) => boolean): unknown
  find(arg0: (embalse: any) => boolean): unknown
  id_embalse: number
  fecha_modificacion: string
  nombre_embalse: string
  nombre_cuenca: string
  agua_embalsada: number
  agua_embalsadapor: number
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  capacidad_total: number
  misma_semana_ultimo_año: number
  misma_semana_ultimo_añopor: number
  misma_semana_10años: number
  misma_semana_10añospor: number
}
