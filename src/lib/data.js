import { revalidate } from '../components/Bento'

export async function FetchCuencas() {
  const url = 'https://api-acua-production.up.railway.app/api/cuencas'
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
  const url = 'https://api-acua-production.up.railway.app/api/variacion/cuencas'
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
  const url = 'https://api-acua-production.up.railway.app/api/variacion/embalses'
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
  const url = 'https://api-acua-production.up.railway.app/api/esp'
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
  const url = 'https://api-acua-production.up.railway.app/Api/pluvis'
  const response = await fetch(url, {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  return data
}

export async function FetchEmbalses() {
  const url = 'https://api-acua-production.up.railway.app/Api/embalses'
  const response = await fetch(url)
  const data = await response.json()
  return data
}
