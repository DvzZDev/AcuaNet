import GetCuencas from "./src/lib/Cuencas.json" assert { type: "json" }
import GetEmbalses from "./src/lib/Embalses.json" assert { type: "json" }

const sitemapConfig = {
  siteUrl: "https://www.acuanet.es/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async () => {
    const DataCuencas = Array.isArray(GetCuencas) ? GetCuencas : []
    const DataEmbalses = Array.isArray(GetEmbalses.embalses) ? GetEmbalses.embalses : []

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
