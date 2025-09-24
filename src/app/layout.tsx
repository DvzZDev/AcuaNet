import ConditionalLayout from "@/components/global/ConditionalLayout"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import Script from "next/script"
import { Suspense } from "react"
import { Bounce, ToastContainer } from "react-toastify"
import "./globals.css"
import PostHogPageView from "./PostHogPageView"
import { Providers } from "./providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acuanet.es"),
  title: "AcuaNet - Planifica tu jornada de pesca",
  description:
    "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
  keywords: [
    "pesca, pesca de blackbass, herramientas de pesca, pesca de lucio, pesca en embalses, embalses de España, acuanet, pesca depredadores, pesca de lucio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AcuaNet - Planifica tu jornada de pesca",
    description:
      "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
    url: "https://www.acuanet.es",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "AcuaNet - La herramienta definitiva para pescadores",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcuaNet - Planifica tu jornada de pesca",
    description:
      "Descubre los niveles de embalses, pronósticos de clima y más para aprovechar al máximo tus jornadas de pesca en toda España.",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <ConditionalLayout>{children}</ConditionalLayout>
          <Suspense fallback={null}>
            <PostHogPageView />
            <Analytics />
            <SpeedInsights />
          </Suspense>
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
