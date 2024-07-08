import './globals.css'
import Footer from '@/components/global/Footer'
import { ViewTransitions } from 'next-view-transitions'
import NavBarData from '@/components/global/NavBarData'
import { CSPostHogProvider } from './providers'

export const metadata = {
  title: 'AcuaNet',
  description:
    'AcuaNet es una plataforma que te permite conocer el estado de los embalses, pluviómetros y cuencas hidrográficas de España con datos actualizados',
}

export default function RootLayout({ children }) {
  return (
    <CSPostHogProvider>
      <ViewTransitions>
        <html lang="es">
          <body>
            <header className="h-[3.6rem]">
              <NavBarData />
            </header>
            {children}
            <Footer />
          </body>
        </html>
      </ViewTransitions>
    </CSPostHogProvider>
  )
}
