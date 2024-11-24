"use client"
import CardAb from "@/components/about/CardAb"
import { Image } from "@nextui-org/image"
import NextImage from "next/image"

function Content() {
  return (
    <section className="bg-green-50 p-6 pb-20">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <article className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div>
            <Image
              as={NextImage}
              src="/atazar.webp"
              alt="Embalse del Atazar en Madrid, España"
              width={600}
              height={400}
              draggable={false}
              isBlurred={true}
            />
          </div>

          <div className="text-white">
            <h2 className="mb-3 text-3xl font-bold text-[#1b7b6e] md:text-4xl">¿Que es AcuaNet?</h2>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-xl">
              AcuaNet es una página web que esta enfocada en ofrecerte la ultima información hidrográfica y meteorológica de tus
              embalses favoritos en España.
            </p>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-xl">
              Nos encargamos de recopilar información y entregártela de la manera más sencilla y clara posible, para que puedas
              disfrutar de tus actividades acuáticas favoritas.
            </p>
            <p className="text-base leading-relaxed text-[#0a2e29] md:text-xl">
              Quiero agradecer a AGR Baits tu marca de pesca de confianza por colaborar en este proyecto y patrocinar la página.
            </p>
          </div>
        </article>

        <article className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div className="my-1 flex h-full w-full items-center overflow-visible rounded-lg sm:hidden">
            <Image
              as={NextImage}
              src="/embalse.webp"
              alt="Embalse de Orellana en Badajoz, España"
              objectFit="cover"
              width={600}
              height={400}
              draggable={false}
              isBlurred={true}
            />
          </div>
          <div className="text-white">
            <h2 className="mb-3 text-3xl font-bold text-[#1b7b6e] md:text-4xl">¿Donde queremos llegar?</h2>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-xl">
              Mi proposito como programador de AcuaNet es darte la mejor experiencia posible al momento de planificar tus jornadas
              de pesca, sin anuncios molestos y con una interfaz amigable.
            </p>

            <p className="text-base leading-relaxed text-[#0a2e29] md:text-xl">
              Si ves en esta página algo que no te gusta o crees que se puede mejorar, no dudes en contactarme a través de mis
              redes sociales en la parte inferior de la página.
            </p>
          </div>
          <div className="hidden h-full w-full items-center overflow-visible rounded-lg sm:flex">
            <Image
              as={NextImage}
              src="/embalse.webp"
              alt="Embalse de Orellana en Badajoz, España"
              draggable={false}
              isBlurred={true}
              className="hidden sm:block"
              objectFit="cover"
              width={600}
              height={400}
            />
          </div>
        </article>
      </div>

      <article className="mt-14 flex flex-col items-center">
        <h1 className="mb-10 text-center text-3xl font-bold text-[#1b7b6e] md:text-4xl">Conoce a Nuestro Equipo</h1>
        <div>
          <CardAb />
        </div>
      </article>
    </section>
  )
}

export default Content
