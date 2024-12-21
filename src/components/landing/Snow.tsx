"use client"
import { Snowfall } from "react-snowfall"
import { useEffect, useState } from "react"

export default function Snow() {
  const [snowflakeCount, setSnowflakeCount] = useState(50)

  useEffect(() => {
    const handleResize = () => {
      setSnowflakeCount(window.innerWidth <= 768 ? 20 : 80)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
      snowflakeCount={snowflakeCount}
    />
  )
}
