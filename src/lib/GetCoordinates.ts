// Objeto para almacenar los resultados en caché
const cache: { [key: string]: { name: string; lat: string; lon: string } } = {}

export default async function GetCoordinates(loc: string) {
  try {
    // Verificar si la ubicación ya está en la caché
    if (cache[loc]) {
      console.log("Usando caché para:", loc)
      return cache[loc]
    }

    const url = `https://nominatim.openstreetmap.org/search.php?q=embalse de ${loc}&format=jsonv2&countrycodes=ES`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const result = {
      name: data[0].display_name,
      lat: data[0].lat,
      lon: data[0].lon,
    }

    // Almacenar el resultado en la caché
    cache[loc] = result

    return result
  } catch (error) {
    console.error("Error recuperando las coordenadas", error)
  }
}
