import './globals.css'
import Footer from '@/components/global/Footer'
import NavBarData from '@/components/global/NavBarData'
import { Providers } from './providers'
import ModalCookies from '@/components/landing/ModalCookies'

export const metadata = {
  title: 'AcuaNet',
  description:
    'AcuaNet es una plataforma que te permite conocer el estado de los embalses, pluviómetros y cuencas hidrográficas de España con datos actualizados',
}

export default function RootLayout({ children }) {
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
