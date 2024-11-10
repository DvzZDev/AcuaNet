import Intro from "@/components/cuencas/IntroCuencas"
import { Suspense } from "react"
import SkeletonCuencas from "@/components/skeletons/SkeletonCuencas"
import BentoData from "@/components/cuencas/BentoData"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export const metadata = {
  title: "Cuencas Hidrográficas - AcuaNet",
  description:
    "Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas",
  openGraph: {
    title: "Cuencas Hidrográficas - AcuaNet",
    description:
      "Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas",
    url: "https://acuanet.es/cuencas",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuencas Hidrográficas - AcuaNet",
    description:
      "Conoce más sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos en cada una de ellas",
    creator: "@_DvzZ_",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

function Page() {
  return (
    <section>
      <Intro title={"Cuencas Hidrográficas"} />
      <Suspense fallback={<SkeletonCuencas />}>
        <BentoData />
      </Suspense>
    </section>
  )
}

export default Page
