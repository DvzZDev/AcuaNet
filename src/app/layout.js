import './globals.css'
import Footer from '@/components/global/Footer'
import NavBarData from '@/components/global/NavBarData'
import { Providers } from './providers'
import ModalCookies from '@/components/landing/ModalCookies'

export const metadata = {
  title: 'AcuaNet - Monitorización Hidrográfica de España',
  description:
    'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
  url: 'https://acuanet.es',
  image: 'https://i.imgur.com/Jpt5ENb.png',
  card: 'summary_large_image',

  openGraph: {
    card: 'summary_large_image',
    title: 'AcuaNet - Monitorización Hidrográfica de España',
    description:
      'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
    url: 'https://acuanet.es',
    siteName: 'AcuaES',
    images: [
      {
        url: 'https://i.imgur.com/Jpt5ENb.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/Jpt5ENb.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
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
