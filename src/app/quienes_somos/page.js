import Section from '@/components/about/section'
import Intro from '@/components/cuencas/IntroCuencas'
import Image from 'next/image'

function page() {
  return (
    <>
      <Intro title={'Sobre Nosotros'} />
      <section className="min-h-screen bg-[#070922]">
        <Section />
      </section>
    </>
  )
}

export default page
