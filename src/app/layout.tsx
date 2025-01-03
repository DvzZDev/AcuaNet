import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import Navbar from "@/components/global/Navbar"
import PostHogPageView from "./PostHogPageView"
import { Suspense } from "react"
import Snow from "@/components/landing/Snow"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <head>
          <head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: "AcuaNet",
                  url: "https://acuanet.es",
                  description:
                    "AcuaNet es una web dedicada a los pescadores donde pueden visualizar fácilmente el nivel de los embalses y cuencas, tablas lunares y pronóstico del tiempo, todo en uno para facilitar sus jornadas de pesca.",
                  foundingDate: "2024-06",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://acuanet.es/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  keywords:
                    "pesca, nivel de los embalses, agrbaits, pesca deportiva, jornadas de pesca, planificacion jornadas de pesca, embalses, cuencas, tablas lunares, nivel cuencas españa, acuanet, acuanet.es",
                }),
              }}
            ></script>
          </head>
        </head>
      </head>
      <body>
        <Providers>
          <Snow />
          <header className="h-[3.6rem]">
            <Navbar />
          </header>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
