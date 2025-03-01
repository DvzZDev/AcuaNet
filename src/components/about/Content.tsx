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
            me preocupaba mucho, ya que solo era un proyecto para practicar. Lo dejé en pausa unos meses mientras aprendía más y
            trabajaba en otros proyectos.
          </p>
          <p className="mb-4">
            Tiempo después, con más experiencia y con la ayuda de mi amigo Ángel, decidí darle un giro a AcuaNet. Mejoramos el
            diseño y lo enfocamos en los pescadores. Gracias a la difusión en Instagram y al feedback de la comunidad, la web
            empezó a crecer y recibí muchas ideas para mejorarla.
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
            En diciembre de 2024, lancé una nueva versión con una interfaz más atractiva, datos en tiempo real y mejor
            rendimiento. A partir de ahí, AcuaNet se convirtió en una herramienta útil para muchos pescadores que la consultan
            antes de cada salida. El proyecto sigue evolucionando, con mejoras constantes y nuevas ideas en camino.
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
          , donde cualquier persona puede hacer uso de los scrapers desarrollados en NodeJS.
        </p>

        <p className="mb-4">
          En la primera versión de AcuaNet, decidí scrapear directamente la web de Embalses.net, conocida por su gran cantidad de
          datos hidrográficos. Programé un script que accedía a esta web y recolectaba automáticamente los datos más relevantes
          para la pesca. Este script se ejecutaba cada ciertos días para mantener la información actualizada.
        </p>

        <p className="mb-4">
          En la segunda versión de AcuaNet, cambié por completo la forma de recolectar los datos. Vi que los usuarios pedían
          históricos de cada embalse, datos en tiempo real y más información que no podía obtener desde Embalses.net.
        </p>

        <h3 className="mb-2 text-lg font-semibold text-emerald-800 italic">Datos Históricos</h3>
        <p className="mb-4">
          Decidí investigar más a fondo y encontré una base de datos proporcionada por el MITECO, que contenía datos históricos
          desde 1998 hasta la actualidad y se actualizaba semanalmente con los boletines de las cuencas hidrográficas.
        </p>
        <p className="mb-4">
          El problema era que esta base de datos estaba en <strong>Microsoft Access</strong>, un formato poco práctico para
          transformar los datos. Tras un buen proceso de programación, conseguí convertir la base de datos a <strong>JSON</strong>{" "}
          y realizar un <strong>UPSERT</strong> en mi base de datos <strong>PostgreSQL</strong>. Esto me permitió insertar todos
          los registros asegurando que no se duplicaran al añadir nuevos datos.
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
            Para solucionar esto, tuve que desarrollar un <strong>script personalizado</strong> para extraer datos de cada SAHI de
            forma individual y configurar su ejecución automática mediante <strong>GitHub Actions</strong> cada hora. De esta
            manera, AcuaNet puede ofrecer información actualizada constantemente.
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
            <p className="p-2">Recolección datos históricos (esto se ejecuta cada 2 horas)</p>
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
            web completas y súper escalables. <strong>Next.js</strong> facilita que las páginas se carguen rápido (¡y cuando
            tienes tantos datos como AcuaNet, eso es muy importante!) gracias a su renderización del lado del servidor (SSR).
          </p>
          <p className="mb-4">
            Para los estilos, utilizo <strong>Tailwind CSS</strong>, que es un framework que hace que diseñar sea muy rápido y
            flexible. Me ha permitido crear una interfaz fácil de usar y que se adapta bien a dispositivos móviles. La idea es
            que, cuando entres a AcuaNet, encuentres lo que necesitas rápidamente, sin perder tiempo.
          </p>
          <p className="mb-4">
            La información está guardada en <strong>PostgreSQL</strong>, una base de datos bastante robusta que maneja tanto los
            datos históricos como los de tiempo real. Para gestionar todo esto, usamos <strong>Supabase</strong>, que nos ayuda a
            manejar los datos.
          </p>
          <p className="mb-4">
            El código está escrito en <strong>TypeScript</strong>, lo que nos da mayor seguridad al desarrollar. Esto nos ayuda a
            evitar esos errores típicos que pueden aparecer cuando no tienes tipado estático.
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
            AcuaNet! 😊
          </p>
        </div>
      </div>
    </section>
  )
}

export default Content
