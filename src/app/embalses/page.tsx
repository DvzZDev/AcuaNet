import Intro from "@/components/cuencas/IntroCuencas"
import Tabledata from "@/components/embalses/TableData"
import { Suspense } from "react"
import SkeletonTableEmbalse from "@/components/skeletons/SkeletonTableEmbalse"
import WidgetShareGlob from "@/components/contacto/WidgetShareGlob"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export const metadata = {
  title: "Embalses de España - AcuaNet",
  description: "Información actualizada sobre los embalses de España y su estado actual",
  openGraph: {
    title: "Embalses de España - AcuaNet",
    description:
      "Información actualizada sobre los embalses de España y su estado actual",
    url: "https://acuanet.es/cuencas",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/Jpt5ENb.png",
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
    title: "Embalses de España - AcuaNet",
    creator: "@_DvzZ_",
    images: ["https://i.imgur.com/Jpt5ENb.png"],
  },
}

function page() {
  return (
    <section className="mt-5">
      <Intro title={"Embalses"} />
      <section className="bg-bgcolor">
        <Suspense fallback={<SkeletonTableEmbalse />}>
          <Tabledata />
        </Suspense>
      </section>
      <WidgetShareGlob page={"embalses"} />
    </section>
  )
}

export default page
