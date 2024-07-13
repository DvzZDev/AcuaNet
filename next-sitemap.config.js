const sitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async () => {
    const urlCuencas = process.env.CUENCAS
    const urlEmbalses = process.env.EMBALSES
    const apikey = process.env.API_KEY

    // Obtener nombres de cuencas
    const cuencasResponse = await fetch(urlCuencas, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'x-api-key': apikey,
      },
    }).then((res) => res.json())

    // Generar rutas para cuencas
    const pathsCuencas = cuencasResponse.map((cuenca) => ({
      loc: `${sitemapConfig.siteUrl}cuencas/${cuenca.cuenca.replace(/_/g, '-').replace(/ /g, '%20')}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    // Obtener nombres de embalses
    const embalsesResponse = await fetch(urlEmbalses, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'x-api-key': apikey,
      },
    }).then((res) => res.json())

    // Generar rutas para embalses
    const pathsEmbalses = embalsesResponse.map((embalse) => ({
      loc: `${sitemapConfig.siteUrl}embalses/${embalse.nombre_embalse.replace(/ /g, '%20').toLowerCase()}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    return [...pathsCuencas, ...pathsEmbalses]
  },
}

export default sitemapConfig
