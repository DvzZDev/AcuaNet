import { useEffect, useState } from "react"

export const useScreenWidthWeather = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    updateScreenWidth()
    window.addEventListener("resize", updateScreenWidth)

    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  const getContainerWidth = () => {
    if (screenWidth === 0 || screenWidth >= 768) return undefined

    const paddingTotal = 32 
    const availableWidth = screenWidth - paddingTotal

    return {
      width: `${availableWidth}px`,
    }
  }

  const getContainerStyle = () => {
    if (screenWidth === 0) {
      return {
        width: "100%",
        maxWidth: "22rem",
        padding: "0 1rem",
      }
    }

    const paddingTotal = 32 // 1rem * 2
    const availableWidth = screenWidth - paddingTotal

    return {
      width: `${availableWidth}px`,
      padding: "0 1rem",
    }
  }

  const getPaddingClass = () => "px-4" 

  return {
    screenWidth,
    getContainerWidth,
    getContainerStyle,
    getPaddingClass,
  }
}
