export default async function GetCoordinates(loc: string) {
  try {
    const url = `https://nominatim.openstreetmap.org/search.php?q=embalse de ${encodeURIComponent(loc)}&format=jsonv2&countrycodes=ES`
    const response = await fetch(url, {
      headers: {
        "User-Agent": "AcuaNet/2.0 (estebandavid578@gmail.com)",
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (data.length === 0) {
      return { name: null, lat: null, lon: null }
    }
    return {
      name: data[0].display_name,
      lat: Number(data[0].lat),
      lon: Number(data[0].lon),
    }
  } catch (error) {
    console.error("Error recuperando las coordenadas", error)
    return { name: null, lat: null, lon: null }
  }
}
