import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'
import SkeeltonBentoEmbalseDist from '@/components/skeletons/SkeeltonBentoEmbalseDist'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export function generateMetadata({ params }) {
  return {
    title: `${params.embalseid.charAt(0).toUpperCase()}${params.embalseid.slice(1)} - AcuaNet`,
    description: `Consulta las mediciones hidrográficas del embalse de ${params.embalseid}`,
    openGraph: {
      title: `${params.embalseid.charAt(0).toUpperCase()}${params.embalseid.slice(1)} - AcuaNet`,
      description: `Consulta las mediciones hidrográficas del embalse de ${params.embalseid}`,
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
      title: `${params.embalseid.charAt(0).toUpperCase()}${params.embalseid.slice(1)} - AcuaNet`,
      description: `Consulta las mediciones hidrográficas del embalse de ${params.embalseid}`,
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
