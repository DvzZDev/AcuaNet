import { WeatherTypes } from "@/types"

export default async function GetWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  if (!key) {
    console.error("Weather API key not found")
    throw new Error("Weather API key not configured")
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next7days?unitGroup=metric&elements=datetime%2Cname%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Cwindgust%2Cwindspeed%2Cwindspeedmax%2Cwindspeedmean%2Cwindspeedmin%2Cwinddir%2Cpressure%2Cicon%2Csource&include=current%2Cdays%2Chours&key=${key}&options=nonulls&contentType=json&iconSet=icons2
`

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "AcuaNet/1.0",
      },
    })

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status} ${response.statusText}`)
    }

    const weatherData: WeatherTypes = await response.json()

    if (!weatherData || !weatherData.days) {
      throw new Error("Invalid weather data received")
    }

    return weatherData
  } catch (error) {
    console.error("Error fetching weather data:", error)
    throw error
  }
}
