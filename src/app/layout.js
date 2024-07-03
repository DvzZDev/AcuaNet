import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import { ViewTransitions } from 'next-view-transitions'
import NavBarData from '@/components/global/NavBarData'
import { Suspense } from 'react'

export const metadata = {
  title: 'AcuaEs',
  description: 'En AcuaEs nos importa el agua y el medio ambiente',
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body>
          <Suspense>
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
