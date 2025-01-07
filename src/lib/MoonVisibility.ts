export function MoonVisibility({ age }: { age: number }) {
  if (age == null) return 0 // Si no hay edad lunar, devuelve 0%

  // Fórmula para calcular la fracción iluminada
  const illumination = (1 - Math.cos((2 * Math.PI * age) / 29.5)) / 2
  const percentage = Math.round(illumination * 100).toFixed(0)
  // Devuelve el porcentaje de iluminación
  return percentage
}
