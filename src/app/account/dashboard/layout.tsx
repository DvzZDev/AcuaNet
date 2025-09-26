import "@/app/globals.css"
import Sidebar from "@/components/dashboard/Sidebar"
import UpperBar from "@/components/dashboard/UpperBar"
import Footer from "@/components/global/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acuanet.es"),
  title: "AcuaNet - Planifica tu jornada de pesca",
  description:
    "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
  keywords: [
    "pesca, pesca de blackbass, herramientas de pesca, pesca de lucio, pesca en embalses, embalses de España, acuanet, pesca depredadores, pesca de lucio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AcuaNet - Planifica tu jornada de pesca",
    description:
      "Accede a datos actualizados sobre niveles de embalses, pronósticos meteorológicos y condiciones de pesca en toda España para planificar tu próxima jornada de pesca.",
    url: "https://www.acuanet.es",
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

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <UpperBar />
          <main className="flex-1 p-6 bg-green-100 overflow-auto">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
