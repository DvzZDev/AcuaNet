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
              alt="Embalse de Orellana en Badajoz, España"
              width={600}
              height={400}
              draggable={false}
              isBlurred={true}
            />
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-3xl font-bold text-[#1b7b6e] md:text-4xl">
              ¿Quiénes Somos?
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              En AcuaNet, queremos que disfrutes al máximo tu pasión por la pesca. Te
              ofrecemos datos actualizados de los embalses y del tiempo, para que siempre
              estés bien informado. Nuestra plataforma está diseñada para que encuentres
              lo que necesitas de manera rápida y sencilla.
            </p>
            <p className="text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              Nos encargamos de hacerte la vida más fácil, evitando páginas confusas y
              complicadas. Aquí, la información es clara y está al alcance de tu mano.
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
            <h2 className="mb-6 text-3xl font-bold text-[#1b7b6e] md:text-4xl">
              Nuestro Propósito
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              Recuerdo lo frustrante que era prepararme para pescar, buscando el nivel del
              embalse y el clima en páginas llenas de anuncios y con información poco
              clara. Esa frustración se acabó con AcuaNet.
            </p>

            <p className="text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              Quiero que todos tengan acceso a esta información de la manera más sencilla
              posible. Un agradecimiento especial a AGR Baits por patrocinar esta página y
              respaldar nuestra misión.
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
        <h1 className="mb-10 text-center text-3xl font-bold text-[#1b7b6e] md:text-4xl">
          Conoce a Nuestro Equipo
        </h1>
        <div>
          <CardAb />
        </div>
      </article>
    </section>
  )
}

export default Content
