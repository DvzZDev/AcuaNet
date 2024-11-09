import { WeatherTypes } from "@/types"

export default async function GetWeather(url: string) {
  const response = await fetch(url)
  const weatherData: WeatherTypes = await response.json()
  return weatherData
}
