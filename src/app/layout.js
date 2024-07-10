import './globals.css'
import Footer from '@/components/global/Footer'
import NavBarData from '@/components/global/NavBarData'
import { Providers } from './providers'
import ModalCookies from '@/components/landing/ModalCookies'

export const metadata = {
  title: 'AcuaNet - Monitorización Hidrográfica de España',
  description:
    'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',

  openGraph: {
    url: 'https://acuanet.es',
    siteName: 'AcuaNet',
    type: 'website',
    title: 'AcuaNet - Monitorización Hidrográfica de España',
    description:
      'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
    images: [
      {
        url: 'https://i.imgur.com/Jpt5ENb.png',
        width: 1600,
        height: 630,
        alt: 'AcuaNet - Monitorización Hidrográfica',
      },
    ],
    
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js',
      description: 'The React Framework for the Web',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
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
