export default function CatchMapSkl() {
  return (
    <div className="relative h-full min-h-[400px] w-full md:min-h-[550px]">
      {/* Map skeleton */}
      <div className="h-full min-h-full animate-pulse rounded-2xl border border-emerald-300 bg-emerald-50 md:min-h-[550px]">
        <div className="flex h-full items-center justify-center">
          {/* Loading spinner */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="0"
              fill="#5ee9b5"
            >
              <animate
                id="spinner_0Nme"
                begin="0;spinner_ITag.begin+0.4s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="0;spinner_ITag.begin+0.4s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
            <circle
              cx="12"
              cy="12"
              r="0"
            >
              <animate
                id="spinner_f83A"
                begin="spinner_0Nme.begin+0.4s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="spinner_0Nme.begin+0.4s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
            <circle
              cx="12"
              cy="12"
              r="0"
            >
              <animate
                id="spinner_ITag"
                begin="spinner_0Nme.begin+0.8s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="spinner_0Nme.begin+0.8s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
          </svg>
        </div>
      </div>

      {/* Zoom controls skeleton */}
      <div className="absolute right-2 bottom-2 z-[1000] flex flex-col gap-2 md:right-4 md:bottom-4">
        <div className="h-[52px] w-[52px] animate-pulse rounded-xl border bg-[#14141c]/50 md:h-10 md:w-10" />
        <div className="h-[52px] w-[52px] animate-pulse rounded-xl border bg-[#14141c]/50 md:h-10 md:w-10" />
      </div>
    </div>
  )
}
