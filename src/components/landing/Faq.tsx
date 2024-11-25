"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Faq() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#275e56] px-6 py-8 md:py-10">
      <h2 className="mb-3 pt-1 text-center text-[2.3rem] font-black leading-none text-green-100 sm:text-[50px]">
        Preguntas Frecuentes
      </h2>
      <div className="w-full max-w-[60rem]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Qué servicios ofrece AcuaNet?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              AcuaNet ofrece servicios de monitorización hidrográfica, proporcionando datos actualizados sobre embalses, cuencas y
              pluviometros en España.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="itemy-5">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Con qué frecuencia se actualizan los datos hidrográficos?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              Todos los datos mostrados en la pagina web, tanto Cuencas, Embalses y Pluviometros reciben nuevos datos cada 6h del
              SHAI (Sistema Automático de Información Hidrológica)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿De dónde provienen los datos sobre los embalses y pluviometros?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              Todos los datos de Acuanet provienen de fuentes oficiales, las puedes ver en el partado de fuentes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Cómo puedo contactar con AcuaNet para sugerencias o comentarios?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              Puedes ponerte en contacto con nosotros a través del formulario en la seccion de contacto. Tardaremos 48 horas en
              responderte como máximo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Es posible acceder a datos históricos de los embalses y pluviometros?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              Actualmente solo podemos ofrecer los datos de la última semana y como estaba la cuenca o embalse hace un año.
              Seguimos trabajando poder traer un servicio mas completo en el futuro.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Qué medidas de seguridad se toman para proteger mis datos personales?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              AcuaNet implementa medidas técnicas y organizativas para garantizar la seguridad de los datos personales, incluyendo
              el uso de cifrado SSL y servidores seguros. Además, se utilizan cookies de seguridad proporcionadas por Cloudflare
              para proteger el sitio web.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Cuál es el propósito de AcuaNet?
            </AccordionTrigger>
            <AccordionContent className="text-left text-base text-green-50">
              El propósito de AcuaNet es facilitar el acceso a datos actualizados sobre los niveles de los embalses en España,
              proporcionando una plataforma fácil de usar y eficiente para pescadores, agricultores y cualquier persona interesada
              en el estado de los recursos hídricos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
