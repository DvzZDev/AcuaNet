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
  siteName: 'AcuaNet',
  locale: 'es_ES',
  type: 'website',
  images: [
    {
      url: 'https://i.imgur.com/Jpt5ENb.png',
      width: 1200,
      height: 630,
      alt: 'AcuaNet - Monitorización Hidrográfica de España',
    },
  ],
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
