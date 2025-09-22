import { type NextRequest } from "next/server"
import { updateSession } from "@/db/middlewareSB"

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ["/account/:path*"],
}
