const apikey = process.env.API_KEY
export async function FetchCuencas() {
  const url = process.env.CUENCAS
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}

export async function FetchCuencaVariacion() {
  const url = process.env.VARIACION_CUENCA
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}

export async function FetchEmbalsesVariacion() {
  const url = process.env.VARIACION_EMBALSES
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}

export async function FetchEsp() {
  const url = process.env.ESP
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}
export async function FetchPluvis() {
  const url = process.env.PLUVIOMETROS
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}

export async function FetchEmbalses() {
  const url = process.env.EMBALSES
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}

export async function FetchPluvisGlob() {
  const url = process.env.PLUVIOMETROSGLOB
  const response = await fetch(url, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "x-api-key": apikey,
    },
  })
  const data = await response.json()
  return data
}
