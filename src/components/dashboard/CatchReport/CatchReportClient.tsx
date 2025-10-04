"use client"

import { CatchReportDB } from "@/types"
import { AvalancheIcon, Calendar01FreeIcons, MoonIcon, SunCloud02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import ChipsReport from "./ChipsReport"

import ChipTitle from "./ChipTitle"
import Coments from "./Coments"
import HistoricalWeather from "./HistoricalWeather"
import ImageCarousel from "./ImageCarousel"
import LunarCalendar from "./LunarCalendar"
import MapReport from "./MapReport"

export default function CatchReportClient({ report }: { report: CatchReportDB }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const formatDate = (fecha: string) => {
    const date = new Date(fecha)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section className="mb-10 flex w-full justify-center xl:px-4">
      <div className="w-full max-w-[1200px]">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-glow font-['BlackRolmer'] text-4xl leading-none text-emerald-950 md:text-5xl">
              {report.embalse}
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <span className="flex items-center gap-1 rounded-full border-2 border-emerald-800 bg-emerald-950 px-2 py-1 text-[10px] text-emerald-200 shadow-md lg:text-xs">
              <HugeiconsIcon
                icon={Calendar01FreeIcons}
                size={15}
                color={"#5ee9aa"}
                strokeWidth={1.5}
              />
              {formatDate(report.fecha)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5">
          <ImageCarousel
            images={report.imagenes}
            onImageClick={setSelectedImage}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <MapReport reportData={report} />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col gap-3">
            <ChipTitle
              icon={AvalancheIcon}
              title="Entorno"
              bg="bg-[#064e3b]"
              borderColor="border-emerald-400"
              iconColor="#5ee9aa"
              textColor="text-emerald-300"
            />
            <div className="h-fit w-full rounded-2xl bg-emerald-100 p-3">
              <ChipsReport
                especie={report.especie}
                epoca={report.epoca}
                peso={report.peso}
                situacion={report.situacion}
                temperatura={report.temperatura}
                tecnica_carpfishing={report.tecnica_carpfishing}
                tecnica_depredadores={report.tecnica_depredadores}
                profundidad={report.profundidad}
                fecha={report.fecha}
              />
            </div>
          </div>
          {report.weather && (
            <div className="flex flex-col gap-3">
              <ChipTitle
                icon={SunCloud02Icon}
                title="Meterología"
                bg="bg-[#064e3b]"
                borderColor="border-emerald-400"
                iconColor="#5ee9aa"
                textColor="text-emerald-300"
              />
              <div className="h-fit w-full">
                <HistoricalWeather
                  weatherData={report.weather}
                  fecha={report.fecha}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <ChipTitle
              icon={MoonIcon}
              title="Fase Lunar"
              bg="bg-[#064e3b]"
              borderColor="border-emerald-400"
              iconColor="#5ee9aa"
              textColor="text-emerald-300"
            />
            <div className="h-fit w-full">
              <LunarCalendar fecha={report.fecha} />
            </div>
          </div>
        </div>
        {report.comentarios && <Coments coments={report.comentarios} />}
      </div>
    </section>
  )
}
