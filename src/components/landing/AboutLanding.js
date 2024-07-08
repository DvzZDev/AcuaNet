import { Image } from '@nextui-org/image'
import { Link } from 'next-view-transitions'
import { Button } from '@nextui-org/button'
import NextImage from 'next/image'

function AboutLanding() {
  return (
    <section className="max-h-auto bg-bgcolor pb-20 pt-10 lg:pt-20">
      <div className="flex flex-col items-center justify-center">
        <section className="mx-8 grid h-full max-w-[70rem] grid-cols-1 gap-10 md:grid-cols-2">
          <div className="col-span-1 mt-10 flex flex-col">
            <h1 className="text-center font-telma text-[40px] leading-none text-[#ffd700] sm:text-[50px] md:text-left">
              Conoce a Nuestro Equipo
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-textprimary">
              En AcuaNet, nos esforzamos por brindarte una experiencia intuitiva y
              agradable.
            </p>
            <p className="mt-4 text-xl leading-relaxed text-textprimary">
              Queremos que conozcas a nuestro equipo y descubras cómo trabajamos para
              ofrecerte datos precisos y actualizados sobre los embalses. Haz clic aquí
              para conocer más sobre nosotros y nuestra misión.
            </p>
            <div className="flex w-full justify-center">
              <Link href="/quienesSomos">
                <button className="m-auto mt-6 rounded-lg bg-[#091c34] p-3 text-lg font-bold text-[#ffd700] transition-all animate-infinite hover:animate-wiggle hover:brightness-90">
                  Conócenos!
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/yo22.webp"
                alt="Foto del creador de AcuaNet"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                isBlurred={true}
                draggable={false}
                loading='lazy'
              />
              <div className="absolute bottom-[-70px] left-4 right-[-15px] z-20 rounded-lg bg-[#0a2038] bg-opacity-80 p-4 shadow-md sm:bottom-[-60px] md:bottom-[-50px]">
                <p className="text-base text-white">
                  ¡Hola! Soy David, creador de AcuaNet. Te invito a conocer más sobre qué
                  me inspiró a crear AcuaNet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutLanding
