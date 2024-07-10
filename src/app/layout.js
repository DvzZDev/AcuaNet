import './globals.css'
import Footer from '@/components/global/Footer'
import NavBarData from '@/components/global/NavBarData'
import { Providers } from './providers'
import ModalCookies from '@/components/landing/ModalCookies'

export const metadata = {
  // Campos generales
  title: 'Cuencas Hidrográficas - AcuaNet',
  description:
    'Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas',
  url: 'https://acuanet.es/cuencas',
  image: 'https://i.imgur.com/Jpt5ENb.png',

  // Campos específicos para Twitter
  twitterCard: 'summary_large_image', // Tipo de tarjeta de Twitter
  twitterCreator: '@_DvzZ_', // Usuario de Twitter para créditos de la tarjeta

  // Campos específicos para Open Graph (og)
  ogTitle: 'Cuencas Hidrográficas - AcuaNet',
  ogDescription:
    'Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas',
  ogUrl: 'https://acuanet.es/cuencas',
  ogImage: 'https://i.imgur.com/Jpt5ENb.png',
  ogType: 'website', // Tipo de objeto (website, article, etc.)
  ogLocale: 'es_ES', // Localización
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
