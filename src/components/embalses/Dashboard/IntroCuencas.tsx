"use client"
import { getMoonPhasesForWeekAsRow } from "@/lib/GetMoonPhaseWeek"
import GetResume from "@/lib/GetResume"
import type { IntroEmbalsesProps } from "@/types"
import { Calendar03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function IntroCuencas({ nombre_cuenca, fecha_modificacion, weather, embalse, cuenca }: IntroEmbalsesProps) {
  const moonPhases = getMoonPhasesForWeekAsRow()
  const prompt = `
Genera un resumen breve y natural sobre las condiciones de pesca en los próximos días basándote en los siguientes datos. Usa frases fluidas y útiles, sin listas ni formato estructurado.

📊 **Datos:**
- **Clima:** ${JSON.stringify(weather, null, 2)}
- **Embalse:** ${embalse ? JSON.stringify(embalse[0], null, 2) : "N/A"}
- **Fase lunar:** ${moonPhases}
- **Datos adicionales:** ${JSON.stringify(cuenca, null, 2)}

🔹 **Ejemplo de Respuesta Esperada:**  
"Este fin de semana se esperan temperaturas alrededor de los 20°C. El sábado habrá un pico de actividad con vientos fuertes superando los 28 km/h a las 18:00. El domingo será más estable con actividad media. El embalse está alto, al 89%, así que tenlo en cuenta para acceder a ciertas zonas."
`

  const { error, completion } = GetResume({ prompt })

  return (
    <div className="relative flex flex-col justify-between md:h-16 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="font-['BlackRolmer'] text-3xl font-bold text-green-950">Cuenca del {nombre_cuenca} </h1>
        </div>
        <div className="flex items-center gap-1">
          <HugeiconsIcon
            icon={Calendar03Icon}
            size={18}
            color="#047857"
          />
          <p>
            Últ. Actualización -{" "}
            {fecha_modificacion
              ? new Date(fecha_modificacion).toLocaleString("es-ES", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hourCycle: "h23",
                })
              : "N/A"}
          </p>
        </div>
      </div>

      {!cuenca ? (
        <div className="relative mt-2 mb-2 flex h-[9rem] w-full max-w-[35rem] flex-col items-center gap-2 rounded-md bg-emerald-50 md:mt-0 md:h-[7rem]">
          {error ? (
            <article className="scroll-hide text-md my-2 flex h-full items-center justify-center overflow-auto px-3 text-center leading-tight">
              <span>Ha sucedido un error al generar el texto.</span>
            </article>
          ) : completion ? (
            <article className="scroll-hide my-2 h-full overflow-auto px-3 text-sm leading-5">
              <span className={`${completion ? "animate-fade-in-down" : ""}`}>{completion}</span>
            </article>
          ) : (
            <article className="scroll-hide text-md my-2 flex h-full items-center justify-center overflow-auto px-3 text-center leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                width="30"
                height="30"
              >
                <circle
                  cx={40}
                  cy={65}
                  r={15}
                  fill="#6FEEAC"
                  stroke="#6FEEAC"
                  strokeWidth={15}
                >
                  <animate
                    attributeName="cy"
                    begin={-0.4}
                    calcMode="spline"
                    dur={2}
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    values="65;135;65;"
                  />
                </circle>
                <circle
                  cx={100}
                  cy={65}
                  r={15}
                  fill="#6FEEAC"
                  stroke="#6FEEAC"
                  strokeWidth={15}
                >
                  <animate
                    attributeName="cy"
                    begin={-0.2}
                    calcMode="spline"
                    dur={2}
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    values="65;135;65;"
                  />
                </circle>
                <circle
                  cx={160}
                  cy={65}
                  r={15}
                  fill="#6FEEAC"
                  stroke="#6FEEAC"
                  strokeWidth={15}
                >
                  <animate
                    attributeName="cy"
                    begin={0}
                    calcMode="spline"
                    dur={2}
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    values="65;135;65;"
                  />
                </circle>
              </svg>
            </article>
          )}

          <div className="animate-blurred-fade-in absolute right-0 -bottom-[16px] flex justify-center rounded-full text-xs text-green-950">
            <span>AcuaNet IA (puede contener errores)</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
