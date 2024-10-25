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
  title: "AcuaNet - Monitorización Hidrográfica de España",
  description:
    "Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. ",
  openGraph: {
    title: "AcuaNet - Monitorización Hidrográfica de España",
    description:
      "Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. ",
    url: "https://acuanet.es",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/dqgqmnX.png",
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
    title: "AcuaNet - Monitorización Hidrográfica de España",
    description:
      "Consulta mediciones actualizadas de cuencas, embalses y pluviometros en toda España. ",
    images: ["https://i.imgur.com/dqgqmnX.png"],
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
