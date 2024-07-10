import Intro from '@/components/cuencas/IntroCuencas'
import Bento from '@/components/cuencas/BentoCuencas'
import { Suspense } from 'react'
import SkeletonCuencas from '@/components/skeletons/SkeletonCuencas'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Cuencas Hidrográficas - AcuaNet',
  description:
    'Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas',
  url: 'https://acuanet.es/cuencas',
  image: 'https://i.imgur.com/Jpt5ENb.png',
  twitterCreator: '@_DvzZ_',
  
  openGraph: {
    title: 'Cuencas Hidrográficas - AcuaNet',
    description:
      'Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas',
    url: 'https://acuanet.es/cuencas',
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

function page() {
  return (
    <section className="mt-5">
      <Intro title={'Cuencas Hidrográficas'} />
      <Suspense fallback={<SkeletonCuencas />}>
        <Bento />
      </Suspense>
    </section>
  )
}

export default page
