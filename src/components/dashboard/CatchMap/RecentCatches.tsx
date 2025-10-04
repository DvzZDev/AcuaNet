"use client"

import { CatchReportDB } from "@/types"
import ChipsReport from "./ChipsReport"

export default function RecentCatches({ reportData }: { reportData: CatchReportDB[] }) {
  return (
    <section className="flex h-auto w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-4">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Últimas capturas</h1>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reportData.slice(0, 3).map((report, i) => (
            <div
              className="relative h-[20rem] w-full overflow-hidden rounded-2xl"
              key={i}
            >
              <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black/60" />
              <img
                src={report.imagenes[0]}
                alt="Imagen de la captura"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 h-fit w-full p-4">
                <h3 className="mb-3 font-['BlackRolmer'] text-4xl text-emerald-100">{report.embalse}</h3>
                <ChipsReport
                  especie={report.especie}
                  epoca={report.epoca}
                  peso={report.peso}
                  situacion={report.situacion}
                  temperatura={report.temperatura}
                  tecnica_depredadores={report.tecnica_depredadores}
                  tecnica_carpfishing={report.tecnica_carpfishing}
                  profundidad={report.profundidad}
                  fecha={report.fecha}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
