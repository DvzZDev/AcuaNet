import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import { ViewTransitions } from 'next-view-transitions'
import NavBarData from '@/components/global/NavBarData'
import { Suspense } from 'react'

export const metadata = {
  title: 'AcuaNet',
  description:
    'AcuaNet es una plataforma que te permite conocer el estado de los embalses, pluviómetros y cuencas hidrográficas de España con datos actualizados',
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body>
          <Suspense fallback={<></>}>
            <header className="h-[3.6rem]">
              <NavBarData />
            </header>
          </Suspense>
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  )
}
