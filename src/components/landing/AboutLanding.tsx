"use client"
import { Link } from "next-view-transitions"

function AboutLanding() {
  return (
    <section className="max-h-auto bg-[#f1fbf7] py-8 pb-24 md:py-10">
      <div className="flex flex-col items-center justify-center">
        <section className="mx-6 grid h-fit max-w-[70rem] grid-cols-1 gap-10 md:grid-cols-2">
          <div className="col-span-1 flex flex-col">
            <h2 className="text-center text-[2.3rem] font-black leading-none text-[#1b7b6e] sm:text-[50px] md:text-left">
              Detras de AcuaNet
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              ¡Hola! Soy David, el creador de AcuaNet, una página que nació de la necesidad de tener información actualizada sobre
              nuestros embalses favoritos de pesca y poder planificar una jornada de pesca lo mas fácil posible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              Dale al botón y conoce un poco más sobre mi y sobre AcuaNet y si tienes alguna duda, no dudes en contactar conmigo
              por mis redes sociales.
            </p>
            <div className="flex w-full justify-center">
              <Link href="/quienesSomos">
                <button
                  type="button"
                  aria-label="Conócenos"
                  className="animate-infinite m-auto mt-6 rounded-lg bg-[#275e565c] p-3 text-lg font-bold text-[#1f4d46] transition-all hover:animate-wiggle hover:brightness-90 md:text-xl"
                >
                  ¡Conócenos!
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div>
                <img
                  src="/yo22.webp"
                  alt="Foto del creador de AcuaNet"
                  className="rounded-lg shadow-lg"
                  draggable={false}
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="absolute bottom-[-70px] left-4 right-[-15px] z-20 rounded-lg bg-[#275e568a] bg-opacity-80 p-4 shadow-md sm:bottom-[-60px] md:bottom-[-50px]">
                <p className="text-base text-green-50 md:text-xl">Aun no sabes lo que es AcuaNet, ¿a qué esperas?</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutLanding
