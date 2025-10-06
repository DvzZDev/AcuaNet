export default function LunarCalendarSkeleton() {
  return (
    <section className="h-fit w-full animate-pulse rounded-2xl border border-green-300 bg-green-50 p-2">
      <div className="flex flex-col gap-4 p-4">
        {/* Header with month selector */}
        <div className="flex items-center justify-between">
          <div className="h-8 w-8 rounded bg-green-200" />
          <div className="h-8 w-40 rounded bg-green-200" />
          <div className="h-8 w-8 rounded bg-green-200" />
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-6 rounded bg-green-200"
            />
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-green-200"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-32 rounded bg-green-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
