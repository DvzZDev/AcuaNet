import Image from 'next/image'
import CardAb from '@/components/about/CardAb'

function Content() {
  return (
    <section className="bg-[#070922] p-6 pb-20">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <article className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div className="relative flex h-40 w-full items-center overflow-hidden rounded-lg bg-slate-500 sm:h-72 md:h-96">
            <Image
              src="/orellana.webp"
              alt="Equipo de AcuaNet en acción"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
          <div className="text-white">
            <h2 className="mb-6 text-2xl font-bold text-textsecondary md:text-4xl">
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
          <div className="relative flex h-40 w-full items-center overflow-hidden rounded-lg bg-slate-500 sm:hidden">
            <Image
              src="/embalse.webp"
              alt="Embalse"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
          <div className="text-white">
            <h2 className="mb-6 text-2xl font-bold text-textsecondary md:text-4xl">
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
          <div className="relative hidden h-72 w-full items-center overflow-hidden rounded-lg bg-slate-500 sm:flex sm:h-80 md:h-96">
            <Image
              src="/embalse.webp"
              alt="Embalse"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        </article>
      </div>

      <article className="mt-14 flex flex-col items-center">
        <h1 className="mb-10 text-center text-2xl font-bold text-textsecondary md:text-4xl">
          Conoce a Nuestro Equipo
        </h1>
        <CardAb />
      </article>
    </section>
  )
}

export default Content
