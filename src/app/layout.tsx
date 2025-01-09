import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import Navbar from "@/components/global/Navbar"
import PostHogPageView from "./PostHogPageView"
import { Suspense } from "react"
import Snow from "@/components/landing/Snow"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <head>
          <head>
            <Script
              id="structured-data"
              strategy="beforeInteractive"
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
            />
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
            <Analytics />
            <SpeedInsights />
          </Suspense>
          {children}
          <a
            href="https://buymeacoffee.com/dvzz"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-20 flex items-center justify-center rounded-full bg-green-300/50 p-2 text-xs backdrop-blur-md transition-all hover:scale-105 md:text-base"
          >
            <span className="text-base md:text-xl">🎣</span>
            <p className="font-black">Regalame un Señuelo</p>
          </a>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
