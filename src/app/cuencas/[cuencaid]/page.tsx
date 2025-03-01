import EstadoActualCuencas from "@/components/cuencas/cuenca/EstadoActualCuencas"
import { GetCuencas } from "@/db/queries/select"
import TitleCuencas from "@/components/cuencas/cuenca/TitleCuencas"

export async function generateMetadata(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  const cuencaName = params.cuencaid.replace(/%20/g, " ")
  const cuencaFormatted = `${cuencaName.charAt(0).toUpperCase()}${cuencaName.slice(1).toLowerCase()}`

  return {
    title: `${cuencaFormatted} - Mediciones hidrográficas y pronósticos en AcuaNet`,
    description: `Consulta las mediciones hidrográficas actualizadas de la cuenca del ${cuencaName}, con datos sobre niveles de agua, calidad del agua y más para planificar tus actividades en la naturaleza.`,
    keywords:
      "cuenca, mediciones hidrográficas, niveles de agua, calidad del agua, pronóstico, agua, pesca, medio ambiente, España",

    openGraph: {
      title: `${cuencaFormatted} - Mediciones hidrográficas y pronósticos en AcuaNet`,
      description: `Accede a las mediciones hidrográficas más recientes de la cuenca del ${cuencaName} y consulta los niveles de agua, calidad del agua y pronósticos climáticos para tus actividades al aire libre.`,
      url: `https://acuanet.es/cuencas/${params.cuencaid}`,
      siteName: "AcuaNet",
      images: [
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 800,
          height: 600,
          alt: `Imagen de la cuenca de ${cuencaName} - AcuaNet`,
        },
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 1800,
          height: 1600,
          alt: `Mediciones hidrográficas de la cuenca del ${cuencaName} - AcuaNet`,
        },
      ],
      locale: "es_ES",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${cuencaFormatted} - Mediciones hidrográficas y pronósticos en AcuaNet`,
      description: `Consulta las mediciones hidrográficas y pronósticos de la cuenca del ${cuencaName} para optimizar tus actividades en la naturaleza.`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  const data = await GetCuencas()
  const cuenca = data.find((cuenca) => cuenca.cuenca === params.cuencaid)

  const { capacidad, embalsada, variacion, porcentaje_embalsada, porcentaje_variacion, foto } = cuenca || {}
  return (
    <>
      <TitleCuencas name={params.cuencaid} />
      <main className="flex h-full justify-center bg-green-50 px-6 pt-4 pb-14 text-black">
        <section className="flex w-[70rem] flex-col gap-7">
          <EstadoActualCuencas
            agua_embalsada={embalsada ?? 0}
            agua_embalsadapor={porcentaje_embalsada ?? 0}
            capacidad_total={capacidad ?? 0}
            variacion={variacion ?? 0}
            variacion_por={porcentaje_variacion ?? 0}
          />
          <div className="h-fit w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={foto || undefined}
              alt="Imagen de la cuenca hidrográfica"
              className="aspect-auto h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
