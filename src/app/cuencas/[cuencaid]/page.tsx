import EstadoActualCuencas from "@/components/cuencas/cuenca/EstadoActualCuencas"
import Divider from "@/components/cuencas/Divider"
import Title from "@/components/cuencas/Title"
import IntroCuencas from "@/components/embalses/Dashboard/IntroCuencas"
import { GetCuencas } from "db/queries/select"

export async function generateMetadata(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  return {
    title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
    description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
    openGraph: {
      title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
      url: "https://acuanet.es/cuencas",
      siteName: "AcuaNet",
      images: [
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 1800,
          height: 1600,
          alt: "Og image from AcuaNet",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.cuencaid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.cuencaid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Conulta las mediciones hidrográficas de la cuenca del ${params.cuencaid}`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page(props: { params: Promise<{ cuencaid: string }> }) {
  const params = await props.params
  const data = await GetCuencas()
  const cuenca = data.find((cuenca) => cuenca.cuenca === params.cuencaid)

  const { fecha_modificacion, capacidad, embalsada, variacion, porcentaje_embalsada, porcentaje_variacion, foto } = cuenca || {}

  return (
    <>
      <Title url={{ cuencaid: params.cuencaid }} />
      <Divider />
      <main className="flex h-full justify-center bg-green-50 px-6 pb-14 pt-4 text-black">
        <section className="flex w-[70rem] flex-col gap-7">
          <IntroCuencas
            nombre_cuenca={params.cuencaid || "No disponible"}
            fecha_modificacion={fecha_modificacion ? new Date(fecha_modificacion) : new Date()}
          />
          <EstadoActualCuencas
            agua_embalsada={embalsada ?? 0}
            agua_embalsadapor={porcentaje_embalsada ?? 0}
            capacidad_total={capacidad ?? 0}
            variacion={variacion ?? 0}
            variacion_por={porcentaje_variacion ?? 0}
          />
          <img
            src={foto || ""}
            alt="Imagen de la cuenca hidrográfica"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </section>
      </main>
    </>
  )
}

export default Page
