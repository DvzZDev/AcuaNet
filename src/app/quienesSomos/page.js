import Image from 'next/image'
import Intro from '@/components/cuencas/IntroCuencas'
function page() {
  return (
    <>
      <Intro title={'Sobre Nosotros'} />
      <section className="min-h-screen bg-[#070922]">
        <div>
          {/* <Image
            src="/public/yo.png"
            width={70}
            height={70}
            alt="yo"
          /> */}
        </div>
      </section>
    </>
  )
}

export default page
