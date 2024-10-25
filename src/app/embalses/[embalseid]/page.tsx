import { Suspense } from "react"
import EmbalseData from "@/components/embalses/EmbalseData"
import SkeeltonBentoEmbalseDist from "@/components/skeletons/SkeeltonBentoEmbalseDist"
import WidgetShare from "@/components/contacto/WidgetShare"
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
          url: "https://i.imgur.com/dqgqmnX.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://i.imgur.com/dqgqmnX.png",
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
      images: ["https://i.imgur.com/dqgqmnX.png"],
    },
  }
}

async function Page({ params }: { params: { embalseid: string } }) {
  return (
    <>
      <Suspense fallback={<SkeeltonBentoEmbalseDist />}>
        <EmbalseData url={params} />
      </Suspense>
      <FavButton url={params} />
      <WidgetShare
        url={params}
        alter={"embalseid"}
        page={"embalses"}
      />
    </>
  )
}

export default Page
