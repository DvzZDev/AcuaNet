import Image from 'next/image'
import CardFuentes from './CardFuentes'

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="min-h-svh w-full bg-[#070922]"
    >
      <article className="flex flex-col items-center justify-center pt-24">
        <div>
          <Image
            src="/Logo.svg"
            alt="Fuentes"
            width={120}
            height={150}
          />
        </div>
        <h1 className="font-telma pt-1 text-[70px] text-[#e9ead6]">AcuaEs</h1>

        <div className="mt-2 flex w-full justify-center border-y border-[hsl(237,50%,20%)] p-10 text-2xl text-[#e9ead6]">
          <h1>Datos de fuentes</h1>{' '}
          <strong className="ml-2 content-center">Oficiales</strong>
        </div>
      </article>

      <div className="m-auto mt-20 grid w-[70%] grid-cols-1 content-center items-center justify-center gap-7 md:grid-cols-2 lg:w-[80%] xl:grid-cols-4">
        <div className="m-auto">
          <CardFuentes
            image="/aemet.png"
            title="Agencia Estatal de Meteorología"
          />
        </div>
        <div className="m-auto">
          <CardFuentes
            image="/miteco.png"
            title="Ministerio para la Transición Ecológica y el Reto Demográfico"
          />
        </div>
        <div className="m-auto">
          <CardFuentes
            image="/sahi.png"
            title="Sistema Automático de Información Hidrológica"
          />
        </div>
        <div className="m-auto">
          <CardFuentes
            image="/embalsesnet.png"
            title="Embalses.net"
          />
        </div>
      </div>
    </section>
  )
}

export default Fuentes
