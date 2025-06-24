import Intro from "@/components/cuencas/IntroCuencas"
import Content from "@/components/about/Content"

export const metadata = {
  title: "Sobre Nosotros - AcuaNet",
  description:
    "Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España",
  alternates: {
    canonical: "/quienesSomos",
  },
  openGraph: {
    title: "Sobre Nosotros - AcuaNet",
    description:
      "Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España",
    url: "https://www.acuanet.es/quienesSomos",
    siteName: "AcuaNet",
    images: [
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
    title: "Sobre Nosotros - AcuaNet",
    description:
      "Conoce más sobre el equipo de AcuaNet y cómo trabajamos para brindarte información actualizada sobre los embalses de agua en España",
    creator: "@_DvzZ_",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

function Page() {
  return (
    <>
      <section>
        <Intro title="Memoria AcuaNet" />
        <Content />
      </section>
    </>
  )
}

export default Page
