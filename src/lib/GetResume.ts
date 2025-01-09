"use client"

import { useCompletion } from "ai/react"
import { useEffect, useState } from "react"

export default function GetResume({ prompt }: { prompt: string }) {
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { completion, complete, error } = useCompletion({
    api: "/api/resume",
  })

  console.log(completion)

  useEffect(() => {
    if (prompt) {
      complete(prompt).catch((err) => {
        if (err instanceof Error) {
          setErrorMessage(err.message)
        } else {
          setErrorMessage("An unknown error occurred")
        }
      })
    }
  }, [complete, prompt])

  return {
    error: !!error || errorMessage !== "",
    errorMessage: error?.message || errorMessage,
    completion,
  }
}
