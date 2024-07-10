import Intro from '@/components/cuencas/IntroCuencas'
import Form from '@/components/contacto/Form'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Contacto - AcuaNet',
  description:
    '¿Tienes alguna duda o comentario, quieres reportar un bug? Contáctanos y te responderemos en 48h.',
  openGraph: {
    title: 'Contacto - AcuaNet',
    description:
      '¿Tienes alguna duda o comentario, quieres reportar un bug? Contáctanos y te responderemos en 48h.',
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
    title: 'Contacto - AcuaNet',
    description:
      '¿Tienes alguna duda o comentario, quieres reportar un bug? Contáctanos y te responderemos en 48h.',
    creator: '@_DvzZ_',
    images: ['https://i.imgur.com/Jpt5ENb.png'],
  },
}

function page() {
  return (
    <>
      <Intro title="Contacto" />
      <section>
        <Form />
      </section>
    </>
  )
}

export default page
