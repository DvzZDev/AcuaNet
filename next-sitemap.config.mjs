import Names from "./src/lib/names.json" assert { type: "json" }

const sitemapConfig = {
  siteUrl: "https://www.acuanet.es/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async () => {
    const DataNames = Array.isArray(Names) ? Names : []

    const pathsNames = DataNames.map((name) => ({
      loc: `${sitemapConfig.siteUrl}embalse/${name.toLowerCase().replace(/ /g, "-")}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    return [...pathsNames]
  },
}

export default sitemapConfig
