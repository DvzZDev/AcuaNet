import { useEffect, useState } from "react"

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    // Función para actualizar el ancho de la pantalla
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    // Establecer el ancho inicial
    updateScreenWidth()

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", updateScreenWidth)

    // Cleanup del listener
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  // Función para calcular el ancho dinámico basado en el ancho exacto de la pantalla
  const getDynamicWidth = () => {
    if (screenWidth === 0) return { width: "22rem" } // Valor por defecto durante SSR

    // Calculamos el ancho del contenedor basado en el ancho de la pantalla
    // Dejamos un margen de 2rem (32px) en cada lado para padding
    const marginTotal = 64 // 32px * 2 (margen izquierdo y derecho)
    const availableWidth = screenWidth - marginTotal

    // Convertir a rem (asumiendo 16px por rem)
    const widthInRem = Math.max(availableWidth / 16, 18) // Mínimo 18rem

    return {
      width: `${widthInRem.toFixed(1)}rem`,
      widthPx: availableWidth,
    }
  }

  // Función alternativa que devuelve el ancho como estilo inline
  const getDynamicStyle = () => {
    if (screenWidth === 0) return { width: "22rem" }

    let marginTotal = 30 // Margen base

    // En desktop, considerar el sidebar
    if (screenWidth >= 1024) {
      // Sidebar típico en desktop (aproximadamente 250-300px)
      marginTotal += 350 // Sidebar + padding adicional
    } else if (screenWidth >= 768) {
      // En tablets, puede haber un sidebar más pequeño
      marginTotal += 100
    }

    const availableWidth = Math.max(screenWidth - marginTotal, 288) // Mínimo 288px (18rem)

    return { width: `${availableWidth}px` }
  }

  return {
    screenWidth,
    getDynamicWidth,
    getDynamicStyle,
  }
}
