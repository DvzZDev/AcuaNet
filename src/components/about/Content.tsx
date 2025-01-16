"use client"
import CardAb from "@/components/about/CardAb"

function Content() {
  return (
    <section className="bg-green-50 p-6 pb-20">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <article className="mx-auto grid w-full max-w-[80rem] grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div className="h-full w-full">
            <img
              src="/atazar.webp"
              alt="Embalse del Atazar en Madrid, España"
              className="h-full w-full rounded-lg object-cover shadow-lg"
              draggable={false}
            />
          </div>

          <div className="text-white">
            <h2 className="mb-3 text-3xl font-bold text-[#1b7b6e] md:mb-5 md:text-5xl">¿Que es AcuaNet?</h2>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-lg">
              AcuaNet es una plataforma web para pescadores, recopilamos datos públicos de embalses y cuencas hidrográficas de
              España y Portugal, filtramos la información y la presentamos de manera sencilla y clara para que puedas planificar
              tus jornadas de pesca desde un mismo sitio.
            </p>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-lg">
              Te ofrecemos una gran variedad de herramientas, desde mapas interactivos hasta tablas interactivas donde podrás ver
              el pronóstico del tiempo con todos los datos relevantes para la pesca.
            </p>
            <p className="text-base leading-relaxed text-[#0a2e29] md:text-lg">
              Un agradecimiento especial a AGR Baits por su apoyo y patrocinio, que han sido clave en el desarrollo de AcuaNet.
            </p>
          </div>
        </article>

        <article className="grid w-full max-w-[80rem] grid-cols-1 items-center gap-8 sm:grid-cols-2 md:gap-12">
          <div className="my-1 flex h-full w-full items-center overflow-visible rounded-lg sm:hidden">
            <img
              src="/yo3.webp"
              alt="Embalse de Orellana en Badajoz, España"
              width={600}
              height={400}
              draggable={false}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="h-fit text-white">
            <h2 className="mb-3 text-3xl font-bold text-[#1b7b6e] md:mb-5 md:text-5xl">¿Quién soy Yo?</h2>
            <p className="mb-3 text-base leading-relaxed text-[#0a2e29] md:text-lg">
              Soy David, un programador web y pescador en mis ratos libres. He desarrollado AcuaNet con la intención de ayudar a
              todos los pescadores de la península. Esta plataforma ha llevado más de 200 horas de trabajo duro y dedicación.
            </p>

            <p className="text-base leading-relaxed text-[#0a2e29] md:text-lg">
              Si queréis contribuir a que AcuaNet siga creciendo y mejorando, podéis hacer una pequeña donación desde el botón
              abajo. No importa la cantidad, todo suma a la hora de mantener la web y añadir nuevas funcionalidades. Queremos
              seguir implementando nuevas herramientas y mejoras para que tu experiencia en AcuaNet sea la mejor posible.
            </p>

            <a
              className="mt-2 block w-fit rounded-xl bg-emerald-900 p-3 text-base font-black text-white md:mt-5 md:text-lg"
              href="https://buymeacoffee.com/dvzz"
              target="blank"
            >
              Apoya a AcuaNet
            </a>
          </div>
          <div className="hidden h-full w-full items-center overflow-visible rounded-lg sm:flex">
            <img
              src="/yo3.webp"
              alt="Embalse de Orellana en Badajoz, España"
              draggable={false}
              className="hidden aspect-auto h-full w-full rounded-lg object-cover shadow-lg sm:block"
            />
          </div>
        </article>
      </div>

      <article className="mt-14 flex flex-col items-center">
        <h1 className="mb-10 text-left text-3xl font-bold text-[#1b7b6e] md:mb-5 md:text-5xl">Equipo AcuaNet</h1>
        <div>
          <CardAb />
        </div>
      </article>
    </section>
  )
}

export default Content
