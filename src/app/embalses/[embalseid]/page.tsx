import TitleEmb from "@/components/embalses/TitleEmb"
import { GetEmbalses } from "db/queries/select"
import Divider from "@/components/cuencas/Divider"
import NotFound from "@/app/not-found"
import EmbalsesDashboard from "@/components/embalses/EmbalsesDashboard"
import FavButton from "@/components/embalses/FavButton"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export function generateMetadata({ params }: { params: { embalseid: string } }) {
  return {
    title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
    description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,

    openGraph: {
      title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,
      url: `https://acuanet.es/embalses/${params.embalseid}`,
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
      title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page({ params }: { params: { embalseid: string } }) {
  const embalses = await GetEmbalses()
  const decodedEmbalseid = decodeURIComponent(params.embalseid)
  const resEmbalse = embalses.find((embalse) => embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase())

  if (!resEmbalse) {
    return <NotFound />
  }

  return (
    <>
      <TitleEmb data={resEmbalse} />
      <Divider />
      <FavButton url={{ embalseid: decodedEmbalseid }} />
      <EmbalsesDashboard data={resEmbalse} />
    </>
  )
}

export default Page
