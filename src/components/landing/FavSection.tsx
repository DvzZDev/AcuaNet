import { GetEmbalseByName } from "@/db/queriesServer/select"
import { LastWeekVariationF } from "@/lib/DataEmbalses"
import { cookies } from "next/headers"
import { FavCard } from "./FavCard"

export default async function FavSection() {
  const cookieStore = await cookies()
  const favoritesCookie = cookieStore.get("favorites")
  const favorites = favoritesCookie ? JSON.parse(favoritesCookie.value) : []
  const data = await GetEmbalseByName(favorites as string[])
  const lv = LastWeekVariationF(data)

  return (
    <section
      className={`scroll-hide mt-4 h-[17.1rem] w-[15rem] ${data.length > 0 ? "overflow-x-hidden overflow-y-auto" : "overflow-hidden"} sm:w-[32rem]`}
    >
      {data.length > 0 ? (
        <>
          <h2 className="mb-4 text-xl text-green-100 md:text-2xl">Embalses Favoritos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {lv.map((emb) => (
              <FavCard
                key={emb.name}
                embalse={emb}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="m-auto mt-[4rem] flex max-w-sm items-center justify-center rounded-lg md:mt-0 xl:h-[8rem] 2xl:h-[14rem]">
          <div className="max-w-sm rounded-lg border border-green-50/30 bg-emerald-400/15 p-2 md:mt-0">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 overflow-visible md:h-8 md:w-8"
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
                <h2 className="mb-2 text-base font-semibold text-green-100 md:text-lg">Embalses Favoritos</h2>
                <p className="text-xs text-green-200 lg:text-sm">
                  Aún no tienes embalses favorítos. Haz clic en la estrella en la parte superior derecha en la página de un
                  embalse para añadirlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
