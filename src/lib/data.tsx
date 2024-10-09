const apikey = process.env.API_KEY

async function fetchWithHeaders(url: string): Promise<unknown> {
  if (!url) {
    throw new Error("URL is required")
  }

  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey!,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`)
  }

  const data = await response.json()
  return data
}

export async function FetchCuencas(): Promise<unknown> {
  const url = process.env.CUENCAS
  if (!url) throw new Error("CUENCAS URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchCuencaVariacion(): Promise<unknown> {
  const url = process.env.VARIACION_CUENCA
  if (!url) throw new Error("VARIACION_CUENCA URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchEmbalsesVariacion(): Promise<unknown> {
  const url = process.env.VARIACION_EMBALSES
  if (!url) throw new Error("VARIACION_EMBALSES URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchEsp(): Promise<unknown> {
  const url = process.env.ESP
  if (!url) throw new Error("ESP URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchPluvis(): Promise<unknown> {
  const url = process.env.PLUVIOMETROS
  if (!url) throw new Error("PLUVIOMETROS URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchEmbalses(): Promise<unknown> {
  const url = process.env.EMBALSES
  if (!url) throw new Error("EMBALSES URL is not defined")
  return fetchWithHeaders(url)
}

export async function FetchPluvisGlob(): Promise<unknown> {
  const url = process.env.PLUVIOMETROSGLOB
  if (!url) throw new Error("PLUVIOMETROSGLOB URL is not defined")
  return fetchWithHeaders(url)
}
