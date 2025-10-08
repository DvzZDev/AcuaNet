"use client"

import { CatchReportDB } from "@/types"
import dynamic from "next/dynamic"
import { use } from "react"

const CatchMapClient = dynamic(() => import("./CatchMapCient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-emerald-50 md:min-h-[550px]">
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cargando mapa"
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
          fill="#5ee9b5"
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
          fill="#5ee9b5"
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
  ),
})

export default function CatchMapDynamic({ allCaches }: { allCaches: Promise<CatchReportDB[]> }) {
  const recentCaches = use(allCaches).slice(0, 4)

  return <CatchMapClient reportData={recentCaches} />
}
