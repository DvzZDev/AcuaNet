export default function CatchGallerySkl() {
  return (
    <div className="grid h-svh grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="relative h-[20rem] w-full overflow-hidden rounded-2xl bg-emerald-300 shadow-2xl"
        >
          {/* Image skeleton */}
          <div className="h-full w-full animate-pulse bg-emerald-100" />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />

          {/* Content skeleton */}
          <div className="absolute bottom-0 z-20 h-fit w-full p-4">
            {/* Title skeleton */}
            <div className="mb-3 h-10 w-3/4 animate-pulse rounded-lg bg-emerald-400/50" />

            {/* Chips skeleton */}
            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-20 animate-pulse rounded-full bg-emerald-400/50" />
              <div className="h-6 w-24 animate-pulse rounded-full bg-emerald-400/50" />
              <div className="h-6 w-16 animate-pulse rounded-full bg-emerald-400/50" />
              <div className="h-6 w-20 animate-pulse rounded-full bg-emerald-400/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
