import { WeatherTypes } from "@/types"

export default async function GetWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=days%2Chours&key=${key}&contentType=json&iconSet=icons2`
  const response = await fetch(url)
  const weatherData: WeatherTypes = await response.json()
  return weatherData
}
