export async function FetchCuencas() {
  const url = 'https://api-acua-production.up.railway.app/api/cuencas'
  const response = await fetch(url)
  const data = await response.json()
  return data
}
