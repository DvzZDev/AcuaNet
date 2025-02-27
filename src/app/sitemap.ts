import type { MetadataRoute } from "next"
import Names from "../lib/names.json"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.acuanet.es"

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: baseUrl + "/cuencas",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: baseUrl + "/visor",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: baseUrl + "/quienesSomos",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: baseUrl + "/luna",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]

  const DataNames = Array.isArray(Names) ? Names : []
  const nameRoutes = DataNames.map((name) => ({
    url: `${baseUrl}/embalse/${name.toLowerCase().replace(/ /g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }))

  return [...routes, ...nameRoutes]
}
