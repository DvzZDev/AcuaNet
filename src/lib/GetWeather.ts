import { WeatherTypes } from "@/types"

export default async function GetWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next7days?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Cwindgust%2Cwindspeed%2Cwindspeedmax%2Cwindspeedmean%2Cwindspeedmin%2Cwinddir%2Cpressure%2Cconditions%2Cdescription%2Cicon&include=hours%2Cdays%2Cfcst%2Cstatsfcst&key=${key}&contentType=json&iconSet=icons2`

  const response = await fetch(url, {
    next: {
      revalidate: 43200, // Cache for 12 hours
    },
  })

  const weatherData: WeatherTypes = await response.json()
  return weatherData
}
