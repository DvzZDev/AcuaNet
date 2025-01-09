"use client"
import { getMoonPhasesForWeekAsRow } from "@/lib/GetMoonPhaseWeek"
import GetResume from "@/lib/GetResume"
import type { IntroEmbalsesProps } from "@/types"

export default function IntroCuencas({ nombre_cuenca, fecha_modificacion, weather, embalse, cuenca }: IntroEmbalsesProps) {
  const moonPhases = getMoonPhasesForWeekAsRow()
  const prompt = `
  Genera un pronóstico detallado de pesca para el fin de semana utilizando los siguientes datos. El pronóstico debe ser claro conciso y no exceder los 1000 caracteres. No incluyas un título: 

  - Pronóstico del tiempo, importante usar datos relevantes para la pesca.
  ${JSON.stringify(weather, null, 2)}
  
  - Nivel de los embalses:
  ${JSON.stringify(embalse, null, 2)}
  
  - Fases de la luna:
  ${moonPhases}
  
  - Información adicional de la cuenca:
  ${JSON.stringify(cuenca, null, 2)}
  `

  const { error, completion } = GetResume({ prompt })

  return (
    <div className="relative flex flex-col justify-between md:h-16 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-black text-green-950">Cuenca del {nombre_cuenca} </p>
        </div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#166534"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M11 15h1" />
            <path d="M12 15v3" />
          </svg>
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
        <div className="relative mb-2 mt-2 flex h-[9rem] w-full max-w-[35rem] flex-col items-center gap-2 rounded-md bg-green-100 md:mt-0 md:h-[7rem]">
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
                className="animate-spin h-16 w-16"
              >
                <circle
                  fill="#93ffb7"
                  stroke="#93ffb7"
                  strokeWidth="15"
                  r="15"
                  cx="40"
                  cy="65"
                >
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    dur="2s"
                    values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.4s"
                  />
                </circle>
                <circle
                  fill="#93ffb7"
                  stroke="#93ffb7"
                  strokeWidth="15"
                  r="15"
                  cx="100"
                  cy="65"
                >
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    dur="2s"
                    values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.2s"
                  />
                </circle>
                <circle
                  fill="#93ffb7"
                  stroke="#93ffb7"
                  strokeWidth="15"
                  r="15"
                  cx="160"
                  cy="65"
                >
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    dur="2s"
                    values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0s"
                  />
                </circle>
              </svg>
            </article>
          )}

          <div className="absolute -bottom-[16px] right-0 flex animate-blurred-fade-in justify-center rounded-full text-xs text-green-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
              <path d="M12 2v2" />
              <path d="M9 12v9" />
              <path d="M15 12v9" />
              <path d="M5 16l4 -2" />
              <path d="M15 14l4 2" />
              <path d="M9 18h6" />
              <path d="M10 8v.01" />
              <path d="M14 8v.01" />
            </svg>
            <span>AcuaNet IA (puede contener errores)</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
