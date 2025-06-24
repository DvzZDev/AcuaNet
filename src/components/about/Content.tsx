"use client"

import { motion, useScroll, useSpring } from "motion/react"

function Content() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className="relative bg-green-50 p-5 pb-20">
      <motion.div
        className="fixed top-0 bottom-0 left-0 z-0 w-1 origin-top bg-emerald-500 lg:w-3"
        style={{ scaleY }}
      />
      <div className="mx-auto max-w-[75ch] space-y-8 lg:space-y-12">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-emerald-950 lg:text-2xl">¿Qué encontrarás en esta página?</h2>
          <p className="mb-4">
            En esta memoria quiero compartir la historia de AcuaNet, tanto la parte técnica como la más personal. Ha sido un
            proyecto muy especial para mí y quiero contar cómo ha evolucionado. Si te queda alguna duda, ¡pregúntame por
            Instagram!
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-emerald-950 lg:text-2xl">Historia del proyecto</h2>
          <p className="mb-4">
            Hace casi un año empecé a programar y, como cualquier persona aprendiendo algo nuevo, necesitaba practicar. Un día,
            preparando una salida de pesca, entré en embalses.net y pensé:{" "}
            <em className="text-green-950">&ldquo;¿Y si intento mejorar esta página?&rdquo;</em> Así nació AcuaNet.
          </p>
          <p className="mb-4">
            Tras unas semanas de desarrollo, lancé la primera versión en junio de 2024. Al principio nadie la usaba, pero tampoco
            me preocupaba mucho, ya que solo era un proyecto para practicar. Lo dejé en pausa unos meses mientras seguia
            aprendiendo y mejorando mis dotes en programación y a la vez trabajaba en otros proyectos.
          </p>
          <p className="mb-4">
            Unos meses más tarde, con más experiencia y con la ayuda de mi amigo y sponsor de esta web Ángel de AGR Baits,
            decidímos darle un giro a AcuaNet. Mejoré el diseño y enfocamos la página directamente en la pesca.
          </p>
          <div className="flex justify-center gap-2 py-7 lg:gap-8">
            <div className="text-center">
              <img
                draggable="false"
                src="https://i.imgur.com/lhOS58F.png"
                alt="Primera versión de AcuaNet"
                className="w-full max-w-[500px] rounded-md"
              />
              <blockquote className="mt-3 flex h-fit items-center justify-center border-l-2 border-green-500 bg-green-100 py-1 text-xs lg:text-sm">
                <p className="p-2">Primera versión de AcuaNet - Junio 2024</p>
              </blockquote>
            </div>
            <div className="text-center">
              <img
                draggable="false"
                src="https://i.imgur.com/pI3M2UV.png"
                alt="Segunda versión de AcuaNet"
                className="w-full max-w-[500px] rounded-md"
              />
              <blockquote className="mt-3 flex h-fit items-center justify-center border-l-2 border-green-500 bg-green-100 py-1 text-xs lg:text-sm">
                <p className="p-2">Segunda versión de AcuaNet - Diciembre 2024</p>
              </blockquote>
            </div>
          </div>
          <p className="mb-4">
            Este año ya ha habído una gran actualización en la que se ha mejorado la interfaz mas aún y se han añadido nuevas
            funcionalidades como los datos historicos, datos en tiempo real y AcuaVisor, un visor de mapas y ortofotos de los
            embalses.
          </p>
          <p className="mb-4">
            Gracias a la difusión en Instagram y al feedback de la comunidad, la web ya tiene mas de 6000 visitas mensuales por
            pescadores de toda España y Portugal. Este año seguiremos mejorando la web y añadiendo nuevas funcionalidades.{" "}
          </p>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-emerald-950 lg:text-2xl">Recolección y tratamiento de datos</h2>
        <p className="mb-4">
          El proceso de recolección y tratamiento de datos ha sido todo un reto. Nadie nos ha facilitado las cosas, ni el MITECO
          ni ningún organismo público. Este proceso está documentado en este{" "}
          <a
            href="https://github.com/DvzZDev/AN-Cron"
            className="text-blue-500 underline"
          >
            repositorio de GitHub
          </a>
          , donde cualquier persona puede hacer uso de los scrapers que he desarollado en este tiempo en NodeJS. (En proceso...)
        </p>

        <p className="mb-4">
          En la primera versión de AcuaNet, decidí scrapear directamente la web de Embalses.net, conocida por su gran cantidad de
          datos hidrográficos. Programé un script que accedía a esta web y recolectaba automáticamente los datos más relevantes
          para la pesca. Este script se ejecutaba cada ciertos días para mantener la información actualizada.
        </p>

        <p className="mb-4">
          En la segunda versión de AcuaNet, decidí cambiar por completo la forma de recolectar los datos. Vi que los usuarios me
          pedían históricos de cada embalse, datos en tiempo real y más información que no podía obtener fácilmente desde
          Embalses.net.
        </p>

        <h3 className="mb-2 text-lg font-semibold text-emerald-800 italic">Datos Históricos</h3>
        <p className="mb-4">
          Investigué más a fondo y encontré una base de datos proporcionada por el MITECO, que contenía datos históricos desde
          1998 hasta la actualidad y se actualizaba semanalmente con los boletines de las cuencas hidrográficas.
        </p>
        <p className="mb-4">
          El problema era que esta base de datos estaba en <strong>Microsoft Access</strong>, un formato poco práctico y antiguo
          para transformar los datos. Tras un buen proceso de programación, conseguí convertir la base de datos a{" "}
          <strong>JSON</strong> y insertar todos los registros en mi base de datos <strong>PostgreSQL</strong> alojada en
          Supabase.
        </p>

        <img
          draggable="false"
          src="https://i.imgur.com/u47jtor.gif"
          alt="Segunda versión de AcuaNet"
          className="mb-4 w-full max-w-full rounded-md"
        />
        <blockquote className="mt-3 flex h-fit items-center justify-center border-l-2 border-green-500 bg-green-100 py-1 text-xs lg:text-sm">
          <p className="p-2">Recolección datos históricos (se ejecuta cada 3 días.)</p>
        </blockquote>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-emerald-800 italic">Datos en tiempo real</h3>
          <p className="mb-4">
            Obtener datos en tiempo real fue todo un reto. Sabía de la existencia de los <strong>SAHI</strong> (Sistema Automático
            Hidrográfico), plataformas del Ministerio diseñadas para <strong>visualizar</strong> datos hidrográficos. Suena bien,
            pero había varios problemas.
          </p>
          <p className="mb-4">
            Para empezar, muchos de estos visores son muy antiguos o están construidos como <strong>SPA</strong> (Single Page
            Application), lo que complica enormemente el scraping. Además, la estructura de cada SAHI varía, ya que no existe una
            plataforma centralizada, sino una distinta para cada cuenca hidrográfica.
          </p>
          <p className="mb-4">
            Para solucionar esto, tuve que desarrollar varios <strong>scripts personalizado</strong> para extraer datos de cada
            SAHI de forma individual y configurar su ejecución automática mediante <strong>GitHub Actions</strong> cada hora. De
            esta manera, AcuaNet puede ofrecer información actualizada constantemente.
          </p>
        </div>

        <div>
          <img
            draggable="false"
            src="https://i.imgur.com/hW4h5gn.gif"
            alt="Segunda versión de AcuaNet"
            className="mb-4 w-full max-w-full rounded-md"
          />
          <blockquote className="mt-3 flex h-fit items-center justify-center border-l-2 border-green-500 bg-green-100 py-1 text-xs lg:text-sm">
            <p className="p-2">Recolección datos en tiempo real (esto se ejecuta cada 2 horas)</p>
          </blockquote>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-emerald-950 lg:text-2xl">AcuaNet: La web</h2>
          <p className="mb-4">
            Ahora que ya sabes cómo recolecto los datos en AcuaNet, te quiero contar un poco sobre las tecnologías que utilizo
            para construir la web.
          </p>
          <p className="mb-4">
            La página está hecha con <strong>Next.js 15</strong>, que es un framework de React que nos permite crear aplicaciones
            web completas y súper escalables. <strong>Next.js</strong> facilita que las páginas se carguen rápido teniendo en
            cuenta la gran cantidad de datos que manejamos.
          </p>
          <p className="mb-4">
            Para los estilos, utilizo <strong>Tailwind CSS</strong>, que es una maravilla de framework que hace que diseñar sea
            muy rápido y flexible. Me ha permitido crear una interfaz sencilla, fácil de usar y que da gusto ver. La idea es que,
            cuando entres a AcuaNet, encuentres lo que necesitas rápidamente, sin perder tiempo.
          </p>
          <p className="mb-4">
            La información está guardada en <strong>PostgreSQL</strong>, una base de datos bastante robusta que maneja tanto los
            datos históricos como los de tiempo real. Para gestionar todo esto, usamos <strong>Supabase</strong>, que nos ayuda a
            manejar y visualizar los datos en una plataforma muy completa y con buenos planes de precios.
          </p>
          <p className="mb-4">
            El código está escrito en <strong>TypeScript</strong>, el cual nos ayuda a tener un código más limpio y seguro.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-emerald-800 italic">Tecnologías utilizadas:</h3>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <img
              draggable="false"
              src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              alt="Next.js"
              className="rounded-md"
            />
            <img
              draggable="false"
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
              className="rounded-md"
            />
            <img
              draggable="false"
              src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC"
              alt="Tailwind CSS"
              className="rounded-md"
            />
            <img
              draggable="false"
              src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              className="rounded-md"
            />
            <img
              draggable="false"
              src="https://shields.io/badge/Supabase-black?logo=supabase&style=for-the-badge"
              alt="Supabase"
              className="rounded-md"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-emerald-950 lg:text-2xl">Conclusión</h2>
          <p className="mb-4">
            Ahora que ya sabes cómo funciona AcuaNet, ¿qué te parece? ¿Te esperabas que una web como esta, donde entras y pasas un
            par de minutos viendo el estado de tus embalses favoritos, llevara tanto trabajo para construirla y mantenerla? Es
            increíble cómo un proyecto personal puede convertirse en algo tan complejo y, a la vez, útil para tanta gente.
          </p>
          <p className="mb-4">
            Mis planes para el futuro son seguir escuchando el feedback de los usuarios y agregar pequeñas mejoras, especialmente
            en el aspecto visual de la UI. La idea es seguir puliendo detalles y hacer que la experiencia sea aún mejor.
          </p>
          <p>
            Espero que te haya gustado esta pequeña memoria y que no te haya aburrido con tantas cosas técnicas. ¡Nos vemos por
            las orillas! 😊
          </p>
        </div>
      </div>
    </section>
  )
}

export default Content
