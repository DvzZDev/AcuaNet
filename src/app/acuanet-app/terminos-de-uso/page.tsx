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
      <Intro title="Terminos de uso" />
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

          <h2 className="text-xl font-semibold text-emerald-700 lg:text-2xl">Términos y Condiciones de Uso:</h2>
          <p>
            La aplicación <strong>AcuaNet</strong> está destinada a la planificación de salidas de pesca y registro de capturas.
            Al utilizar la app, aceptas estos términos en su totalidad.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">1. Registro de usuario</h3>
          <p>Para acceder a la app es necesario registrarse proporcionando nombre, apellidos, correo electrónico y contraseña.</p>

          <h3 className="text-lg font-semibold text-emerald-700">2. Funcionalidades y acceso a galería</h3>
          <p>
            Para ciertas funciones, como registrar capturas con fotos, la app solicitará acceso a tu galería. Solo se recogerán
            los metadatos necesarios (fecha, ubicación GPS, tipo de archivo). Las imágenes completas no se almacenan ni se
            comparten sin tu consentimiento.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">3. Planes y suscripciones</h3>
          <p>
            La app ofrece un plan gratuito limitado y planes de suscripción mediante compras integradas. Pagos, renovaciones y
            cancelaciones se gestionan exclusivamente a través de Apple App Store o Google Play Store.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">4. Política de reembolsos</h3>
          <p>
            Las devoluciones y reembolsos se rigen por las políticas de las plataformas de distribución. El titular de AcuaNet no
            tramita devoluciones directamente.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">5. Uso permitido y prohibido</h3>
          <p>El usuario se compromete a:</p>
          <ul className="list-disc pl-5">
            <li>Usar la app conforme a la ley y sin fines fraudulentos.</li>
            <li>No modificar, distribuir ni reproducir la app.</li>
            <li>No realizar ingeniería inversa ni vulnerar derechos de terceros.</li>
          </ul>

          <h3 className="text-lg font-semibold text-emerald-700">6. Limitación de responsabilidad</h3>
          <p>
            David Esteban García no garantiza disponibilidad continua, ausencia de errores o exactitud de la información. No será
            responsable de daños directos o indirectos derivados del uso de la app.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">7. Propiedad intelectual</h3>
          <p>
            Todos los derechos sobre la app y su contenido pertenecen a David Esteban García, salvo contenidos de terceros. El
            usuario dispone de una licencia de uso personal, no exclusiva e intransferible.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">8. Modificación de condiciones</h3>
          <p>
            El titular puede modificar los términos en cualquier momento. El uso continuado implica aceptación de los cambios.
          </p>

          <h3 className="text-lg font-semibold text-emerald-700">9. Legislación aplicable y jurisdicción</h3>
          <p>
            Estos términos se rigen por la legislación española y la normativa de la Unión Europea. Para cualquier conflicto, las
            partes se someten a los tribunales del domicilio del usuario en España, salvo normativa imperativa en contrario.
          </p>
        </div>
      </section>
    </>
  )
}

export default page
