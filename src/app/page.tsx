import Fuentes from "@/components/landing/Fuentes"
import SkeletonBento from "@/components/skeletons/BentoSkeleton"
import AboutLanding from "@/components/landing/AboutLanding"
import { Suspense } from "react"
import BentoDataLandin from "@/components/landing/BentoDataLanding"
import Faq from "@/components/landing/Faq"
import Hero from "@/components/landing/Hero"

export const metadata = {
  title: "AcuaNet - Nivel de los embalses y pronóstico de pesca",
  description:
    "Consulta en tiempo real los niveles de agua, pronósticos meteorológicos y datos clave de cuencas y embalses en toda España para optimizar tus jornadas de pesca.",
  openGraph: {
    title: "AcuaNet - Nivel de los embalses y pronóstico de pesca",
    description:
      "Accede a información precisa y actualizada sobre cuencas y embalses, condiciones meteorológicas y más, para planificar tus mejores salidas de pesca.",
    url: "https://acuanet.es",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "AcuaNet - La herramienta definitiva para pescadores",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcuaNet - Nivel de los embalses y pronóstico de pesca",
    description:
      "Consulta las mediciones más recientes de cuencas y embalses y obtén el pronóstico del tiempo para optimizar tus jornadas de pesca en toda España.",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonBento />}>
        <BentoDataLandin />
      </Suspense>
      <Fuentes />
      <AboutLanding />
      <Faq />
    </>
  )
}
