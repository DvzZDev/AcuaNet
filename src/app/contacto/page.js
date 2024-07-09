import Intro from '@/components/cuencas/IntroCuencas'
import Form from '@/components/contacto/Form'

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
