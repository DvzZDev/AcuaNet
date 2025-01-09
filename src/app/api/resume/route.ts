import { NextRequest } from "next/server"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { streamText } from "ai"
import CacheClient from "@/cache"
import hashText from "@/lib/HashText"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_APIKEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
})

await CacheClient.connect()

async function savedCache({ token, data }: { token: string; data: string }) {
  try {
    await CacheClient.set(token, data, { EX: 3600 })
    console.log("Cache save")
  } catch (error) {
    console.error(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    if (request.body) {
      const requestBody = await request.json()
      const hashedPrompt = hashText(requestBody.prompt).toString()
      const cacheQuery = await CacheClient.get(hashedPrompt)

      if (cacheQuery !== null && cacheQuery !== undefined) {
        console.log("Cache hit")
        return new Response(cacheQuery, { status: 200 })
      } else {
        const result = await streamText({
          model: google("gemini-1.5-flash"),
          prompt: requestBody.prompt,
          temperature: 0.4,
          maxTokens: 150,
        }).toDataStreamResponse()

        const resultClone = result.clone()

        const response = new Response(result.body, {
          headers: { "Content-Type": "application/json" },
        })

        resultClone
          .text()
          .then(async (awaitedResult) => {
            await savedCache({ token: hashedPrompt, data: awaitedResult })
          })
          .catch((error) => {
            console.error("Error saving to cache:", error)
          })

        console.log("Cache miss")
        return response
      }
    }
  } catch (error) {
    console.error(error)
    return new Response("An error occurred", { status: 500 })
  }
}
