import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

// Definir tipos para la solicitud
interface RequestBody {
  prompt: string
}

const cache: Map<string, any> = new Map() // Caché en memoria (para producción, usar Redis u otro)

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_APIKEY
  const body: RequestBody = await request.json()
  const prompt = body.prompt
  // Verificar si el prompt ya está en caché
  if (cache.has(prompt)) {
    console.log("From cache")
    return NextResponse.json({ text: cache.get(prompt) }, { status: 200 })
  }

  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_APIKEY is not defined" }, { status: 401 })
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  try {
    console.log("Not from cache")
    const modelRes = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 150, temperature: 0.1 },
    })

    const responseText = modelRes.response.text()

    // Almacenar la respuesta en caché
    cache.set(prompt, responseText)

    return NextResponse.json({ text: responseText }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error generating content" }, { status: 500 })
  }
}
