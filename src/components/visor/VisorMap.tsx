"use client"

import { useEffect } from "react"

export default function VisorMap() {
  useEffect(() => {
    const cssLinks = [
      "https://componentes.cnig.es/api-core/assets/css/apiign.ol.min.css",
      "https://componentes.cnig.es/api-core/plugins/locator/locator.ol.min.css",
      "https://componentes.cnig.es/api-core/plugins/viewmanagement/viewmanagement.ol.min.css",
      // "https://componentes.cnig.es/api-core/plugins/layerswitcher/layerswitcher.ol.min.css",
      "https://componentes.cnig.es/api-core/plugins/measurebar/measurebar.ol.min.css",
    ]
    cssLinks.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = href
      document.head.appendChild(link)
    })

    // Load scripts in order
    const scriptsQueue = [
      "https://componentes.cnig.es/api-core/vendor/browser-polyfill.js",
      "https://componentes.cnig.es/api-core/js/apiign.ol.min.js",
      "https://componentes.cnig.es/api-core/js/configuration.js",
      "https://componentes.cnig.es/api-core/plugins/locator/locator.ol.min.js",
      "https://componentes.cnig.es/api-core/plugins/viewmanagement/viewmanagement.ol.min.js",
      "https://componentes.cnig.es/api-core/plugins/mousesrs/mousesrs.ol.min.js",
      "https://componentes.cnig.es/api-core/plugins/layerswitcher/layerswitcher.ol.min.js",
      "https://componentes.cnig.es/api-core/plugins/measurebar/measurebar.ol.min.js",
    ]

    function loadNext(index = 0) {
      if (index >= scriptsQueue.length) {
        handleScriptsLoad()
        return
      }
      const script = document.createElement("script")
      script.src = scriptsQueue[index]
      script.onload = () => loadNext(index + 1)
      document.body.appendChild(script)
    }

    function handleScriptsLoad() {
      if (typeof (window as any).M !== "undefined") {
        const { M } = window as any
        const mapjs = M.map({
          container: "mapjs",
          controls: ["backgroundlayers"],
          zoom: 6,
          maxZoom: 20,
          minZoom: 4,
          center: [-467062.8225, 4983459.6216],
        })

        mapjs.addPlugin(new M.plugin.Locator({ collapsed: true, collapsible: true, position: "TR" }))
        mapjs.addPlugin(new M.plugin.ViewManagement())
        mapjs.addPlugin(
          new M.plugin.MouseSRS({
            srs: "EPSG:4326",
            label: "EPSG:4326",
            precision: 6,
            geoDecimalDigits: 4,
            utmDecimalDigits: 2,
          })
        )
        mapjs.addPlugin(new M.plugin.Layerswitcher({ collapsed: true, collapsible: true, position: "TR" }))
        mapjs.addPlugin(new M.plugin.MeasureBar({ collapsed: true, collapsible: true, position: "TR" }))
      }
    }

    loadNext()
  }, [])
  return (
    <div
      id="mapjs"
      className="relative h-full w-full lg:pr-4"
    ></div>
  )
}
