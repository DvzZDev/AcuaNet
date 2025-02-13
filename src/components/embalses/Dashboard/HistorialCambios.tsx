export default function HistorialCambios({
  variacion_ultima_semana,
  variacion_ultima_semanapor,
  misma_semana_ultimo_año,
  misma_semana_ultimo_añopor,
  misma_semana_10años,
  misma_semana_10añospor,
}: {
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  misma_semana_ultimo_año: number
  misma_semana_ultimo_añopor: number
  misma_semana_10años: number
  misma_semana_10añospor: number
}) {
  return (
    <>
      <h2 className="text-2xl font-black text-green-950">Historial de cambios</h2>

      <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
        {/* Hace una semana */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
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
                {variacion_ultima_semana} <span className="text-lg">hm³</span>
              </p>
              <p className="text-sm font-semibold text-[#3d7764]">{variacion_ultima_semanapor}% capacidad total</p>
            </div>
          </div>
          {/* Hace un año */}
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
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M13 20v-16l-5 5" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Hace un año</p>
              <p className="text-3xl font-black text-green-950">
                {misma_semana_ultimo_año} <span className="text-lg">hm³</span>
              </p>
              <p className="text-sm font-semibold text-[#3d7764]">{misma_semana_ultimo_añopor}% capacidad total</p>
            </div>
          </div>
          {/* Hace 10 años */}
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
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M8 8h1v8" />
                <path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Hace 10 años</p>
              <p className="text-3xl font-black text-green-950">
                {misma_semana_10años} <span className="text-lg">hm³</span>
              </p>
              <p className="text-sm font-semibold text-[#3d7764]">{misma_semana_10añospor}% capacidad total</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
