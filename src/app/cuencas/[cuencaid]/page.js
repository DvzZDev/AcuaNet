import Title from '@/components/cuencas/Title'
import Divider from '@/components/cuencas/Divider'
import BentoDist from '@/components/cuencas/BentoDist'
import TableEmbalsesData from '@/components/cuencas/cuenca/tableEmbalsesData'
import SkeletonTitleCuencas from '@/components/skeletons/SkeletonTitleCuenca'
import SkeletonBentoDist from '@/components/skeletons/SkeletonBentoDinst'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export function generateMetadata({ params }) {
  return {
    title: `${params.cuencaid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
    description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
    openGraph: {
      title: `${params.cuencaid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
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
      title: `${params.cuencaid.replace(/%20/g, ' ').charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, ' ').slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
      creator: '@_DvzZ_',
      images: ['https://i.imgur.com/Jpt5ENb.png'],
    },
  }
}

async function Page({ params }) {
  return (
    <>
      <Suspense fallback={<SkeletonTitleCuencas />}>
        <Title url={params} />
      </Suspense>
      <Divider />
      <section className="flex min-h-full flex-col items-center justify-center bg-bgcolor">
        <div className="flex min-h-[42rem] justify-center">
          <Suspense fallback={<SkeletonBentoDist />}>
            <BentoDist url={params} />
          </Suspense>
        </div>
        <div>
          <Suspense
            fallback={
              <div className="mb-14 animate-spin animate-duration-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={70}
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                  ></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12"
                      stroke="#ffd700"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>{' '}
                    <path
                      d="M19.7942 7.5C19.8905 7.66673 19.9813 7.83651 20.0667 8.00907"
                      stroke="#ffd700"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>{' '}
                  </g>
                </svg>
              </div>
            }
          >
            <TableEmbalsesData url={params} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default Page
