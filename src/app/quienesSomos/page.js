import Intro from '@/components/cuencas/IntroCuencas'
import Content from '@/components/about/Content'
import Head from 'next/head'

function Page() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta
          property="og:title"
          content="My page title"
          key="title"
        />
      </Head>
      <section className="mt-5">
        <Intro title="Sobre Nosotros" />
        <Content />
      </section>
    </>
  )
}

export default Page
