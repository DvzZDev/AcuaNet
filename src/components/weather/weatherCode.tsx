export function getWeatherCode(icon: string): string {
  const weatherMap: { [key: string]: string } = {
    snow: "❄️",
    "snow-showers-day": "🌨️",
    "snow-showers-night": "🌨️",
    "thunder-rain": "⛈️",
    "thunder-showers-day": "🌩️",
    "thunder-showers-night": "🌩️",
    rain: "🌧️",
    "showers-day": "🌦️",
    "showers-night": "🌧️",
    fog: "🌫️",
    wind: "💨",
    cloudy: "☁️",
    "partly-cloudy-day": "🌤️",
    "partly-cloudy-night": "🌥️",
    "clear-day": "☀️",
    "clear-night": "🌙",
  }

  return weatherMap[icon] || "❓"
}
