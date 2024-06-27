'use client'
import Image from 'next/image'
import CardFuentes from './CardFuentes'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function CustomDot({ onClick, ...rest }) {
  const { active } = rest

  const activeStyle = 'h-2 w-2 bg-[#FFD700] rounded-full'
  const inactiveStyle = 'h-2 w-2 bg-gray-400 rounded-full'

  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-block',
        margin: '0 8px',
      }}
    >
      <div className={`${active ? activeStyle : inactiveStyle} `}></div>
    </button>
  )
}

function Fuentes() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1294, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
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
            width={70}
            height={70}
          />
        </div>
        <h1 className="pt-1 font-telma text-[80px] text-[#ffd700]">AcuaEs</h1>

        <div className="mt-2 flex w-full justify-center border-y border-[hsl(237,50%,20%)] py-10 text-2xl text-textprimary">
          <h1>Datos de fuentes</h1>{' '}
          <strong className="ml-2 content-center text-[#ffd700]">Oficiales</strong>
        </div>
      </article>

      <div className="m-auto mt-10 sm:w-[35rem] md:w-[40rem] lg:w-[60rem] xl:w-[80rem]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          arrows={false}
          ssr={true}
          customDot={<CustomDot />}
        >
          <div className="flex justify-center">
            <CardFuentes
              image="/aemet.png"
              title="Agencia Estatal de Meteorología"
            />
          </div>
          <div className="flex justify-center">
            <CardFuentes
              image="/miteco.png"
              title="Ministerio para la Transición Ecológica y el Reto Demográfico"
            />
          </div>
          <div className="flex justify-center">
            <CardFuentes
              image="/sahi.png"
              title="Sistema Automático de Información Hidrológica"
            />
          </div>
          <div className="flex h-full items-center justify-center">
            <CardFuentes
              image="/embalsesnet.png"
              title="Embalses.net"
            />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Fuentes
