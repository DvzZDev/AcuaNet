import Intro from '@/components/cuencas/IntroCuencas'
import Content from '@/components/about/Content'
import Head from 'next/head'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Sobre Nosotros - AcuaNet',
  description:
    'Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España',
  openGraph: {
    title: 'Sobre Nosotros - AcuaNet',
    description:
      'Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España',
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
    title: 'Sobre Nosotros - AcuaNet',
    description:
      'Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España',
    creator: '@_DvzZ_',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
}

function Page() {
  return (
    <>
      <section className="mt-5">
        <Intro title="Sobre Nosotros" />
        <Content />
      </section>
    </>
  )
}

export default Page
