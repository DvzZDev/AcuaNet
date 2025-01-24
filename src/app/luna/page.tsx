import Divider from "@/components/landing/Divider"
import ButtonUp from "@/components/lunar/up"
import LunarCalendarMov from "@/components/lunar/LunarCalMov"

export const metadata = {
  title: "Calendario Lunar y Actividad de los Peces - AcuaNet",
  description:
    "Consulta el calendario lunar y el pronóstico de actividad de los peces para planificar tus jornadas de pesca con los mejores resultados.",
  openGraph: {
    title: "Calendario Lunar y Actividad de los Peces - AcuaNet",
    description:
      "Accede al calendario lunar y pronósticos de actividad de los peces, optimiza tus salidas de pesca con información precisa y actualizada.",
    url: "https://acuanet.es/calendario-lunar-actividad-peces",
    siteName: "AcuaNet",
    images: [
      {
        url: "https://i.imgur.com/LQvr7AX.png",
        width: 1800,
        height: 1600,
        alt: "Calendario lunar y actividad de los peces en AcuaNet",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendario Lunar y Actividad de los Peces - AcuaNet",
    description: "Consulta el calendario lunar y el pronóstico de actividad de los peces para optimizar tus salidas de pesca.",
    images: ["https://i.imgur.com/LQvr7AX.png"],
  },
}

export default function page() {
  return (
    <>
      <main className="justify-center">
        <h1 className="m-auto mt-4 w-fit rounded-2xl bg-black/40 px-2 text-center text-[2.5rem] font-bold text-green-100 backdrop-blur-lg sm:mb-2 sm:mt-10 sm:text-6xl md:p-3 xl:mb-0">
          Calendário Lunar
        </h1>
        <Divider />
        <div className="bg-green-50 pb-14">
          <LunarCalendarMov />
        </div>
        <ButtonUp />
      </main>
    </>
  )
}
