export interface VariacionCuencas {
  cuenca: string
  porcentaje_variacion: number
}

export interface VariacionEmbalses {
  nombre_embalse: string
  variacion_ultima_semanapor: number
}

export interface Cuenca {
  find(arg0: (cuenca: any) => boolean): unknown
  map(
    arg0: (cuenca: Cuenca, index: number) => import("react").JSX.Element
  ): import("react").ReactNode
  id_cuenca: number
  fecha_modificacion: string
  cuenca: string
  capacidad: number
  embalsada: number
  variacion: number
  porcentaje_embalsada: number
  porcentaje_variacion: number
  foto: string
}

export interface Esp {
  id: number
  embalsado: number
  porcentaje_embalsado: number
  capacidad_tot: number
  misma_semana_ly: number
  misma_semana_10y: number
  variacion_semanal: number
}

export interface BentoProps {
  cuencas: Cuenca[]
  variacionCuencas: VariacionCuencas[]
  variacionEmbalses: VariacionEmbalses[]
  esp: Esp[]
  pluvis: number[]
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
