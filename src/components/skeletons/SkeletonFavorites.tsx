const SkeletonElement = ({ className }: { className: string }) => (
  <div
    className={`animate-pulse bg-green-100/60 ${className}`}
    aria-hidden="true"
  ></div>
)

const EmbalseCardSkeleton = () => {
  return (
    <div className="md:max-h-auto max-h-64 w-[15rem] overflow-auto rounded-lg border border-green-50/30 bg-emerald-400/15 text-green-50 shadow-lg backdrop-blur-lg transition-all hover:scale-110">
      <div className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <SkeletonElement className="h-6 w-3/4 rounded" />
        </div>
        <div className="mb-1 flex items-center">
          <SkeletonElement className="mr-2 h-2 w-full rounded-full" />
          <SkeletonElement className="h-4 w-8 rounded" />
        </div>
        <div className="flex items-center justify-between">
          <SkeletonElement className="h-4 w-1/3 rounded" />
          <SkeletonElement className="h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  )
}

export default function SkeletonFavorites() {
  return (
    <section
      className="mt-[2rem] h-[16.5rem] w-full max-w-6xl overflow-auto px-4 pb-8 sm:h-full xl:mt-[3rem] 2xl:mt-[rem]"
      aria-label="Cargando sección de favoritos"
    >
      <SkeletonElement className="mb-4 h-8 w-48 rounded" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <EmbalseCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}
