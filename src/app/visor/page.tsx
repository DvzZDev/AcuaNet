"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MapVisor = dynamic(() => import("@/components/visor/VisorMap"), {
  loading: () => (
    <section className="flex h-screen w-full items-center justify-center bg-green-50">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="70"
          height="70"
        >
          <circle
            cx={40}
            cy={65}
            r={15}
            fill="#6FEEAC"
            stroke="#6FEEAC"
            strokeWidth={15}
          >
            <animate
              attributeName="cy"
              begin={-0.4}
              calcMode="spline"
              dur={2}
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              values="65;135;65;"
            />
          </circle>
          <circle
            cx={100}
            cy={65}
            r={15}
            fill="#6FEEAC"
            stroke="#6FEEAC"
            strokeWidth={15}
          >
            <animate
              attributeName="cy"
              begin={-0.2}
              calcMode="spline"
              dur={2}
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              values="65;135;65;"
            />
          </circle>
          <circle
            cx={160}
            cy={65}
            r={15}
            fill="#6FEEAC"
            stroke="#6FEEAC"
            strokeWidth={15}
          >
            <animate
              attributeName="cy"
              begin={0}
              calcMode="spline"
              dur={2}
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              values="65;135;65;"
            />
          </circle>
        </svg>
      </p>
    </section>
  ),
  ssr: false,
})

const Instructor = dynamic(() => import("@/components/visor/Instructor"), {
  ssr: false,
})

export default function Page() {
  const [isDone, setIsDone] = useState<boolean>(false)

  useEffect(() => {
    setIsDone(!!window.localStorage.getItem("tutorial"))
  }, [])

  return (
    <section className="h-[calc(100vh-4rem)] w-screen overflow-hidden bg-green-50">
      {!isDone && <Instructor />}
      <MapVisor />
    </section>
  )
}
