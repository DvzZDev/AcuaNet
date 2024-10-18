import "./globals.css"
import Footer from "@/components/global/Footer"
import { Providers } from "./providers"
import ModalCookies from "@/components/landing/ModalCookies"
import Navbar from "@/components/global/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <link
        rel="icon"
        href="favicon.ico"
      />
      <body>
        <Providers>
          <header className="h-[3.6rem]">
            <Navbar />
          </header>
          {children}
          <ModalCookies />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
