import Fuentes from "@/components/landing/Fuentes"
import SkeletonBento from "@/components/skeletons/BentoSkeleton"
import AboutLanding from "@/components/landing/AboutLanding"
import { Suspense } from "react"
import BentoDataLandin from "@/components/landing/BentoDataLanding"
import Faq from "@/components/landing/Faq"
import Hero from "@/components/landing/Hero"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export const metadata = {
  title: "AcuaNet - La herramienta definitiva para tus jornadas de pesca.",
  description:
    "Consulta las mediciones actualizadas de cuencas y embalses, y verifica el tiempo en toda España.",
  openGraph: {
    title: "AcuaNet - La herramienta definitiva para tus jornadas de pesca.",
    description:
      "Consulta las mediciones actualizadas de cuencas y embalses, y verifica el tiempo en toda España.",
    url: "https://acuanet.es",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "OG Image",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcuaNet - La herramienta definitiva para tus jornadas de pesca.",
    description:
      "Consulta las mediciones actualizadas de cuencas y embalses, y verifica el tiempo en toda España. ",
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
