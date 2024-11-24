"use client"
import { Image } from "@nextui-org/image"
import { Link } from "next-view-transitions"

function AboutLanding() {
  return (
    <section className="max-h-auto bg-[#f1fbf7] py-8 pb-24 md:py-10">
      <div className="flex flex-col items-center justify-center">
        <section className="mx-6 grid h-fit max-w-[70rem] grid-cols-1 gap-10 md:grid-cols-2">
          <div className="col-span-1 flex flex-col">
            <h2 className="text-center text-[2.3rem] font-black leading-none text-[#1b7b6e] sm:text-[50px] md:text-left">
              Conoce a Nuestro Equipo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              En AcuaNet, nos esforzamos por brindarte una experiencia intuitiva y agradable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#0a2e29] md:text-2xl">
              Queremos que conozcas a nuestro equipo y descubras cómo trabajamos para ofrecerte datos precisos y actualizados
              sobre los embalses. Haz clic aquí para conocer más sobre nosotros.
            </p>
            <div className="flex w-full justify-center">
              <Link href="/quienesSomos">
                <button
                  type="button"
                  aria-label="Conócenos"
                  className="animate-infinite hover:animate-wiggle m-auto mt-6 rounded-lg bg-[#275e565c] p-3 text-lg font-bold text-[#275e56] transition-all hover:brightness-90 md:text-xl"
                >
                  Conócenos!
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div>
                <Image
                  src="/yo22.webp"
                  alt="Foto del creador de AcuaNet"
                  className="rounded-lg shadow-lg"
                  isBlurred={true}
                  draggable={false}
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="absolute bottom-[-70px] left-4 right-[-15px] z-20 rounded-lg bg-[#275e568a] bg-opacity-80 p-4 shadow-md sm:bottom-[-60px] md:bottom-[-50px]">
                <p className="text-base text-green-50 md:text-xl">
                  ¡Hola! Soy David, creador de AcuaNet. Te invito a conocer más sobre qué me inspiró a crear AcuaNet.
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
