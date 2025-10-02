const ESPECIES_PESCA = [
  { name: "Black Bass", image: "/fishes/bass.png" },
  { name: "Lucio", image: "/fishes/lucio.png" },
  { name: "Lucio Perca", image: "/fishes/lucioperca.png" },
  { name: "Perca", image: "/fishes/perca.png" },
  { name: "Carpa", image: "/fishes/carpa.png" },
  { name: "Barbo", image: "/fishes/barbo.png" },
  { name: "Siluro", image: "/fishes/siluro.png" },
]

/**
 * Devuelve la imagen correspondiente al nombre de la especie de pesca
 * @param nombreEspecie - El nombre de la especie de pesca
 * @returns La imagen de la especie o null si no se encuentra
 */
export function getFishImage(nombreEspecie: string) {
  const especie = ESPECIES_PESCA.find((pez) => pez.name.toLowerCase() === nombreEspecie.toLowerCase())

  return especie ? especie.image : null
}

/**
 * Devuelve todas las especies de pesca disponibles
 * @returns Array con todas las especies de pesca
 */
export function getAllFishSpecies() {
  return ESPECIES_PESCA
}

/**
 * Devuelve solo los nombres de las especies de pesca
 * @returns Array con los nombres de las especies
 */
export function getFishSpeciesNames() {
  return ESPECIES_PESCA.map((especie) => especie.name)
}
