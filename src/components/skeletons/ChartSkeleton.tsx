export default function ChartSkeleton() {
  return (
    <section className="h-[400px] w-full animate-pulse rounded-xl border border-green-300 bg-black p-4">
      <div className="flex h-full w-full items-end justify-around gap-2 px-4 pb-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-full rounded-t-md bg-green-300/30"
            style={{
              height: `${Math.random() * 60 + 40}%`,
            }}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <div className="h-3 w-32 rounded-full bg-green-300/30" />
        <div className="h-3 w-32 rounded-full bg-green-300/30" />
        <div className="h-3 w-32 rounded-full bg-green-300/30" />
      </div>
    </section>
  )
}
