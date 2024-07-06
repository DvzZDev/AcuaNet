import Intro from '@/components/cuencas/IntroCuencas'
import Content from '@/components/about/Content'

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
