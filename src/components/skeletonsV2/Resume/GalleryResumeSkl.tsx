import { cn } from "@/lib/utils"

export default function GalleryResumeSkl() {
  return (
    <div className="flex aspect-square flex-wrap overflow-hidden rounded-2xl bg-emerald-50">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            "h-2/4 w-2/4 animate-pulse border-emerald-300 bg-emerald-100",
            i === 1 && "border-r border-b",
            i === 2 && "border-b",
            i === 3 && "border-r border-b",
            i === 4 && "border-b"
          )}
        />
      ))}
    </div>
  )
}
