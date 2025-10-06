export default function IntroCuencasSkeleton() {
  return (
    <div className="relative flex animate-pulse flex-col justify-between md:h-16 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          {/* Title skeleton */}
          <div className="h-8 w-64 rounded-sm bg-green-200" />
        </div>
        <div className="flex gap-1">
          {/* Calendar icon skeleton */}
          <div className="h-5 w-5 rounded-sm bg-green-200" />
          {/* Date text skeleton */}
          <div className="h-5 w-48 rounded-sm bg-green-200" />
        </div>
      </div>
    </div>
  )
}
