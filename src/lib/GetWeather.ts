import { WeatherTypes } from "@/types"

export default async function GetWeather(lat: number, lon: number) {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next7days?unitGroup=metric&elements=datetime%2Cname%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Cwindgust%2Cwindspeed%2Cwindspeedmax%2Cwindspeedmean%2Cwindspeedmin%2Cwinddir%2Cpressure%2Cicon%2Csource&include=current%2Cdays%2Chours&key=${key}&options=nonulls&contentType=json&iconSet=icons2
`

  const response = await fetch(url, {
    next: {
      revalidate: 43200, // Cache for 12 hours
    },
  })

  const weatherData: WeatherTypes = await response.json()
  return weatherData
}
