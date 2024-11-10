import GetCoordinates from "@/lib/GetCoordinates"
import TableWeather from "./TableWeather"
import GetWeather from "@/lib/GetWeather"

export default async function OpenWeather({ pathname }: { pathname: string }) {
  const data = await GetCoordinates(pathname)
  console.log(data)
  const { lat, lon } = data as { lat: number; lon: number }

  const weatherData = await GetWeather(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=days%2Chours&key=P2GXJVW7YDLZD3S85BNAURBFJ&contentType=json&iconSet=icons2`
  )
  return <TableWeather data={weatherData} />
}
