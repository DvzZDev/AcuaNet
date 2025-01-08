import { WeatherTypes } from "@/types"

export default async function GetWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=days%2Chours&key=${key}&contentType=json&iconSet=icons2`

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Cprecip%2Cprecipprob%2Cwindspeed%2Cwindspeedmax%2Cwindspeedmin%2Cwinddir%2Cpressure%2Cicon&include=days%2Chours&key=${key}&options=nonulls&contentType=json`

  const response = await fetch(url, {
    next: {
      revalidate: 43200, // Cache for 12 hours
    },
  })

  const weatherData: WeatherTypes = await response.json()
  return weatherData
}
