import { useMemo } from "react"

export default function DateDisplay({ datetime }: { datetime: string }) {
  console.log(datetime)
  const formattedDate = useMemo(() => {
    const inputDate = new Date(datetime)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const normalizedInputDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
    const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const normalizedTomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate())

    if (normalizedInputDate.getTime() === normalizedToday.getTime()) {
      return "Hoy"
    } else if (normalizedInputDate.getTime() === normalizedTomorrow.getTime()) {
      return "Mañ"
    } else {
      return inputDate.toLocaleDateString("es-ES", {
        weekday: "short",
      })
    }
  }, [datetime])

  return formattedDate
}
