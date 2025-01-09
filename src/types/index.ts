export interface VariacionCuencas {
  cuenca: string | null
  porcentaje_variacion: number | null
}

export interface VariacionEmbalses {
  nombre_embalse: string | null
  variacion_ultima_semanapor: number | null
}

export interface IntroEmbalsesProps {
  nombre_cuenca: string
  fecha_modificacion: Date
  weather?: WeatherTypes
  embalse?: Embalses
  cuenca: boolean
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
  pais: string | null
  misma_semana_10añospor: number | null
  cota: number | null
}

export interface WeatherTypes {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  address: string
  timezone: string
  tzoffset: number
  days: Day[]
  stations: Stations
}

export interface Day {
  datetime: string
  datetimeEpoch: number
  tempmax: number
  tempmin: number
  temp: number
  feelslikemax: number
  feelslikemin: number
  feelslike: number
  dew: number
  humidity: number
  precip: number
  precipprob: number
  precipcover: number
  preciptype?: string[]
  snow: number
  snowdepth: number
  windgust: number
  windspeed: number
  winddir: number
  pressure: number
  cloudcover: number
  visibility: number
  solarradiation: number
  solarenergy: number
  uvindex: number
  severerisk: number
  sunrise: string
  sunriseEpoch: number
  sunset: string
  sunsetEpoch: number
  moonphase: number
  conditions: string
  description: string
  icon: string
  stations?: string[]
  source: string
  hours: Hour[]
  tzoffset?: number
}

export interface Hour {
  datetime: string
  datetimeEpoch: number
  temp: number
  feelslike: number
  humidity: number
  dew: number
  precip: number
  precipprob: number
  snow: number
  snowdepth: number
  preciptype?: string[]
  windgust: number
  windspeed: number
  winddir: number
  pressure: number
  visibility: number
  cloudcover: number
  solarradiation: number
  solarenergy: number
  uvindex: number
  severerisk: number
  conditions: string
  icon: string
  stations?: string[]
  source: string
  tzoffset?: number
}

export interface Stations {
  LEMD: Lemd
  D4212: D4212
  LEVS: Levs
  LEGT: Legt
  LETO: Leto
}

export interface Lemd {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}

export interface D4212 {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}

export interface Levs {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}

export interface Legt {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}

export interface Leto {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}
