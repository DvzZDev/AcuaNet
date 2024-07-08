import CardAb from '@/components/about/CardAb'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

function Content() {
  return (
    <section className="bg-bgcolor p-6 pb-20">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <article className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <Image
            as={NextImage}
            src="/orellana.webp"
            alt="Embalse de Orellana en Badajoz, España"
            width={1200}
            height={1200}
            draggable={false}
            isBlurred={true}
          />

          <div className="text-white">
            <h2 className="mb-6 text-3xl font-bold text-textsecondary md:text-4xl">
              ¿Quiénes Somos?
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textprimary md:text-lg">
              En AcuaNet, nos enfocamos en hacer tu experiencia sencilla y agradable.
              Utilizamos métodos avanzados para brindarte datos actualizados sobre los
              niveles de los embalses, garantizando información precisa al instante.
              Nuestra interfaz amigable te permite encontrar lo que necesitas de manera
              rápida y sin complicaciones.
            </p>
            <p className="text-base leading-relaxed text-textprimary md:text-lg">
              Sabemos que gestionar datos de fuentes desactualizadas y sitios web
              complejos puede resultar complicado. Por eso, trabajamos duro para que la
              información que te damos sea clara y fácil de entender.
            </p>
          </div>
        </article>

        <article className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div className="flex my-1 h-full w-full items-center overflow-visible rounded-lg sm:hidden">
            <Image
              as={NextImage}
              src="/embalse.webp"
              alt="Embalse de Orellana en Badajoz, España"
              width={1140}
              height={1140}
              draggable={false}
              isBlurred={true}
            />
          </div>
          <div className="text-white">
            <h2 className="mb-6 text-3xl font-bold text-textsecondary md:text-4xl">
              Nuestro Propósito
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textprimary md:text-lg">
              Recuerdo lo frustrante que era antes de salir a pescar, cuando tenía que
              buscar el nivel del embalse en sitios web complicados y difíciles de usar.
              Esa frustración me inspiró a crear AcuaNet.
            </p>
            <p className="text-base leading-relaxed text-textprimary md:text-lg">
              Como estudiante de desarrollo web, decidí poner en práctica lo que he
              aprendido para desarrollar una plataforma que sea fácil y eficiente. Mi
              objetivo es que todos puedan acceder rápidamente a la información de los
              embalses sin complicaciones.
            </p>
          </div>

          <Image
            as={NextImage}
            src="/embalse.webp"
            alt="Embalse de Orellana en Badajoz, España"
            width={1200}
            height={1200}
            draggable={false}
            isBlurred={true}
            className="hidden sm:block"
          />
        </article>
      </div>

      <article className="mt-14 flex flex-col items-center">
        <h1 className="mb-10 text-center text-3xl font-bold text-textsecondary md:text-4xl">
          Conoce a Nuestro Equipo
        </h1>
        <CardAb />
      </article>
    </section>
  )
}

export default Content
