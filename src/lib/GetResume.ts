"use client"

import { useState, useEffect } from "react"

interface ResumeResponse {
  loading: boolean
  error: string | null
  data: any
}

export default function useGetResume(prompt: string | null): ResumeResponse {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchResume = async () => {
      console.log("Fetching resume with prompt:", prompt)
      if (prompt === undefined) {
        setLoading(false)
        return setData("")
      }
      try {
        const response = await fetch("/api/resume", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        })

        if (!response.ok) {
          throw new Error("Error fetching data")
        }

        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
        console.log("Fetch complete, loading set to false")
      }
    }

    fetchResume()
  }, [prompt])

  return { loading, error, data }
}
