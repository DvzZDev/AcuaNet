'use client'

import { motion } from 'framer-motion'
import { Button } from '@nextui-org/button'
import { Link } from 'next-view-transitions'

function ContactLanding() {
  return (
    <section className="flex flex-col justify-center bg-bgcolor pb-32">
      <motion.h1
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="text-center font-telmaBlack text-6xl font-black text-textsecondary"
      >
        Contactanos
      </motion.h1>
      <div className="flex justify-center bg-bgcolor pt-10">
        <div className="grid w-[50rem] grid-cols-2 grid-rows-2 gap-5">
          <motion.div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            className="flex h-full flex-col items-center justify-center gap-2 rounded-md bg-slate-800 p-4 text-textprimary"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={30}
                height={30}
                fill="gold"
                viewBox="0 0 106.06 106.06"
              >
                {"{' '}{' '}"}
                <path d="M53.029 106.059c13.586 0 27.172-5.172 37.517-15.519 20.686-20.684 20.684-54.339.002-75.022C80.202 5.173 66.615.001 53.029.001c-13.587 0-27.173 5.17-37.515 15.514-20.687 20.685-20.685 54.343.002 75.031 10.341 10.343 23.927 15.513 37.513 15.513zM21.301 21.3c8.748-8.747 20.237-13.12 31.728-13.12 11.49 0 22.98 4.373 31.729 13.123 17.494 17.492 17.492 45.961-.002 63.453C76.01 93.505 64.52 97.878 53.029 97.88c-11.49 0-22.98-4.373-31.728-13.119a44.932 44.932 0 0 1-5.741-7.033C4.078 60.317 5.993 36.608 21.301 21.3zm30.683 51.73c0-2.482 1.305-4.496 2.912-4.496h24.271c1.606 0 2.91 2.014 2.91 4.496 0 2.481-1.304 4.496-2.91 4.496H54.896c-1.607 0-2.912-2.014-2.912-4.496zM31.74 30.671c0-4.113 3.12-7.451 6.965-7.451 3.846 0 6.966 3.338 6.966 7.451 0 4.117-3.12 7.453-6.966 7.453-3.845 0-6.965-3.336-6.965-7.453zm29.586 0c0-4.113 3.123-7.451 6.97-7.451 3.845 0 6.965 3.338 6.965 7.451 0 4.117-3.12 7.453-6.965 7.453-3.847 0-6.97-3.336-6.97-7.453z" />
                {"{' '}{' '}"}
              </svg>
            </div>
            <span className="p-2 text-center text-2xl">
              ¿Necesitas ayuda con algo? Te ayudamos
            </span>
          </motion.div>
          <motion.div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            className="flex h-full flex-col items-center justify-center gap-2 rounded-md bg-slate-800 p-4 text-textprimary"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={30}
                height={30}
              >
                <path
                  fill="gold"
                  fillRule="evenodd"
                  d="M6.47 5.777c.178-.112.356-.207.53-.288a4.923 4.923 0 0 1 .632-2.235C8.308 2.07 9.638 1 12 1c2.362 0 3.692 1.07 4.368 2.254A4.92 4.92 0 0 1 17 5.488a4.874 4.874 0 0 1 2.3 2.23c.466-.186.928-.488 1.243-.96.254-.38.457-.933.457-1.758a1 1 0 1 1 2 0c0 1.175-.297 2.123-.793 2.867-.64.96-1.531 1.477-2.308 1.764.066.42.101.876.101 1.369v1h2a1 1 0 1 1 0 2h-2v1.52a6.52 6.52 0 0 1-.098.85c.775.287 1.666.805 2.305 1.763.496.744.793 1.692.793 2.867a1 1 0 1 1-2 0c0-.825-.203-1.377-.457-1.758-.303-.454-.741-.75-1.19-.94a8.432 8.432 0 0 1-.448.935C17.845 21.139 15.782 23 12 23s-5.845-1.86-6.905-3.763a8.444 8.444 0 0 1-.447-.934c-.45.188-.888.485-1.19.94-.255.38-.458.932-.458 1.757a1 1 0 1 1-2 0c0-1.175.297-2.123.793-2.867.639-.958 1.53-1.476 2.305-1.763A6.857 6.857 0 0 1 4 15.52V14H2a1 1 0 1 1 0-2h2v-1c0-.493.035-.949.1-1.369-.776-.287-1.668-.805-2.307-1.764C1.297 7.123 1 6.175 1 5a1 1 0 0 1 2 0c0 .825.203 1.377.457 1.758.315.472.777.774 1.244.961A4.874 4.874 0 0 1 6.47 5.777Zm8.162-1.53c.148.26.239.526.293.753h-5.85c.054-.227.145-.494.293-.754C9.692 3.68 10.362 3 12 3c1.638 0 2.308.68 2.632 1.246ZM8.997 7a3.083 3.083 0 0 0-1.467.473C6.843 7.903 6 8.82 6 11v4.474c.065.966.372 1.947.841 2.789.662 1.187 1.855 2.406 4.159 2.68V7H8.997ZM13 7v13.943c2.304-.274 3.497-1.493 4.159-2.68.47-.842.776-1.823.841-2.79V11c0-2.18-.843-3.098-1.53-3.527A3.083 3.083 0 0 0 15.003 7H13Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="p-2 text-center text-2xl">
              ¿Hay algo que no debería estar ahí?
            </span>
          </motion.div>
          <motion.div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-800 p-4 text-textprimary"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                fill="gold"
                viewBox="0 0 48 48"
                width={30}
                height={30}
              >
                <path d="m15.71 14.931-2.387-7.787-8.032-1.868-1.193 1.273.022.019.007-.007.175.161.001.001 5.049 4.642v2.564l-2.822.503-5.099-4.69-.202-.133L.02 10.898l2.464 7.854 7.908 1.899 21.99 22.073 5.453-5.434L16.35 15.724zM6.412 37.29l5.455 5.432 8.216-8.241-5.435-5.453zM47.98 18.694l-3.422-3.483-.989.972-4.086-4.101-.009-.008c-8.008-8.196-16.667-6.601-16.667-6.601l7.66 7.688-6.283 6.302 5.434 5.453 6.283-6.302 2.569 2.58-.975.958 3.421 3.482.999-.981.065.064 5.064-5.045-.031-.03.967-.948z" />
              </svg>
            </div>
            <span className="p-2 text-center text-2xl">
              ¿Tienes alguna sugerencia o comentario?
            </span>
          </motion.div>
          <motion.div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-800 p-4 text-textprimary"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={30}
                height={30}
              >
                <path
                  stroke="gold"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17v-5l2.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <span className="p-2 text-center text-2xl">
              Te respondemos en menos de 48h
            </span>
          </motion.div>
        </div>
      </div>
      <div className="m-auto mt-8">
        <Link href="/contacto">
          <motion.button
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileInView="animate"
            viewport={{ once: true, amount: 0.8, delay: 0.9 }}
            type="button"
            aria-label="Conócenos"
            className="m-auto mt-3 rounded-lg bg-[#091c34] p-3 text-xl font-bold text-[#ffd700] hover:animate-wiggle hover:brightness-90"
          >
            Formulario
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default ContactLanding
