export function getWeatherCode(icon: string): string {
  const weatherMap: { [key: string]: string } = {
    snow: "❄️", // Nieve
    "snow-showers-day": "🌨️", // Chubascos de nieve de día
    "snow-showers-night": "🌨️", // Chubascos de nieve de noche
    "thunder-rain": "⛈️", // Tormenta con lluvia
    "thunder-showers-day": "🌩️", // Tormenta de día
    "thunder-showers-night": "🌩️", // Tormenta de noche
    rain: "🌧️", // Lluvia
    "showers-day": "🌦️", // Chubascos de día
    "showers-night": "🌧️", // Chubascos de noche
    fog: "🌫️", // Niebla
    wind: "💨", // Viento
    cloudy: "☁️", // Nublado
    "partly-cloudy-day": "🌤️", // Parcialmente nublado de día
    "partly-cloudy-night": "🌥️", // Parcialmente nublado de noche
    "clear-day": "☀️", // Despejado de día
    "clear-night": "🌙", // Despejado de noche
  }

  return weatherMap[icon] || "❓"
}
