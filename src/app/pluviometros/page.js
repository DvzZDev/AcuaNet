import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/pluviometros/Tabledata'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <>
      <Intro title={'Pluviómetros'} />
      <section className="flex justify-center bg-bgcolor">
        <Tabledata />
      </section>
    </>
  )
}

export default page
