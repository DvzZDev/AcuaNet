import Fuentes from "@/components/landing/Fuentes"
import SkeletonBento from "@/components/skeletons/BentoSkeleton"
import AboutLanding from "@/components/landing/AboutLanding"
import { Suspense } from "react"
import BentoDataLandin from "@/components/landing/BentoDataLanding"
import Faq from "@/components/landing/Faq"
import Hero from "@/components/landing/Hero"

export const metadata = {
  title: "AcuaNet - Planifica tu jornada de pesca",
  description:
    "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
  keywords:
    "pesca, pesca de blackbass, herramientas de pesca, pesca de lucio, pesca en embalses, embalses de España, acuanet, pesca depredadores, presca de lucio",
  openGraph: {
    title: "AcuaNet - Planifica tu jornada de pesca",
    description:
      "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
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
    title: "AcuaNet - Planifica tu jornada de pesca",
    description:
      "Descubre los niveles de embalses, pronósticos de clima y más para aprovechar al máximo tus jornadas de pesca en toda España.",
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
