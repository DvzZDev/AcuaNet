import Divider from "../landing/Divider"

export default function SkeletonCuencasDash() {
  return (
    <section className="h-screen">
      <div className="font-NecoBold text-textsecondary m-auto mt-4 h-14 w-[15rem] animate-pulse rounded-lg bg-green-200 text-center text-[2.5rem] sm:mt-10 sm:w-[20rem] sm:text-6xl lg:w-[30rem]"></div>
      <Divider />
      <main className="flex h-full justify-center bg-green-50 px-6 pt-4 pb-14 text-black">
        <section className="flex w-[70rem] flex-col gap-7">
          <div className="flex animate-pulse justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                {/* Title skeleton */}
                <div className="h-8 w-64 rounded-sm bg-green-200"></div>
              </div>
              <div className="flex gap-1">
                {/* Calendar icon skeleton */}
                <div className="h-5 w-5 rounded-sm bg-green-200"></div>
                {/* Date text skeleton */}
                <div className="h-5 w-48 rounded-sm bg-green-200"></div>
              </div>
            </div>
          </div>
          <div className="mb-4 h-8 w-48 animate-pulse rounded-sm bg-green-200"></div>

          <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
            <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
              {/* Agua Embalsada skeleton */}
              <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
                <div className="h-[51px] w-[51px] animate-pulse rounded-xs bg-green-200 p-2"></div>
                <div className="flex w-full flex-col gap-2">
                  <div className="h-6 w-32 animate-pulse rounded-sm bg-green-200"></div>
                  <div className="h-9 w-24 animate-pulse rounded-sm bg-green-200"></div>
                  <div className="relative h-3 w-full animate-pulse rounded-full bg-green-200"></div>
                  <div className="h-5 w-40 animate-pulse rounded-sm bg-green-200"></div>
                </div>
              </div>

              {/* Capacidad Total skeleton */}
              <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
                <div className="h-[51px] w-[51px] animate-pulse rounded-xs bg-green-200 p-2"></div>
                <div className="flex w-full flex-col gap-2">
                  <div className="h-6 w-32 animate-pulse rounded-sm bg-green-200"></div>
                  <div className="h-9 w-24 animate-pulse rounded-sm bg-green-200"></div>
                </div>
              </div>

              {/* Nivel (Cota) skeleton */}
              <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
                <div className="h-[51px] w-[51px] animate-pulse rounded-xs bg-green-200 p-2"></div>
                <div className="flex w-full flex-col gap-2">
                  <div className="h-6 w-32 animate-pulse rounded-sm bg-green-200"></div>
                  <div className="h-9 w-24 animate-pulse rounded-sm bg-green-200"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </section>
  )
}
