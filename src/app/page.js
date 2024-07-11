// app/page.js

import Intro from '@/components/landing/Intro'
import Bento from '@/components/landing/Bento'
import Fuentes from '@/components/landing/Fuentes'
import SkeletonBento from '@/components/skeletons/BentoSkeleton'
import AboutLanding from '@/components/landing/AboutLanding'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'AcuaNet - Monitorización Hidrográfica de España',
  description:
    'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
  openGraph: {
    title: 'AcuaNet - Monitorización Hidrográfica de España',
    description:
      'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
    url: 'https://acuanet.es',
    siteName: 'AcuaNet',
    images: [
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
  twitter: {
    card: 'summary_large_image',
    title: 'AcuaNet - Monitorización Hidrográfica de España',
    description:
      'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
}

export default function Home() {
  return (
    <>
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <Bento />
      </Suspense>
      <Fuentes />
      <AboutLanding />
    </>
  )
}
