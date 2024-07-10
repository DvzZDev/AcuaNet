import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/embalses/TableData'
import { Suspense } from 'react'
import SkeletonTableEmbalse from '@/components/skeletons/SkeletonTableEmbalse'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Embalses de España - AcuaNet',
  openGraph: {
    title: 'Embalses de España - AcuaNet',
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
        alt: 'Og image from AcuaNet',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embalses de España - AcuaNet',
    creator: '@_DvzZ_',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
}

function page() {
  return (
    <section className="mt-5">
      <Intro title={'Embalses'} />
      <section className="bg-bgcolor">
        <Suspense fallback={<SkeletonTableEmbalse />}>
          <Tabledata />
        </Suspense>
      </section>
    </section>
  )
}

export default page
