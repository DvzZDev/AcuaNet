import Intro from "@/components/landing/Intro"
import Fuentes from "@/components/landing/Fuentes"
import SkeletonBento from "@/components/skeletons/BentoSkeleton"
import AboutLanding from "@/components/landing/AboutLanding"
import { Suspense } from "react"
import ContactLanding from "@/components/landing/ContactLanding"
import BentoDataLandin from "@/components/landing/BentoDataLanding"
import Faq from "@/components/landing/Faq"

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
        url: "https://i.imgur.com/Jpt5ENb.png",
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
    images: ["https://i.imgur.com/Jpt5ENb.png"],
  },
}

export default function Home() {
  return (
    <>
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <BentoDataLandin />
      </Suspense>
      <Fuentes />
      <AboutLanding />
      <ContactLanding />
      <Faq />
    </>
  )
}
