import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'
import SkeeltonBentoEmbalseDist from '@/components/skeletons/SkeeltonBentoEmbalseDist'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export function generateMetadata({ params }) {
  return {
    title: `${params.embalseid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
    openGraph: {
      title: `${params.embalseid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
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
      title: `${params.embalseid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
      creator: '@_DvzZ_',
      images: ['https://i.imgur.com/Jpt5ENb.png'],
    },
  }
}

async function Page({ params }) {
  return (
    <Suspense fallback={<SkeeltonBentoEmbalseDist />}>
      <EmbalseData url={params} />
    </Suspense>
  )
}

export default Page
