import ChartSkeleton from "./ChartSkeleton"
import EstadoActualSkeleton from "./EstadoActualSkeleton"
import FavButtonSkeleton from "./FavButtonSkeleton"
import HistorialCambiosSkeleton from "./HistorialCambiosSkeleton"
import IntroCuencasSkeleton from "./IntroCuencasSkeleton"
import LiveDataSkeleton from "./LiveDataSkeleton"
import LunarCalendarSkeleton from "./LunarCalendarSkeleton"
import MapEmbDataSkeleton from "./MapEmbDataSkeleton"
import PubliSkeleton from "./PubliSkeleton"

export default function DashboardPageSkeleton() {
  return (
    <>
      <FavButtonSkeleton />
      <main className="flex justify-center pb-14 text-black">
        <section className="flex w-full max-w-[70rem] flex-col gap-7">
          {/* Title and flag */}
          <div className="flex animate-pulse items-center justify-between">
            <div className="h-12 w-80 rounded-lg bg-green-200" />
            <div className="h-12 w-16 rounded-xl bg-green-200" />
          </div>

          {/* IntroCuencas */}
          <IntroCuencasSkeleton />

          {/* LiveData */}
          <LiveDataSkeleton />

          {/* Estado Actual title */}
          <div className="h-8 w-48 animate-pulse rounded-sm bg-green-200" />

          {/* EstadoActual */}
          <EstadoActualSkeleton />

          {/* Historial Cambios title */}
          <div className="h-8 w-56 animate-pulse rounded-sm bg-green-200" />

          {/* HistorialCambios */}
          <HistorialCambiosSkeleton />

          {/* Datos Históricos title */}
          <div className="h-8 w-56 animate-pulse rounded-sm bg-green-200" />

          {/* Chart */}
          <ChartSkeleton />

          {/* Mapas */}
          <MapEmbDataSkeleton />

          {/* Patrocinadores title */}
          <div className="h-8 w-56 animate-pulse rounded-sm bg-green-200" />

          {/* Publi */}
          <PubliSkeleton />

          {/* Calendario Lunar title */}
          <div className="h-8 w-56 animate-pulse rounded-sm bg-green-200" />

          {/* Lunar Calendar */}
          <LunarCalendarSkeleton />

          {/* Publi again */}
          <PubliSkeleton />
        </section>
      </main>
    </>
  )
}
