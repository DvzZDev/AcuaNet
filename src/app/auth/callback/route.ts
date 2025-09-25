import { NextResponse } from "next/server"
import { createSvClient } from "@/db/server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  let next = searchParams.get("next") ?? "/"
  if (!next.startsWith("/")) {
    next = "/"
  }

  if (code) {
    const supabase = await createSvClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host")
      const isLocalEnv = process.env.NODE_ENV === "development"
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}/account/dashboard`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}/account/dashboard`)
      } else {
        return NextResponse.redirect(`${origin}/account/dashboard`)
      }
    } else {
      return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
