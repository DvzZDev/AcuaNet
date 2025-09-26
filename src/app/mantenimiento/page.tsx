// pages/mantenimiento.tsx (si usas Pages Router)
// o app/mantenimiento/page.tsx (si usas App Router)

import Head from "next/head"

export default function MantenimientoPage() {
  return (
    <>
      <Head>
        <title>AcuaNet en mantenimiento</title>
        <meta
          name="description"
          content="La web de AcuaNet está en mantenimiento temporal. Descarga la app desde Google Play o App Store para seguir disfrutando del servicio."
        />
        <meta
          name="robots"
          content="noindex, nofollow"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mb-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-8 w-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-gray-900">Estamos realizando mantenimiento</h1>

            <p className="mt-2 text-gray-600">
              Puedes seguir consultando embalses, previsiones y tus reportes desde la app oficial, ya disponible para descargar en
              Google Play y App Store.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-gray-700">Descarga la app oficial de AcuaNet</div>

            <div className="flex flex-col items-center justify-center lg:gap-3 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.dvzz.acuanet&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900/5 p-2 transition hover:bg-gray-900/10"
              >
                <img
                  src="/PlayStore.png"
                  alt="Descargar AcuaNet en Google Play"
                  width={180}
                  height={54}
                />
              </a>
              <a
                href="https://apps.apple.com/es/app/acuanet/id6749550484"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900/5 p-2 transition hover:bg-gray-900/10"
              >
                <img
                  src="/AppStore.png"
                  alt="Descargar AcuaNet en App Store"
                  width={180}
                  height={54}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
