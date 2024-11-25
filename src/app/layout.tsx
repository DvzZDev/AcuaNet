import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import Navbar from "@/components/global/Navbar"
import PostHogPageView from "./ClientOnlyPHProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head></head>
      <body>
        <Providers>
          <header className="h-[3.6rem]">
            <Navbar />
          </header>
          <PostHogPageView />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
