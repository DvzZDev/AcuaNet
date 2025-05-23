"use client"

interface EstadoActualCuencasProps {
  agua_embalsada: number
  agua_embalsadapor: number
  capacidad_total: number
  variacion: number
  variacion_por: number
}

export default function EstadoActualCuencas({
  agua_embalsada,
  agua_embalsadapor,
  capacidad_total,
  variacion,
  variacion_por,
}: EstadoActualCuencasProps) {
  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Estado Actual</h3>
      <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
          {/* Agua Embalsada */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-xs bg-green-400/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="icon icon-tabler icons-tabler-outline icon-tabler-droplets"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M4.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M16.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M10.072 10.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Agua Embalsada</p>
              <p className="text-3xl font-black text-green-950">
                {agua_embalsada} <span className="text-lg">hm³</span>
              </p>
              <div className="relative h-3 w-full rounded-full bg-green-950">
                <div
                  className="relative h-3 rounded-full bg-[#1ca077]"
                  style={{ width: `${agua_embalsadapor}%` }}
                  role="progressbar"
                  aria-valuenow={agua_embalsadapor}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-sm font-semibold text-green-950">
                {agua_embalsadapor} <span className="text-[#3d7764]">% de la capacidad total</span>
              </p>
            </div>
          </div>

          {/* Capacidad Total */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-xs bg-green-400/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" />
                <path d="M13 10l-1.5 -1.5" />
                <path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Capacidad Total</p>
              <p className="text-3xl font-black text-green-950">
                {capacidad_total} <span className="text-lg">hm³</span>
              </p>
            </div>
          </div>

          {/* Cambios Semanales */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-xs bg-green-400/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
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
                <path d="M8 14v4" />
                <path d="M12 14v4" />
                <path d="M16 14v4" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Cambios Semanales</p>
              <p className="text-3xl font-black text-green-950">
                {variacion} <span className="text-lg">hm³</span>
              </p>
              <p className="text-sm font-semibold text-[#3d7764]">{variacion_por}% de la capacidad total</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
