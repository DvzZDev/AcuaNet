export default function FavSectionSkl() {
  return (
    <div>
      <div className="scroll-tab flex gap-3 overflow-x-scroll pt-5 sm:gap-4 md:pb-2">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="relative mb-4 w-60 shrink-0 grow-0 overflow-hidden rounded-lg border border-green-500/50 bg-green-500/20 px-2 py-2 sm:w-72 sm:px-3"
          >
            {/* Country Flag Background Skeleton */}
            <div className="absolute -top-[2rem] -right-[2rem] h-[5rem] w-[5rem] -rotate-12 overflow-hidden rounded-full bg-green-500/30 opacity-20 sm:-top-[3rem] sm:-right-[3rem] sm:h-[7rem] sm:w-[7rem]" />

            {/* Header Skeleton */}
            <div className="mb-1 flex items-center justify-between">
              <div className="h-7 w-32 animate-pulse rounded bg-teal-900/20 sm:h-8 sm:w-40 md:h-9" />
            </div>

            {/* Percentage Skeleton */}
            <div className="mb-1 flex justify-end">
              <div className="h-6 w-12 animate-pulse rounded bg-teal-900/20 sm:h-7 sm:w-14 md:h-8" />
            </div>

            {/* Progress Bar Skeleton */}
            <div className="flex items-center gap-2">
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-emerald-200 sm:h-3">
                <div className="h-full w-3/4 animate-pulse rounded-full bg-green-600/40" />
              </div>
            </div>

            {/* Footer Info Skeleton */}
            <div className="mt-2 flex items-center justify-between sm:mt-3">
              <div className="flex items-center gap-1">
                <div className="h-4 w-24 animate-pulse rounded bg-teal-900/20 sm:h-5 sm:w-28" />
              </div>

              <div className="flex items-center gap-1">
                <div className="h-4 w-16 animate-pulse rounded bg-teal-900/20 sm:h-5 sm:w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
