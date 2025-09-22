import Intro from "@/components/cuencas/IntroCuencas"

export const metadata = {
  title: "Legal - AcuaNet",
  description: "Conoce las condiciones de uso, propiedad intelectual, protección de datos y más información legal sobre AcuaNet.",
  openGraph: {
    title: "Legal - AcuaNet",
    description:
      "Conoce las condiciones de uso, propiedad intelectual, protección de datos y más información legal sobre AcuaNet.",
    url: "https://acuanet.es/legal",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "OG Image",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal - AcuaNet",
    description:
      "Conoce las condiciones de uso, propiedad intelectual, protección de datos y más información legal sobre AcuaNet.",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

function page() {
  return (
    <>
      <Intro title="Aviso Legal" />
      <section className="flex justify-center bg-green-50 px-5 py-8 text-green-950">
        <div className="container w-[75ch] space-y-4 rounded-xl shadow-md">
          <p>
            <strong>Propietario de la aplicación:</strong>
            <br /> David Esteban García
            <br />
            España
            <br />
            Correo de contacto:{" "}
            <a
              href="mailto:info@acuanet.es"
              className="text-blue-500 underline"
            >
              info@acuanet.es
            </a>
          </p>

          <h2 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Política de Privacidad:</h2>
          <p>
            La aplicación <strong>AcuaNet</strong> cumple con el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la{" "}
            <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>. Recopila únicamente los datos estrictamente necesarios para su
            funcionamiento: nombre y apellidos, correo electrónico y contraseña.
          </p>
          <p>
            Para funcionalidades como registrar capturas con fotos, la aplicación solicitará acceso a la{" "}
            <strong>galería del dispositivo</strong> para leer únicamente los <strong>metadatos de las imágenes</strong> (fecha,
            ubicación GPS, tipo de archivo). Esto permite el correcto funcionamiento de la aplicación. Las imágenes completas no
            se almacenan ni se comparten con terceros sin tu consentimiento.
          </p>
          <p>Los datos se utilizan para:</p>
          <ul className="list-disc pl-5">
            <li>Crear y gestionar tu cuenta de usuario.</li>
            <li>Permitir acceso a funcionalidades de planificación y registro de capturas.</li>
            <li>Enviar notificaciones push si lo autorizas.</li>
            <li>Realizar análisis internos para mejorar la aplicación.</li>
          </ul>
          <h3 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Derechos del usuario:</h3>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación u oposición al tratamiento de tus datos,
            así como portabilidad, escribiendo a{" "}
            <a
              href="mailto:info@acuanet.es"
              className="text-blue-500 underline"
            >
              info@acuanet.es
            </a>
          </p>
          <h3 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Medidas de seguridad:</h3>
          <p>
            Se aplican medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados,
            pérdida o alteración. Esto incluye cifrado de transmisión, servidores seguros y control de acceso a la información.
          </p>
          <h3 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Conservación de datos:</h3>
          <p>
            Los datos se conservarán mientras mantengas activa tu cuenta y, tras su baja, se bloquearán durante los plazos legales
            para atender posibles responsabilidades.
          </p>
          <h3 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Cesión y transferencias:</h3>
          <p>
            Los datos no se ceden a terceros salvo obligación legal. Los datos se almacenan en <strong>Supabase</strong>, que
            puede tener servidores fuera de la UE. En estos casos, se aplican cláusulas contractuales tipo aprobadas por la
            Comisión Europea.
          </p>
          <h3 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Modificaciones de la política:</h3>
          <p>
            La presente política podrá ser modificada en cualquier momento. Los cambios sustanciales serán comunicados a los
            usuarios con antelación razonable.
          </p>
          <h2 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Exclusión de garantías y responsabilidad:</h2>
          <p>
            David Esteban García no garantiza la disponibilidad continua, ausencia de errores o la exactitud de la información. No
            se responsabiliza de daños directos o indirectos derivados del uso de la aplicación.
          </p>
        </div>
      </section>
    </>
  )
}

export default page
