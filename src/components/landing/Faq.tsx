"use client"
import { Accordion, AccordionItem } from "@nextui-org/accordion"

function Faq() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#275e56] px-6 py-8 md:py-10">
      <h3 className="mb-3 pt-1 text-center text-[2.3rem] font-black leading-none text-green-100 sm:text-[50px]">
        Preguntas Frecuentes
      </h3>
      <div className="w-full max-w-[70rem]">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 2"
            title="¿Qué servicios ofrece AcuaNet?"
            classNames={{
              base: "py-1",
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
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
              title: "text-green-200 text-lg md:text-xl",
            }}
          >
            <h1 className="text-green-50 md:text-lg">
              El propósito de AcuaNet es facilitar el acceso a datos actualizados sobre
              los niveles de los embalses en España, proporcionando una plataforma fácil
              de usar y eficiente para pescadores, agricultores y cualquier persona
              interesada en el estado de los recursos hídricos
            </h1>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
