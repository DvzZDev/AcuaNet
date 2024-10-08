import "./globals.css"
import Footer from "@/components/global/Footer"
import NavBarData from "@/components/global/NavBarData"
import { Providers } from "./providers"
import ModalCookies from "@/components/landing/ModalCookies"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <header className="h-[3.6rem]">
            <NavBarData />
          </header>
          {children}
          <ModalCookies />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
