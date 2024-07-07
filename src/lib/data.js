export async function FetchCuencas() {
  const url = process.env.REACT_APP_CUENCAS
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  const data = await response.json()
  return data
}

export async function FetchCuencaVariacion() {
  const url = process.env.REACT_APP_VARIACION_CUENCA
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  const data = await response.json()
  return data
}

export async function FetchEmbalsesVariacion() {
  const url = process.env.REACT_APP_VARIACION_EMBALSES
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  const data = await response.json()
  return data
}

export async function FetchEsp() {
  const url = process.env.REACT_APP_ESP
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  const data = await response.json()
  return data
}
export async function FetchPluvis() {
  const url = process.env.REACT_APP_PLUVIOMETROS
  const response = await fetch(url, {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  return data
}

export async function FetchEmbalses() {
  const url = process.env.REACT_APP_EMBALSES
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export async function FetchPluvisGlob() {
  const url = process.env.REACT_APP_PLUVIOMETROSGLOB
  const response = await fetch(url)
  const data = await response.json()
  return data
}
