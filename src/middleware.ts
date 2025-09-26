import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const isPublicFile = /\.[a-zA-Z0-9]+$/

  // Permitir la página de mantenimiento
  if (url.pathname === "/mantenimiento") {
    return NextResponse.next()
  }

  // Permitir recursos estáticos y favicon
  if (
    url.pathname.startsWith("/_next/") || // JS, CSS, fuentes, etc
    url.pathname.startsWith("/_next/image") || // imágenes optimizadas
    isPublicFile.test(url.pathname) || // cualquier archivo servido desde /public
    url.pathname.startsWith("/api/health") // endpoint de monitoreo
  ) {
    return NextResponse.next()
  }

  // Redirigir el resto a mantenimiento
  url.pathname = "/mantenimiento"
  return NextResponse.redirect(url)
}

// Matcher: aplicamos a todas las rutas
export const config = {
  matcher: "/:path*",
}
