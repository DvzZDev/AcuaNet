
import { GoogleGenerativeAI } from "@google/generative-ai"
import { getMoonPhasesForWeekAsRow } from "./GetMoonPhaseWeek"

export default async function GetAi(weather: any, embalse: any) {
  if (!weather) {
    throw new Error("Input is undefined")
  }
  const moonPhases = getMoonPhasesForWeekAsRow()
  const apiKey = process.env.GEMINI_APIKEY
  const prompt = `
    Eres la IA de Acuanet, especializada en pesca. Genera un resumen del pronóstico del tiempo para la próxima semana, destacando las mejores condiciones para pescar, especialmente el fin de semana. Responde en un máximo de 3 líneas, resaltando lo más relevante.

    Pronóstico del tiempo:
    ${weather}

    Nivel de los embalses, lo que no sea porcentaje es hm3: 
    ${embalse}

    Fases de la luna para la semana y actividad de pesca:
    ${moonPhases}
  `

  if (!apiKey) {
    throw new Error("GEMINI_APIKEY is not defined")
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
      temperature: 0.4,
    },
  })
  console.log("loading...")
  console.log(result.response.text())

  return result.response.text()
}
