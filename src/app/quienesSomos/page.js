import Image from 'next/image'
import Intro from '@/components/cuencas/IntroCuencas'
function page() {
  return (
    <>
      <Intro title={'Sobre Nosotros'} />
      <section className="min-h-screen bg-[#070922]">
        <div className='relative w-[25rem] h-[20rem]'>
          <Image
            src="/yo.png"
            layout='fill'
            alt="yo"
            unoptimized 
          />
        </div>
      </section>
    </>
  )
}

export default page
