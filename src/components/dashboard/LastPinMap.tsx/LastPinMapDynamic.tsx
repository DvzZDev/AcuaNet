"use client"

import { CatchReportDB } from "@/types"
import dynamic from "next/dynamic"
import { use } from "react"

const LastPinMapClient = dynamic(() => import("./LastPinMapClient"), {
  ssr: false,
  loading: () => (
    <div className="relative h-full min-h-[300px] w-full md:min-h-[400px]">
      <div className="flex h-full min-h-[300px] w-full items-center justify-center rounded-2xl border border-emerald-300 bg-emerald-50 md:min-h-[400px]">
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
            fill="#a7f3d0"
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
            fill="#34d399"
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
            fill="#10b981"
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

      <div className="absolute right-2 bottom-2 z-[1000] flex flex-col gap-2 md:right-4 md:bottom-4">
        <div className="h-[44px] w-[44px] animate-pulse rounded-xl bg-[#14141c]/50 md:h-[36px] md:w-[36px]" />
        <div className="h-[44px] w-[44px] animate-pulse rounded-xl bg-[#14141c]/50 md:h-[36px] md:w-[36px]" />
      </div>
    </div>
  ),
})

export default function LastPinMapDynamic({ allCatches }: { allCatches: Promise<CatchReportDB[]> }) {
  const resolvedCatches = use(allCatches)
  const lastPin = resolvedCatches.length > 0 ? resolvedCatches[0] : null

  return <LastPinMapClient reportData={lastPin ? [lastPin] : []} />
}
