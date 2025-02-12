"use client"

import type { LiveData } from "@/types"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function LiveData({ data }: { data: LiveData[] }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-black text-green-950">Datos en tiempo real</h2>
        <div className="w-fit rounded-full bg-orange-200 px-2 py-[2px] text-xs">
          <p>Datos no contrastados</p>
        </div>
      </div>

      <section className="relative h-fit w-full overflow-hidden rounded-lg border border-green-900/30 bg-green-100 p-4 text-black">
        <DotLottieReact
          src="https://lottie.host/30e44493-9a5d-40b0-94c7-90980ca0dfbf/IRfsIC8rii.lottie"
          loop
          autoplay
          className="absolute -top-0 -right-6 w-25"
        />
        <table className="w-full table-fixed">
          <thead className="x text-left text-xs text-[#3d7764] lg:text-sm">
            <tr>
              <th className="pb-1">Hora</th>
              <th className="pb-1">
                Volumen <br /> <span className="text-xs">(hm3)</span>
              </th>
              <th className="pb-1">
                Capacidad <br /> <span className="text-xs">(%)</span>
              </th>
              <th className="pb-1">
                Cota <br />
                <span className="text-xs">(msnm)</span>
              </th>
            </tr>
          </thead>
          <tbody className="font-green-950 text-xs font-thin lg:text-sm">
            {data.map((i) => (
              <tr
                className="odd:bg-[#c8ffdc] lg:text-balance"
                key={i.id}
              >
                <td className="py-1">
                  {new Date(i.timestamp ?? "").toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                    day: "numeric",
                    month: "numeric",
                  })}
                </td>
                <td className="py-1">{i.volumen}</td>
                <td className="py-1">{i.porcentaje}</td>
                <td className="py-1">{i.cota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
