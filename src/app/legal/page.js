import Intro from '@/components/cuencas/IntroCuencas'

function page() {
  return (
    <>
      <Intro title="Aviso Legal" />
      <section className="flex justify-center bg-bgcolor text-textprimary">
        <div
          id="pp"
          className="container mt-2 rounded-lg p-4 shadow-md"
        >
          <h1 className="mb-4 text-2xl font-bold text-textsecondary">Aviso Legal</h1>
          <p>
            <strong>Propietario del sitio web:</strong>
            <br /> text-textsecondary David Esteban García
            <br />
            España
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Condiciones de uso:
          </h2>
          <p>
            El acceso y uso de este sitio web implica la aceptación plena y sin reservas
            de las condiciones aquí establecidas. En caso de desacuerdo con alguna de
            estas condiciones, por favor no utilices el sitio.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Propiedad intelectual:
          </h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, gráficos, imágenes
            y su diseño, son propiedad de David Esteban García o de sus legítimos
            propietarios. Quedan reservados todos los derechos sobre los mismos.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Protección de datos:
          </h2>
          <p>
            Este sitio web utiliza herramientas para analizar las visitas. Todos los demás
            datos del sitio son de código abierto. Los datos personales proporcionados a
            través de formularios serán tratados conforme a la normativa vigente en
            materia de protección de datos personales.
          </p>
          <h3 className="mb-2 mt-4 text-lg font-semibold text-textsecondary">
            Derechos del usuario:
          </h3>
          <p>
            Tienes derecho a acceder, rectificar y suprimir tus datos personales, así como
            a limitar u oponerte a su tratamiento. También tienes derecho a la
            portabilidad de tus datos. Para ejercer estos derechos, puedes contactar a
            David Esteban García a través del correo electrónico proporcionado.
          </p>
          <h3 className="mb-2 mt-4 text-lg font-semibold text-textsecondary">
            Finalidad del tratamiento de datos:
          </h3>
          <p>
            Los datos recopilados se utilizan exclusivamente para analizar las visitas al
            sitio web y mejorar la experiencia del usuario. No se comparten con terceros,
            salvo obligación legal. Además, el formulario de contacto guarda los datos de
            la persona que ha contactado y su correo electrónico, utilizando Cloudflare
            Turnstile para prevenir envíos automáticos.
          </p>
          <h3 className="mb-2 mt-4 text-lg font-semibold text-textsecondary">
            Medidas de seguridad:
          </h3>
          <p>
            Se han implementado las medidas técnicas y organizativas necesarias para
            garantizar la seguridad de tus datos personales y evitar su alteración,
            pérdida, tratamiento o acceso no autorizado. Esto incluye el uso de cifrado
            SSL en la transmisión de datos, el mantenimiento de servidores seguros y el
            uso de cookies de seguridad proporcionadas por Cloudflare para proteger el
            sitio web.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Exclusión de garantías y responsabilidad:
          </h2>
          <p>
            David Esteban García no se responsabiliza de los daños y perjuicios de
            cualquier naturaleza que puedan derivarse del uso del sitio web, incluyendo
            errores u omisiones en los contenidos, falta de disponibilidad del sitio, o
            transmisión de virus.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Modificaciones:
          </h2>
          <p>
            David Esteban García se reserva el derecho de efectuar sin previo aviso las
            modificaciones que considere oportunas en el sitio web, pudiendo cambiar,
            suprimir o añadir contenidos y servicios.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">Enlaces:</h2>
          <p>
            Este sitio web puede contener enlaces a otros sitios de Internet. David
            Esteban García no ejerce ningún control sobre estos sitios y no asume
            responsabilidad alguna por sus contenidos o servicios.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Derecho de exclusión:
          </h2>
          <p>
            David Esteban García se reserva el derecho a denegar o retirar el acceso al
            sitio y/o los servicios ofrecidos sin necesidad de preaviso, a instancia
            propia o de un tercero, a aquellos usuarios que incumplan las presentes
            Condiciones Generales de Uso.
          </p>
          <h2 className="mb-2 mt-4 text-xl font-semibold text-textsecondary">
            Código abierto:
          </h2>
          <p>
            El código fuente de este sitio web está disponible en el siguiente repositorio
            de GitHub:
            <a
              href="https://github.com/DvzZDev/ACUA-Landing"
              className="text-blue-500 underline"
              target="_blank"
              aria-label='Repositorio de GitHub "ACUA-Landing"'
            >
              ACUA-Landing
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

export default page
