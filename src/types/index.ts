export interface UserData {
  avatar_url: string
  custom_claims: Record<string, any>
  email: string
  email_verified: boolean
  full_name: string
  iss: string
  lastName: string
  name: string
  phone_verified: boolean
  picture: string
  provider_id: string
  sub: string
}


export interface CatchReportDB {
  catch_id: string
  user_id: string
  embalse: string
  fecha: string
  especie: string
  peso: number | null
  video?: string | null
  profundidad: string | null
  situacion: string | null
  tecnica_depredadores: string | null
  tecnica_carpfishing: string | null
  temperatura: number | null
  comentarios: string | null
  imagenes: string[]
  created_at: string
  emb_data?: EmbalseDataHistorical
  lat?: number
  lng?: number
  weather?: WeatherData
  estacion?: string
  epoca?: string
}

export interface EmbalseDataHistorical {
  capacidad_total: number
  cuenca: string
  embalse: string
  fecha: string
  id: string
  porcentaje: number
  volumen_actual: number
}


export interface WeatherData {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  alerts?: any[]
  address: string
  timezone: string
  tzoffset: number
  days: Day[]
  currentConditions: CurrentConditions
}

export interface CurrentConditions {
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
  preciptype: string[] | null
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
  conditions: Conditions
  icon: Icon
  source: Source
  sunrise?: string
  sunset?: string
  moonphase?: number
}

export enum Conditions {
  Clear = "Clear",
  Overcast = "Overcast",
  PartiallyCloudy = "Partially cloudy",
}

export enum Icon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
}


export enum Source {
  Fcst = "fcst",
  Stats = "stats",
}

export interface Day {
  datetime: Date
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
  preciptype: string[] | null
  snow: number | null
  snowdepth: number
  windgust: number
  windspeed: number
  winddir: number
  pressure: number
  cloudcover: number
  visibility: number
  solarradiation: number | null
  solarenergy: number | null
  uvindex: number | null
  severerisk?: number
  windspeedmax: number
  windspeedmean: number
  windspeedmin: number
  sunrise: string
  sunset: string
  moonphase: number
  conditions: Conditions
  description: string
  icon: Icon
  source: Source
  normal: { [key: string]: number[] }
  hours?: CurrentConditions[]
}