export default function RecentCatchesSkeleton() {
  return (
    <section className="flex h-auto w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-4">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              className="relative border border-emerald-300 h-[20rem] w-full overflow-hidden rounded-2xl bg-emerald-100"
              key={i}
            >
              <div className="absolute h-full w-full animate-pulse bg-emerald-50" />
              <div className="absolute bottom-0 h-fit w-full p-4">
                <div className="mb-3 h-10 w-3/4 animate-pulse rounded-lg bg-emerald-200/80" />
                <div className="flex flex-wrap gap-2">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-emerald-200/60" />
                  <div className="h-6 w-24 animate-pulse rounded-full bg-emerald-200/60" />
                  <div className="h-6 w-16 animate-pulse rounded-full bg-emerald-200/60" />
                  <div className="h-6 w-28 animate-pulse rounded-full bg-emerald-200/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
