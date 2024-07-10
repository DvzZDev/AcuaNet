import Intro from '@/components/landing/Intro'
import Bento from '@/components/landing/Bento'
import Fuentes from '@/components/landing/Fuentes'
import SkeletonBento from '@/components/skeletons/BentoSkeleton'
import AboutLanding from '@/components/landing/AboutLanding'
import { Suspense } from 'react'
import MetaTags from '@/components/global/MetaTags'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'AcuaNet - Monitorización Hidrográfica de España',
  description:
    'Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. En AcuaNet, te ofrecemos datos precisos y actualizados cada seis horas para una gestión eficiente de los recursos hídricos.',
  url: 'https://acuanet.es/cuencas',
  image: 'https://i.imgur.com/Jpt5ENb.png',
}

export default function Home() {
  return (
    <>
      <MetaTags
        title={metadata.title}
        description={metadata.description}
        url={metadata.url}
        image={metadata.image}
      />
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <Bento />
      </Suspense>
      <Fuentes />
      <AboutLanding />
    </>
  )
}
