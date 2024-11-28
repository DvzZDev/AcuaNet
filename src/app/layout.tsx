import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import Navbar from "@/components/global/Navbar"
import PostHogPageView from "./PostHogPageView"
import { Suspense } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head></head>
      <body>
        <Providers>
          <header className="h-[3.6rem]">
            <Navbar />
          </header>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
