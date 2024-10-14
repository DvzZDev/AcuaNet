import data from "./wdata.json"
import { WeatherTypes } from "@/types"
import { getWeatherCode } from "./weatherCode"
// import { WeatherResponse } from "@/types"

export default async function OpenWeather() {
  // const url =
  //   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lozoya?unitGroup=metric&include=days%2Chours&key=P2GXJVW7YDLZD3S85BNAURBFJ&contentType=json&iconSet=icons2"

  const weatherData = data as WeatherTypes
  console.log(weatherData)

  const dateFormater = (date: string) => {
    const inputDate = new Date(date).toDateString()
    const today = new Date().toDateString()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDate = tomorrow.toDateString()

    if (inputDate === today) {
      return "Hoy"
    } else if (inputDate === tomorrowDate) {
      return "Mañana"
    } else {
      return new Date(date).toLocaleDateString("es-ES", {
        weekday: "short",
        month: "short",
        day: "2-digit",
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-4 text-xl">
      <h2 className="mb-2 text-xl">{weatherData.resolvedAddress}</h2>
      <div className="grid w-fit grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {weatherData.days.map((day) => (
          <div
            key={day.datetime}
            className="col-span-1 w-fit items-center justify-center rounded-lg p-4 text-white shadow-sm"
          >
            <h2 className="text-2xl font-semibold">{getWeatherCode(day.icon)}</h2>
            <h2 className="text-xl font-semibold">{dateFormater(day.datetime)}</h2>
            <h3 className="text-base">
              Max Temp: <span className="text-lg font-black">{day.tempmax}°C</span>
            </h3>
            <h4 className="text-base">
              Min Temp: <span className="text-lg font-black">{day.tempmin}°C</span>
            </h4>
            <h5 className="text-base">
              Precipitation: <span className="text-lg font-black">{day.precip}mm</span>
            </h5>
            <h6 className="text-base">
              Wind Speed: <span className="text-lg font-black">{day.windspeed} km/h</span>
            </h6>
            <h6 className="text-base">
              Pressure: <span className="text-lg font-black">{day.pressure} hPa</span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}
