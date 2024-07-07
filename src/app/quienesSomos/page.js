import Intro from '@/components/cuencas/IntroCuencas'
import Content from '@/components/about/Content'
import Head from 'next/head'

export const metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España',
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
