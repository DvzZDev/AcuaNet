export default function MapEmbDataSkeleton() {
  return (
    <>
      <div className="h-8 w-32 animate-pulse rounded-sm bg-green-200" />
      <section className="grid animate-pulse gap-4 md:grid-cols-2">
        <div className="col-span-1 h-[400px] w-full rounded-lg border border-green-900/30 bg-green-100" />
        <div className="col-span-1 h-[400px] w-full rounded-lg border border-green-900/30 bg-green-100" />
      </section>
    </>
  )
}
