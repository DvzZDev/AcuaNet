"use client"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"

function Faq() {
  return (
    <section className="flex flex-col items-center justify-center bg-bgcolor pb-32">
      <motion.h3
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="px-3 pt-1 text-center font-NecoBold text-[30px] text-[#ffd700] sm:text-[50px]"
      >
        Preguntas Frecuentes
      </motion.h3>
      <motion.div
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="w-full max-w-[70rem] px-4"
      >
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 2"
            title="¿Qué servicios ofrece AcuaNet?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              AcuaNet ofrece servicios de monitorización hidrográfica, proporcionando
              datos actualizados sobre embalses, cuencas y pluviometros en España.
            </h1>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 1"
            title="¿Con qué frecuencia se actualizan los datos hidrográficos?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              Todos los datos mostrados en la pagina web, tanto Cuencas, Embalses y
              Pluviometros reciben nuevos datos cada 6h del SHAI (Sistema Automático de
              Información Hidrológica)
            </h1>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 1"
            title="¿De dónde provienen los datos sobre los embalses y pluviometros?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              Todos los datos de Acuanet provienen de fuentes oficiales, las puedes ver en
              el partado de fuentes.
            </h1>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 1"
            title="¿Cómo puedo contactar con AcuaNet para sugerencias o comentarios?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              Puedes ponerte en contacto con nosotros a través del formulario en la
              seccion de contacto. Tardaremos 48 horas en responderte como máximo.
            </h1>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 1"
            title="¿Es posible acceder a datos históricos de los embalses y pluviometros?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              Actualmente solo podemos ofrecer los datos de la última semana y como estaba
              la cuenca o embalse hace un año. Seguimos trabajando poder traer un servicio
              mas completo en el futuro.
            </h1>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 1"
            title="¿Qué medidas de seguridad se toman para proteger mis datos personales?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              AcuaNet implementa medidas técnicas y organizativas para garantizar la
              seguridad de los datos personales, incluyendo el uso de cifrado SSL y
              servidores seguros. Además, se utilizan cookies de seguridad proporcionadas
              por Cloudflare para proteger el sitio we
            </h1>
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Accordion 1"
            title="¿Cuál es el propósito de AcuaNet?"
            classNames={{
              base: "py-1",
              title: "text-textsecondary text-lg md:text-xl",
            }}
          >
            <h1 className="md:text-2xl text-textprimary">
              El propósito de AcuaNet es facilitar el acceso a datos actualizados sobre
              los niveles de los embalses en España, proporcionando una plataforma fácil
              de usar y eficiente para pescadores, agricultores y cualquier persona
              interesada en el estado de los recursos hídricos
            </h1>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  )
}

export default Faq
