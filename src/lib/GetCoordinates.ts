export default async function GetCoordinates(loc: string) {
  try {
    const url = `https://nominatim.openstreetmap.org/search.php?q=embalse de ${loc}&format=jsonv2&countrycodes=ES`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (data.length === 0) {
      return { name: null, lat: null, lon: null }
    }
    const result = {
      name: data[0].display_name,
      lat: Number(data[0].lat),
      lon: Number(data[0].lon),
    }
    return result
  } catch (error) {
    console.error("Error recuperando las coordenadas", error)
    return { name: null, lat: null, lon: null }
  }
}
