import Intro from '@/components/cuencas/IntroCuencas'
import Form from '@/components/contacto/Form'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Contacto - AcuaNet',
  description: '¿Tienes alguna duda o comentario? Contáctanos y te responderemos en 48h.',
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
