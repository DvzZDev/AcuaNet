import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import Navbar from "@/components/global/Navbar"
import PostHogPageView from "./PostHogPageView"
import { Suspense } from "react"
import Snow from "@/components/landing/Snow"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
