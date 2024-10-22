import { cookies } from "next/headers"
import { GetEmbalseByName } from "db/queries/select"
import { Embalses } from "@/types"
import Link from "next/link"

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

const EmbalseCard = ({ embalse }: { embalse: Embalses }) => {
  const variacion = embalse.variacion_ultima_semanapor || 0

  return (
    <div className="md:max-h-auto max-h-64 w-full overflow-auto rounded-lg border border-green-600/30 bg-gradient-to-br from-green-700/60 to-green-900/60 text-green-50 shadow-lg backdrop-blur-lg">
      <Link href={encodeURI(`embalses/${embalse.nombre_embalse ?? ""}`)}>
        <div className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-base font-semibold uppercase">
              {embalse.nombre_embalse}
            </h2>
            {/* Icono */}
          </div>
          <div className="mb-1 flex items-center">
            <div className="mr-2 h-2 w-full rounded-full bg-green-950/50">
              <div
                className="h-2 rounded-full bg-green-400"
                style={{ width: `${embalse.agua_embalsadapor}%` }}
              ></div>
            </div>
            <span className="min-w-[36px] text-right text-sm font-bold">
              {embalse.agua_embalsadapor?.toFixed()}%
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-200">Variación semanal</span>
            <span
              className={`flex items-center font-bold ${
                variacion >= 0 ? "text-green-300" : "text-red-300"
              }`}
            >
              {variacion >= 0 ? (
                <TrendingUp className="mr-1 h-3 w-3" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3" />
              )}
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
  const cookieStore = cookies()
  const favoritesCookie = cookieStore.get("favorites")
  const favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : []
  const data: Embalses[] = await GetEmbalseByName(favorites)

  return (
    <section className="mt-[5rem] w-full max-w-6xl px-4 pb-8">
      <h2 className="mb-4 text-2xl text-green-100">Embalses Favoritos</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.map((favorite: Embalses, index: number) => (
            <EmbalseCard
              key={index}
              embalse={favorite}
            />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-green-100">
          No tienes favoritos aún. Añade algunos embalses a tus favoritos para verlos
          aquí.
        </p>
      )}
    </section>
  )
}
