export function getWeatherCode(icon: string): string {
  const weatherMap: { [key: string]: string } = {
    snow: "/weather/nieve.png",
    "snow-showers-day": "/weather/nevadaintensa.png",
    "snow-showers-night": "/weather/nevadaintensa.png",
    "thunder-rain": "/weather/tormenta.png",
    "thunder-showers-day": "/weather/tormenta.png",
    "thunder-showers-night": "/weather/tormenta.png",
    rain: "/weather/lluvia.png",
    "showers-day": "/weather/tormenta.png",
    "showers-night": "/weather/lluviaintensa.png",
    fog: "/weather/niebla.png",
    wind: "/weather/viento.png",
    cloudy: "/weather/nublado.png",
    "partly-cloudy-day": "/weather/sol-nubes.png",
    "partly-cloudy-night": "/weather/nubladonoche.png",
    "clear-day": "/weather/soleadop.png",
    "clear-night": "/weather/nochedespejada.png",
  }

  return weatherMap[icon]
}
