import Intro from '@/components/cuencas/IntroCuencas'
import Bento from '@/components/cuencas/BentoCuencas'
import { Suspense } from 'react'
import SkeletonCuencas from '@/components/skeletons/SkeletonCuencas'
import MetaTags from '@/components/global/MetaTags'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Cuencas Hidrográficas - AcuaNet',
  description:
    'Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas',
  url: 'https://acuanet.es/cuencas',
  image: 'https://i.imgur.com/Jpt5ENb.png',
}

function page() {
  return (
    <section className="mt-5">
      <MetaTags
        title={metadata.title}
        description={metadata.description}
        url={metadata.url}
        image={metadata.image}
      />
      <Intro title={'Cuencas Hidrográficas'} />
      <Suspense fallback={<SkeletonCuencas />}>
        <Bento />
      </Suspense>
    </section>
  )
}

export default page
