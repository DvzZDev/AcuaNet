export function ColorCuencas(porcentaje: number) {
  if (porcentaje >= 80) {
    return "bg-blue-200 text-blue-900 font-bold text-[18px]"
  } else if (porcentaje >= 60) {
    return "bg-green-200 text-green-900 font-bold text-[18px]"
  } else if (porcentaje >= 40) {
    return "bg-yellow-200 text-yellow-900 font-bold text-[18px]"
  } else if (porcentaje >= 20) {
    return "bg-orange-200 text-orange-950 font-bold text-[18px]"
  } else {
    return "bg-red-200 text-red-900 font-bold text-[18px]"
  }
}
