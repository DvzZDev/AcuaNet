import Intro from "@/components/cuencas/IntroCuencas"
import { Suspense } from "react"
import SkeletonCuencas from "@/components/skeletons/SkeletonCuencas"
import BentoData from "@/components/cuencas/BentoData"

export const metadata = {
  title: "Cuencas Hidrográficas de España - Gestión y Datos en AcuaNet",
  description:
    "Explora las cuencas hidrográficas de España, consulta mediciones actualizadas y aprende sobre la gestión de los recursos hídricos en cada cuenca.",
  alternates: {
    canonical: "/cuencas",
  },
  openGraph: {
    title: "Cuencas Hidrográficas de España - Gestión y Datos en AcuaNet",
    description:
      "Accede a información detallada sobre las cuencas hidrográficas de España y cómo se gestionan los recursos hídricos para un futuro sostenible.",
    url: "https://acuanet.es/cuencas",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "Información sobre cuencas hidrográficas en AcuaNet",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuencas Hidrográficas de España - Gestión y Datos en AcuaNet",
    description:
      "Consulta las cuencas hidrográficas de España y obtén información sobre la gestión de los recursos hídricos en cada una.",
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
