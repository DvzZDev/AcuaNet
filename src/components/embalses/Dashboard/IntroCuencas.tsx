"use client"
import { getMoonPhasesForWeekAsRow } from "@/lib/GetMoonPhaseWeek"
import useGetResume from "@/lib/GetResume"

export default function IntroCuencas({
  nombre_cuenca,
  fecha_modificacion,
  weather,
  embalse,
  cuenca,
}: {
  nombre_cuenca: string
  fecha_modificacion: Date
  weather?: any
  embalse?: any
  cuenca: boolean
}) {
  const moonPhases = getMoonPhasesForWeekAsRow()

  // Creamos el prompt
  const prompt = `
  Eres la IA de Acuanet, un experto en pesca que sabe cómo el clima y las fases lunares afectan las mejores condiciones para pescar. Analiza el pronóstico del tiempo de la próxima semana, destacando los días más favorables para pescar, con especial énfasis en el fin de semana. Responde en no más de 8 líneas, manteniendo un tono cercano y directo, y menciona el embalse de forma indirecta. Sé claro y conciso, sin exceder los caracteres. Ten en cuenta que temperaturas muy frías y muy cálidas afectan a la pesca.

  Pronóstico del tiempo:
  ${weather}

  Nivel de los embalses (en hm3 o porcentaje, según corresponda) intenta añadir algun dato en la respuesta:
  ${embalse}

  Fases de la luna y su influencia en la actividad de pesca, ten en cuenta la actividad de los peces cuando menciones luna:
  ${moonPhases}
`

  const Resume = useGetResume(prompt)

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
      {!cuenca || Resume.error ? (
        <div className="relative mt-3 flex h-[9rem] md:h-[7rem] w-full max-w-[35rem] flex-col items-center gap-2 rounded-md bg-green-100 p-2 md:mt-0">
          {Resume.loading ? (
            <>
              <div className="my-1 h-3 w-full animate-pulse rounded-lg bg-green-500 animate-iteration-count-infinite"> </div>
              <div className="my-1 h-3 w-full animate-pulse rounded-lg bg-green-500 animate-iteration-count-infinite"> </div>
              <div className="my-1 h-3 w-full animate-pulse rounded-lg bg-green-500 animate-iteration-count-infinite"> </div>
              <div className="my-1 h-3 w-full animate-pulse rounded-lg bg-green-500 animate-iteration-count-infinite"> </div>
            </>
          ) : Resume.error ? (
            <p className="text-lg font-bold text-red-950">Error al cargar</p>
          ) : (
            <article className="scroll-hide h-full overflow-auto">{Resume.data.text}</article>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#052e16"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute -top-4 right-0 animate-pulsing animate-iteration-count-infinite md:-right-4 md:-top-4"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
