import { AllData, Cuencas, Embalses, EmbalsesCoords, España, LiveData, PortugalData, TABLE_NAMES } from "@/db/schema"
import { createSvClient, withServerClient } from "@/db/server"

export async function GetCuencas(): Promise<Cuencas[]> {
  return withServerClient(async (supabase) => {
    const { data, error } = await supabase.from(TABLE_NAMES.CUENCAS).select("*")

    if (error) {
      console.error("Error fetching cuencas:", error)
      throw new Error(`Error fetching cuencas: ${error.message}`)
    }

    return data || []
  })
}

export async function GetEsp(): Promise<España[]> {
  return withServerClient(async (supabase) => {
    const { data, error } = await supabase.from(TABLE_NAMES.ESPAÑA).select("*")

    if (error) {
      console.error("Error fetching España data:", error)
      throw new Error(`Error fetching España data: ${error.message}`)
    }

    return data || []
  })
}

export async function GetEmbalses(): Promise<Embalses[]> {
  return withServerClient(async (supabase) => {
    const { data, error } = await supabase.from(TABLE_NAMES.EMBALSES).select("*")

    if (error) {
      console.error("Error fetching embalses:", error)
      throw new Error(`Error fetching embalses: ${error.message}`)
    }

    return data || []
  })
}

export async function GetEmbalseByName(ids: string[]): Promise<AllData[]> {
  return withServerClient(async (supabase) => {
    const lowerCaseIds = ids.map((id) => id.toLowerCase())

    const { data, error } = await supabase.rpc("get_embalse_by_name_with_row_number", {
      embalse_names: lowerCaseIds,
    })

    if (error) {
      console.error("Error fetching embalse by name:", error)
      throw new Error(`Error fetching embalse by name: ${error.message}`)
    }

    return data || []
  })
}

export async function GetLiveData(emb: string): Promise<LiveData[]> {
  return withServerClient(async (supabase) => {
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
  })
}

export async function GetHistoricalData(emb: string): Promise<AllData[]> {
  return withServerClient(async (supabase) => {
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
  })
}

export async function GetPortugalData(emb: string): Promise<PortugalData[]> {
  console.log("Fetching Portugal data for embalse:", emb)
  return withServerClient(async (supabase) => {
    const { data, error } = await supabase.from(TABLE_NAMES.PORTUGAL_DATA).select("*").eq("nombre_embalse", emb)

    if (error) {
      console.error("Error fetching Portugal data:", error)
      throw new Error(`Error fetching Portugal data: ${error.message}`)
    }
    console.log("Fetched Portugal data:", data)
    return data || []
  })
}

export async function GetManualCoords(emb: string): Promise<EmbalsesCoords[]> {
  return withServerClient(async (supabase) => {
    const { data, error } = await supabase.from(TABLE_NAMES.EMBALSES_COORDS).select("*").eq("embalse", emb)

    if (error) {
      console.error("Error fetching manual coords:", error)
      throw new Error(`Error fetching manual coords: ${error.message}`)
    }

    return data || []
  })
}

export const getFavSection = async (id: string) => {
  const supabase = await createSvClient()
  try {
    const { data, error } = await supabase.from("favorite_reservoirs").select().eq("user_id", id)

    if (error) {
      throw new Error(error.message)
    }

    const favorites = data[0]?.favorites || []
    const españa = favorites.filter((embalse: { pais: string }) => embalse.pais === "España")
    const portugal = favorites.filter((embalse: { pais: string }) => embalse.pais === "Portugal")

    const nombresPt = portugal.map((embalse: { embalse: string }) => embalse.embalse?.toLowerCase()).filter(Boolean)

    const nombresEs = españa.map((embalse: { embalse: string }) => embalse.embalse)

    const { data: portugalData, error: portugalError } = await supabase
      .from("portugal_data")
      .select()
      .in("nombre_embalse", nombresPt)

    if (portugalError) {
      throw new Error(portugalError.message)
    }

    const { data: españaData, error: españaError } = await supabase.rpc("obtener_ultimo_registro_por_embalse", {
      nombres_embalses: nombresEs,
    })

    if (españaError) {
      throw new Error(españaError.message)
    }

    const normalizedPortugalData = (portugalData || []).map((item: any) => ({
      id: `${item.nombre_embalse}_${item.fecha_modificacion}`,
      embalse: item.nombre_embalse,
      cuenca: item.nombre_cuenca,
      fecha: item.fecha_modificacion?.split("T")[0] || item.fecha_modificacion,
      capacidad_total: item.capacidad_total,
      volumen_actual: item.agua_embalsada,
      porcentaje: item.agua_embalsadapor,
      pais: "Portugal",
    }))

    const normalizedEspañaData = (españaData || []).map((item: any) => ({
      ...item,
      pais: "España",
    }))

    const finalData = [...normalizedEspañaData, ...normalizedPortugalData]

    return finalData
  } catch (error) {
    console.error("Error fetching favorite sections:", error)
    return []
  }
}
