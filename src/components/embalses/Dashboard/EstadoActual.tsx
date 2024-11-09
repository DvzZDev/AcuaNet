export default function EstadoActual({
  agua_embalsada,
  agua_embalsadapor,
  capacidad_total,
}: {
  agua_embalsada: number
  agua_embalsadapor: number
  capacidad_total: number
}) {
  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Estado Actual</h3>
      <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
        {/* Agua Embalsada */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-sm bg-green-400/50 p-2">
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
              <p className="text-lg font-semibold leading-none text-[#3d7764]">
                Agua Embalsada
              </p>
              <p className="text-3xl font-black text-green-950">
                {agua_embalsada} <span className="text-lg">hm³</span>
              </p>
              <div className="relative h-3 w-full rounded-full bg-green-950">
                <div
                  className="relative h-3 rounded-full bg-[#1ca077]"
                  style={{ width: `${agua_embalsadapor}%` }}
                ></div>
              </div>
              <p className="text-sm font-semibold text-green-950">
                {agua_embalsadapor}{" "}
                <span className="text-[#3d7764]">% de la capacidad total</span>
              </p>
            </div>
          </div>
          {/* Capacidad Total */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-sm bg-green-400/50 p-2">
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
              <p className="text-lg font-semibold leading-none text-[#3d7764]">
                Capacidad Total
              </p>
              <p className="text-3xl font-black text-green-950">
                {capacidad_total} <span className="text-lg">hm³</span>
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-sm bg-green-400/50 p-2">
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
                className="lucide lucide-mountain"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg font-semibold leading-none text-[#3d7764]">
                Nivel (Cota)
              </p>
              <p className="text-3xl font-black text-green-950">
                {agua_embalsada} <span className="text-lg">msnm</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
