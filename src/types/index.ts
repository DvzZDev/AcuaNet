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

export interface WeatherTypes {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  address: string
  timezone: string
  tzoffset: number
  days: Day[]
}

export interface IntroEmbalsesProps {
  nombre_cuenca: string
  fecha_modificacion: Date
  weather?: WeatherTypes | null
  embalse?: Embalses[]
  cuenca: boolean
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

export interface Embalses {
  fecha: Date | null
  embalse: string
  cuenca: string | null
  volumen_actual: number | null
  porcentaje: number | null
  variacion_ultima_semana?: number | null
  variacion_ultima_semanapor?: number | null
  capacidad_total: number | null
  lat?: number | null
  lon?: number | null
  pais?: string | null
  cota?: number | null
  cota_date?: Date | null
}

export interface LiveData {
  id: string
  embalse: string
  volumen: number | null
  porcentaje: number | null
  timestamp: Date | null
  cota: number | null
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

// types/revenuecat.ts

export type SubscriptionType = "free" | "pro" | "lifetime"

export interface RevenueCatResponse {
  request_date: string
  request_date_ms: number
  subscriber: RevenueCatSubscriber
}

export interface RevenueCatSubscriber {
  entitlements: Record<string, RevenueCatEntitlement>
  first_seen: string
  last_seen: string
  management_url: string | null
  non_subscriptions: Record<string, unknown>
  original_app_user_id: string
  original_application_version: string | null
  original_purchase_date: string | null
  other_purchases: Record<string, unknown>
  subscriber_attributes: Record<string, RevenueCatSubscriberAttribute>
  subscriptions: Record<string, RevenueCatSubscription>
}

export interface RevenueCatEntitlement {
  expires_date: string | null
  grace_period_expires_date: string | null
  product_identifier: string
  purchase_date: string
}

export interface RevenueCatSubscriberAttribute {
  updated_at_ms: number
  value: string | null
}

export interface RevenueCatSubscription {
  auto_resume_date: string | null
  billing_issues_detected_at: string | null
  display_name: string
  expires_date: string
  grace_period_expires_date: string | null
  is_sandbox: boolean
  management_url: string | null
  original_purchase_date: string
  ownership_type: "PURCHASED" | "FAMILY_SHARED" | "UNKNOWN"
  period_type: "normal" | "trial" | "intro"
  price: {
    amount: number
    currency: string
  }
  purchase_date: string
  refunded_at: string | null
  store: "app_store" | "play_store" | "stripe" | "promotional" | "mac_app_store"
  store_transaction_id: string
  unsubscribe_detected_at: string | null
}
