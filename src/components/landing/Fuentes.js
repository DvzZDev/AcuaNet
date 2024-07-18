'use client'
import CardFuentes from './CardFuentes'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { motion } from 'framer-motion'

function CustomDot({ onClick, ...rest }) {
  const { active } = rest

  const activeStyle = 'h-2 w-2 bg-[#FFD700] rounded-full'
  const inactiveStyle = 'h-2 w-2 bg-gray-400 rounded-full'

  return (
    <li>
      <button
        type="button"
        aria-label="Dot"
        onClick={onClick}
        style={{
          display: 'inline-block',
          margin: '0 8px',
        }}
      >
        <div className={`${active ? activeStyle : inactiveStyle}  `}></div>
      </button>
    </li>
  )
}

function Fuentes() {
  const delays = [1, 1.2, 1.3, 1.4]
  const cardData = [
    { image: '/aemet.webp', title: 'Agencia Estatal de Meteorología' },
    {
      image: '/miteco.webp',
      title: 'Ministerio para la Transición Ecológica y el Reto Demográfico',
    },
    { image: '/sahi.webp', title: 'Sistema Automático de Información Hidrológica' },
    { image: '/embalsesnet.webp', title: 'Embalses.net' },
  ]

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = (delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { delay } },
  })

  const responsive = {
    superLargeDesktop: {
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
      className="h-auto bg-bgcolor"
    >
      <article className="flex flex-col items-center justify-center">
        <motion.h1
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          className="pt-1 text-center font-NecoBold text-[40px] text-[#ffd700] sm:pt-20 sm:text-[50px]"
        >
          Fuentes Oficiales
        </motion.h1>

        <motion.div
          initial="initial"
          variants={{
            initial: { width: 0, borderColor: '#ffd700' },
            animate: {
              width: '100%',
              borderColor: '#1a1c4d',
              transition: { duration: 0.8, delay: 0.5 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-5 flex w-full justify-center border-y border-[hsl(237,50%,20%)] py-6 text-3xl text-textprimary sm:py-10"
        >
          <motion.h1
            initial="initial"
            variants={{
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 1 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            className="mx-3 text-center"
          >
            Datos Actualizados Cada
            <strong className="ml-2 content-center text-[#ffd700]">6 horas</strong>
          </motion.h1>
        </motion.div>
      </article>

      <motion.div
        className="m-auto mt-10 sm:w-[35rem] md:w-[40rem] lg:w-[60rem] xl:w-[80rem]"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
      >
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
          {cardData.map((card, index) => (
            <motion.div
              key={card.title}
              className="flex justify-center mb-4"
              variants={childVariants(0.5)}
              viewport={{ once: true }}
            >
              <CardFuentes
                image={card.image}
                title={card.title}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  )
}

export default Fuentes
