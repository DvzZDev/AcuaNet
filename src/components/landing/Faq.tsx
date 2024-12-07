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
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              AcuaNet te ofrece información actualizada sobre los niveles de los embalses, información meteorológica y la tabla
              lunar de cada embalse de España.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Cómo puedo añadir un embalse a mis favoritos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Es muy fácil solo tienes que buscar el embalse que te interesa y hacer click en el icono de la estrella arriba a la
              derecha y se añadirá a tus favoritos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Con qué frecuencia se actualizan los datos hidrográficos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Todos los datos mostrados en la página web, incluyendo cuencas, embalses y datos meteorológicos, se actualizan cada
              24h automáticamente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Ves algún embalse que le faltan datos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Puede ser que algún embalse no tenga los datos disponibles, estamos trabajando para traer la mayor cantidad de datos
              posibles. También puede ser que el embalse no tenga datos disponibles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿De dónde provienen los datos hidrográficos y meteorológicos?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Todos los datos hidrográficos provienen del
              <a
                className="font-bold text-green-400"
                href="https://www.miteco.gob.es/es/agua/temas/evaluacion-de-los-recursos-hidricos/saih.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Sistema Automático de Información Hidrológica (SAIH){" "}
              </a>{" "}
              y los datos meteorológicos provienen de{" "}
              <a
                className="font-bold text-green-400"
                href="https://www.visualcrossing.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                VisualCrossing
              </a>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Hay algo que no te funciona o se ve mal?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Puedes ponerte en contacto conmigo a través de mi instagram{" "}
              <a
                className="animate-fade-up0 font-bold text-green-50"
                href="https://www.instagram.com/dvzz.dev/"
              >
                @dvzz.dev
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="py-5 text-left text-base text-green-200 md:text-xl">
              ¿Es posible acceder a datos históricos de los embalses y cuencas?
            </AccordionTrigger>
            <AccordionContent className="animate-fade-in text-left text-base text-green-50">
              Actualmente solo podemos ofrecer los datos de la última semana y como estaba la cuenca o embalse hace un año.
              Seguimos trabajando poder traer un servicio más completo en el futuro.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
