import { supabase } from "@/db"
import { Cuencas, España, Embalses, AllData, LiveData, PortugalData, EmbalsesCoords, TABLE_NAMES } from "@/db/schema"

export async function GetCuencas(): Promise<Cuencas[]> {
  const { data, error } = await supabase.from(TABLE_NAMES.CUENCAS).select("*")

  if (error) {
    console.error("Error fetching cuencas:", error)
    throw new Error(`Error fetching cuencas: ${error.message}`)
  }

  return data || []
}

export async function GetEsp(): Promise<España[]> {
  const { data, error } = await supabase.from(TABLE_NAMES.ESPAÑA).select("*")

  if (error) {
    console.error("Error fetching España data:", error)
    throw new Error(`Error fetching España data: ${error.message}`)
  }

  return data || []
}

export async function GetEmbalses(): Promise<Embalses[]> {
  const { data, error } = await supabase.from(TABLE_NAMES.EMBALSES).select("*")

  if (error) {
    console.error("Error fetching embalses:", error)
    throw new Error(`Error fetching embalses: ${error.message}`)
  }

  return data || []
}

export async function GetEmbalseByName(ids: string[]): Promise<AllData[]> {
  const lowerCaseIds = ids.map((id) => id.toLowerCase())

  const { data, error } = await supabase.rpc("get_embalse_by_name_with_row_number", {
    embalse_names: lowerCaseIds,
  })

  if (error) {
    console.error("Error fetching embalse by name:", error)
    throw new Error(`Error fetching embalse by name: ${error.message}`)
  }

  return data || []
}

export async function GetLiveData(emb: string): Promise<LiveData[]> {
  const { data, error } = await supabase
    .from(TABLE_NAMES.LIVE_DATA)
    .select("*")
    .ilike("embalse", emb)
    .order("timestamp", { ascending: false })

  if (error) {
    console.error("Error fetching live data:", error)
    throw new Error(`Error fetching live data: ${error.message}`)
  }

  return data || []
}

export async function GetHistoricalData(emb: string): Promise<AllData[]> {
  const { data, error } = await supabase
    .from(TABLE_NAMES.ALL_DATA)
    .select(
      `
      id,
      embalse,
      cuenca,
      fecha,
      capacidad_total,
      volumen_actual,
      porcentaje
    `
    )
    .ilike("embalse", emb)
    .order("fecha", { ascending: false })

  if (error) {
    console.error("Error fetching historical data:", error)
    throw new Error(`Error fetching historical data: ${error.message}`)
  }

  return data || []
}

export async function GetPortugalData(emb: string): Promise<PortugalData[]> {
  const { data, error } = await supabase.from(TABLE_NAMES.PORTUGAL_DATA).select("*").eq("embalse", emb)

  if (error) {
    console.error("Error fetching Portugal data:", error)
    throw new Error(`Error fetching Portugal data: ${error.message}`)
  }

  return data || []
}

export async function GetManualCoords(emb: string): Promise<EmbalsesCoords[]> {
  const { data, error } = await supabase.from(TABLE_NAMES.EMBALSES_COORDS).select("*").eq("embalse", emb)

  if (error) {
    console.error("Error fetching manual coords:", error)
    throw new Error(`Error fetching manual coords: ${error.message}`)
  }

  return data || []
}
