import { GetCuencas, GetEmbalses } from "./db/queries/select.js"

const sitemapConfig = {
  siteUrl: "https://www.acuanet.es/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async () => {
    const DataCuencas = await GetCuencas()
    const DataEmbalses = await GetEmbalses()

    const pathsCuencas = DataCuencas.map((cuenca) => ({
      loc: `${sitemapConfig.siteUrl}cuencas/${cuenca.cuenca.replace(/_/g, "-").replace(/ /g, "%20")}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    const pathsEmbalses = DataEmbalses.map((embalse) => ({
      loc: `${sitemapConfig.siteUrl}embalses/${embalse.nombre_embalse.replace(/ /g, "%20").toLowerCase()}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    return [...pathsCuencas, ...pathsEmbalses]
  },
}

export default sitemapConfig
