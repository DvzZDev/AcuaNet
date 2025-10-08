"use client"

import { CatchReportDB } from "@/types"
import { use } from "react"
import Card3D from "./Card3d"

export default function Gallery({ reportData }: { reportData: Promise<CatchReportDB[]> }) {
  const reportDataResolved = use(reportData)
  return (
    <div
      className="grid grid-cols-1 mb-10  gap-4 sm:grid-cols-2 lg:grid-cols-3"
      style={{ perspective: "1000px" }}
    >
      {reportDataResolved.map((report, i) => (
        <Card3D
          key={i}
          report={report}
        />
      ))}
    </div>
  )
}
