import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/pluviometros/Tabledata'
import SkeletonPluviometros from '@/components/skeletons/SkeletonPluviometros'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Pluviómetros - AcuaNet',
  description:
    'Conoce más sobre los pluviómetros de España y cómo se gestionan los recursos hídricos en cada uno de ellos',
  openGraph: {
    title: 'Pluviómetros - AcuaNet',
    description:
      'Conoce más sobre los pluviómetros de España y cómo se gestionan los recursos hídricos en cada uno de ellos',
    url: 'https://acuanet.es/cuencas',
    siteName: 'AcuaNet',
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
        alt: 'Og image from AcuaNet',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pluviómetros - AcuaNet',
    description:
      'Conoce más sobre los pluviómetros de España y cómo se gestionan los recursos hídricos en cada uno de ellos',
    creator: '@_DvzZ_',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
}

function page() {
  return (
    <section className="mt-5">
      <Intro title={'Pluviómetros'} />
      <section className="flex justify-center bg-bgcolor">
        <Suspense fallback={<SkeletonPluviometros />}>
          <Tabledata />
        </Suspense>
      </section>
    </section>
  )
}

export default page
