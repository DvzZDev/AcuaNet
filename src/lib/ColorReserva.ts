export function colorReserva(porcentaje: number) {
  if (porcentaje >= 80) {
    return "text-blue-500"
  } else if (porcentaje >= 60) {
    return "text-green-500"
  } else if (porcentaje >= 40) {
    return "text-yellow-500"
  } else if (porcentaje >= 20) {
    return "text-red-550"
  }
}
