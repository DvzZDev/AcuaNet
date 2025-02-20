"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Faq() {
  return (
    <section className="flex flex-col items-center justify-center bg-green-50 px-6 py-8 md:py-20">
      <h2 className="mb-5 pt-1 text-center text-[2.3rem] leading-none font-semibold text-[#275e56] sm:text-[50px] md:mb-10">
        Preguntas Frecuentes
      </h2>
      <div className="w-full max-w-[60rem]">
        <Accordion
          type="single"
          collapsible
          className="w-full border-green-950!"
        >
          <AccordionItem
            className="border-green-950!"
            value="item-1"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              He encontrado algo que no está bien o no se ve bien.
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Mándanos un mensaje por Instagram a @dvzz.dev o @acuanet.es y lo arreglaremos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-2"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿Has tenido una idea para poder mejorar la página?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Mándanos un mensaje por Instagram a @dvzz.dev o @acuanet.es y miraremos si es posible implementarla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-3"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿Con qué frecuencia se actualizan los datos hidrográficos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Todos los datos mostrados en AcuaNet se actualizan cada día a las 2am.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-4"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿Ves algún embalse que le faltan datos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Hay embalses pequeños que no disponen de datos hídricos, si es un embalse grande y no tiene datos, contacta con
              nosotros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-5"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿De dónde provienen los datos hidrográficos y meteorológicos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Todos los datos hidrográficos provienen del
              <a
                className="font-bold"
                href="https://www.miteco.gob.es/es/agua/temas/evaluacion-de-los-recursos-hidricos/saih.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Sistema Automático de Información Hidrológica (SAIH){" "}
              </a>{" "}
              y los datos meteorológicos provienen de{" "}
              <a
                className="font-bold"
                href="https://www.visualcrossing.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                ECMWF{" "}
              </a>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-6"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿Hay algo que no te funciona o se ve mal?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Ponte en contacto conmigo a través de Instagram.{" "}
              <a
                className="animate-fade-up0 font-bold text-emerald-900"
                href="https://www.instagram.com/dvzz.dev/"
              >
                @dvzz.dev
              </a>{" "}
              <a
                className="animate-fade-up0 font-bold text-emerald-900"
                href="https://www.instagram.com/dvzz.dev/"
              >
                @acuanet.es
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-green-950!"
            value="item-7"
          >
            <AccordionTrigger className="py-3 text-left text-lg text-green-950 md:py-5 md:text-xl">
              ¿Eres una marca de pesca o tienda y quieres anunciarte y patrocinar AcuaNet?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-emerald-900">
              Ponte en contacto conmigo a través de Instagram.{" "}
              <a
                className="animate-fade-up0 font-bold text-emerald-900"
                href="https://www.instagram.com/dvzz.dev/"
              >
                @dvzz.dev
              </a>{" "}
              <a
                className="animate-fade-up0 font-bold text-emerald-900"
                href="https://www.instagram.com/dvzz.dev/"
              >
                @acuanet.es
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
