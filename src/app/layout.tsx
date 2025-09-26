"use client" // Necesario para usar hooks

import Footer from "@/components/global/Footer"
import Navbar from "@/components/global/Navbar"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { Suspense } from "react"
import { Bounce, ToastContainer } from "react-toastify"
import "./globals.css"
import PostHogPageView from "./PostHogPageView"
import { Providers } from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMantenimiento = pathname === "/mantenimiento"

  return (
    <html
      lang="es"
      className="scroll-smooth"
    >
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
        <meta charSet="utf-8" />
      </head>
      <body>
        <Providers>
          {!isMantenimiento && <Navbar />}
          <Suspense fallback={null}>
            <PostHogPageView />
            <Analytics />
            <SpeedInsights />
          </Suspense>
          <main className={isMantenimiento ? "h-svh" : "pt-[4rem]"}>{children}</main>
          {!isMantenimiento && <Footer />}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Providers>
      </body>
    </html>
  )
}
