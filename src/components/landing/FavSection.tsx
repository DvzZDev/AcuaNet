import { cookies } from "next/headers"
import { GetEmbalseByName } from "@/db/queries/select"
import { LastWeekVariationF } from "@/lib/DataEmbalses"
import Link from "next/link"

interface FavSection {
  name: string
  lastWeek: number
  pctDifference: number
  cuenca: string
  pais: string
  porcentaje: number
}

const TrendingUp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const TrendingDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
)

const EmbalseCard = ({ embalse }: { embalse: FavSection }) => {
  const variacion = embalse.pctDifference || 0

  return (
    <div className="max-h-64 w-[15rem] overflow-auto rounded-lg border border-green-50/30 bg-emerald-400/15 shadow-lg transition-all hover:scale-95 md:max-h-auto">
      <Link href={`embalses/${embalse.name.toLowerCase().replace(/ /g, "-") ?? ""}`}>
        <div className="relative p-3">
          <div className="absolute top-0 right-0 flex h-4 w-6 items-center justify-center overflow-hidden">
            <img
              src={embalse.pais === "España" ? "/es.webp" : "/pt.webp"}
              alt={embalse.pais + " flag"}
              className="h-6 w-6 object-cover"
            />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="truncate text-base text-green-100">{embalse.name}</h2>
            {/* Icono */}
          </div>
          <div className="mb-1 flex items-center">
            <div className="mr-2 h-2 w-full rounded-full bg-green-950">
              <div
                className="h-2 rounded-full bg-green-400"
                style={{ width: `${embalse.porcentaje}%` }}
              ></div>
            </div>
            <span className="min-w-[36px] text-right text-sm font-bold text-green-100">{embalse.porcentaje?.toFixed()}%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-100">Variación semanal</span>
            <span className={`flex items-center font-bold ${variacion >= 0 ? "text-green-300" : "text-red-300"}`}>
              {variacion >= 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
              {variacion > 0 ? "+" : ""}
              {variacion}%
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default async function FavSection() {
  const cookieStore = await cookies()
  const favoritesCookie = cookieStore.get("favorites")
  const favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : []
  const data = await GetEmbalseByName(favorites as string[])
  const lv = LastWeekVariationF(data)

  return (
    <section className={`mt-4 h-[16.5rem] w-[15rem] ${data.length > 0 ? "overflow-y-auto" : "overflow-hidden"} sm:w-[32rem]`}>
      {data.length > 0 ? (
        <>
          <h2 className="mb-4 text-xl text-green-100 md:text-2xl">Embalses Favoritos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {lv.map((emb) => (
              <EmbalseCard
                key={emb.name}
                embalse={emb}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="m-auto mt-[4rem] flex max-w-sm items-center justify-center rounded-lg md:mt-0 xl:h-[8rem] 2xl:h-[14rem]">
          <div className="max-w-sm rounded-lg border border-green-50/30 bg-emerald-400/15 p-2 md:mt-0">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 overflow-visible md:h-8 md:w-8"
                fill="yellow"
                viewBox="0 0 24 24"
                stroke=""
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <div>
                <h2 className="mb-1 text-base font-semibold text-green-100 md:text-lg">Embalses Favoritos</h2>
                <p className="text-sm text-green-200">
                  No tienes embalses favoritos. Haz clic en la estrella en la página del embalse para añadirlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
