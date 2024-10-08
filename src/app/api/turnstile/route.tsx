import { NextResponse } from "next/server"

interface PostData {
  turnstileToken: string
}

export async function POST(request: Request) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  const postData: PostData = await request.json()
  const { turnstileToken } = postData

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey!,
        response: turnstileToken,
      }),
    })

    if (!res.ok) {
      throw new Error(`La solicitud de Turnstile falló con estado: ${res.status}`)
    }

    const data = await res.json()
    console.log("Respuesta de Turnstile:", data)

    // Verificar si la verificación de Turnstile fue exitosa
    if (!data.success) {
      return NextResponse.json(
        { error: "La verificación de Turnstile falló" },
        { status: 400 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error en la verificación de Turnstile:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
