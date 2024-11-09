export default function dateFormater(date: string) {
  const inputDate = new Date(date).toDateString()
  const today = new Date().toDateString()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowDate = tomorrow.toDateString()

  if (inputDate === today) {
    return "Hoy"
  } else if (inputDate === tomorrowDate) {
    return "Mañ"
  } else {
    return new Date(date).toLocaleDateString("es-ES", {
      weekday: "short",
    })
  }
}
