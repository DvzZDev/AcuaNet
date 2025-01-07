import { useMemo } from "react"

export default function DateDisplay({ datetime }: { datetime: string }) {
  console.log(datetime)

  const formattedDate = useMemo(() => {
    const inputDate = new Date(datetime)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    today.setHours(0, 0, 0, 0)
    tomorrow.setHours(0, 0, 0, 0)
    inputDate.setHours(0, 0, 0, 0)

    if (inputDate.getTime() === today.getTime()) {
      return "Hoy"
    } else if (inputDate.getTime() === tomorrow.getTime()) {
      return "Mañ"
    } else {
      return inputDate.toLocaleDateString("es-ES", {
        weekday: "short",
      })
    }
  }, [datetime])

  return formattedDate
}
