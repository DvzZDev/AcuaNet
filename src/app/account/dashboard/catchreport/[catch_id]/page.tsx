import CatchReportClient from "@/components/dashboard/CatchReport/CatchReportClient"
import { getHistoricalWeather, getUserCatchWhitId } from "@/db/queriesServer/select"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export default async function CatchReport({ params }: { params: { catch_id: string } }) {
  const { catch_id } = params
  const report = await getUserCatchWhitId({ catchId: catch_id })

  if (!report) {
    redirect("/account/dashboard/catchgallery")
  }

  let weatherData = null
  if (report.lat && report.lng && report.fecha) {
    try {
      weatherData = await getHistoricalWeather(report.lat, report.lng, new Date(report.fecha))
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }
  }

  const reportWithWeather = {
    ...report,
    weather: weatherData,
  }

  return (
    <Suspense>
      <CatchReportClient report={reportWithWeather} />
    </Suspense>
  )
}
