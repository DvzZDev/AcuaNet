import GetCoordinates from "@/lib/GetCoordinates"
import TableWeather from "./TableWeather"
import GetWeather from "@/lib/GetWeather"

export default async function OpenWeather({ pathname }: { pathname: string }) {
  const data = await GetCoordinates(pathname)
  const { lat, lon } = data as { lat: number; lon: number }

  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  const weatherData = await GetWeather(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=days%2Chours&key=${key}&contentType=json&iconSet=icons2`
  )

  return <TableWeather data={weatherData} />
}
