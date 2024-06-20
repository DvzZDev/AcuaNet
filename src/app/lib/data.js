export async function FetchCuencas() {
  const url = 'https://api-acua-production.up.railway.app/api/cuencas'
  const response = await fetch(url + '?t=' + Date.now(), {
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
  const response = await fetch(url + '?t=' + Date.now(), {
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
  const response = await fetch(url + '?t=' + Date.now(), {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  })
  const data = await response.json()
  return data
}
