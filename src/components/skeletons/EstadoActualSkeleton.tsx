export default function EstadoActualSkeleton() {
  return (
    <section className="h-fit w-full animate-pulse rounded-lg border border-green-900/30 bg-green-100 p-2">
      <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
        {/* Agua Embalsada skeleton */}
        <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
          <div className="h-[51px] w-[51px] rounded-xs bg-green-200 p-2" />
          <div className="flex w-full flex-col gap-2">
            <div className="h-6 w-32 rounded-sm bg-green-200" />
            <div className="h-9 w-24 rounded-sm bg-green-200" />
            <div className="relative h-3 w-full rounded-full bg-green-200" />
            <div className="h-5 w-40 rounded-sm bg-green-200" />
          </div>
        </div>

        {/* Capacidad Total skeleton */}
        <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
          <div className="h-[51px] w-[51px] rounded-xs bg-green-200 p-2" />
          <div className="flex w-full flex-col gap-2">
            <div className="h-6 w-32 rounded-sm bg-green-200" />
            <div className="h-9 w-24 rounded-sm bg-green-200" />
          </div>
        </div>

        {/* Nivel (Cota) skeleton */}
        <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
          <div className="h-[51px] w-[51px] rounded-xs bg-green-200 p-2" />
          <div className="flex w-full flex-col gap-2">
            <div className="h-6 w-32 rounded-sm bg-green-200" />
            <div className="h-9 w-24 rounded-sm bg-green-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
