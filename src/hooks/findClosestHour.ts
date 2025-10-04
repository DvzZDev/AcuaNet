import { WeatherData } from "../types"

/**
 * Finds the weather data for the closest hour to a given timestamp
 *
 * @param weatherData - Weather data object containing hours data
 * @param timestamp - The timestamp to find the closest hour for (Date object or ISO string)
 * @returns The weather hour data object that is closest to the given timestamp, or null if no data available
 */
export function findClosestHour(weatherData: WeatherData, timestamp: Date | string): any {
  // Return null if no weather data or days/hours data is available
  if (!weatherData || !weatherData.days || !weatherData.days[0]?.hours?.length) {
    return null
  }

  // Convert timestamp to Date if it's a string
  const targetDate = timestamp instanceof Date ? timestamp : new Date(timestamp)

  // Get the hours and minutes from the target date
  const targetHour = targetDate.getHours()
  const targetMinutes = targetDate.getMinutes()

  // Convert target time to minutes for easier comparison
  const targetTotalMinutes = targetHour * 60 + targetMinutes

  let closestHourData = null
  let minTimeDifference = Infinity

  // Loop through all hours in the weather data
  weatherData.days[0].hours.forEach((hourData) => {
    if (!hourData.datetime) return

    // Parse the hour from datetime (format: "HH:MM:SS")
    const [hour, minute] = hourData.datetime.split(":").map(Number)

    // Convert hour data time to minutes
    const hourTotalMinutes = hour * 60 + minute

    // Calculate difference in minutes, accounting for day wraparound
    let diffMinutes = Math.abs(targetTotalMinutes - hourTotalMinutes)
    // Handle day wraparound (e.g., comparing 23:00 with 01:00)
    diffMinutes = Math.min(diffMinutes, 1440 - diffMinutes)

    // Update closest hour if this one is closer
    if (diffMinutes < minTimeDifference) {
      minTimeDifference = diffMinutes
      closestHourData = hourData
    }
  })

  return closestHourData
}
