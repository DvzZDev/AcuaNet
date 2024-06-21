import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ViewTransitions } from 'next-view-transitions'

export const metadata = {
  title: 'AcuaEs',
  description: 'En AcuaEs nos importa el agua y el medio ambiente',
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  )
}
