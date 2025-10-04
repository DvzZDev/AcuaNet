"use client"

import { motion, MotionValue } from "motion/react"
import ChipsReport from "../CatchMap/ChipsReport"

interface ChipsReport3DProps {
  especie?: string | null
  epoca?: string | null
  peso?: number | null
  situacion?: string | null
  temperatura?: number | null
  tecnica_depredadores?: string | null
  tecnica_carpfishing?: string | null
  profundidad?: string | null
  fecha?: Date | string | null
  rotateX?: MotionValue<number>
  rotateY?: MotionValue<number>
}

export default function ChipsReport3D({ rotateX, rotateY, ...props }: ChipsReport3DProps) {
  return (
    <motion.div
      style={{
        transform: "translateZ(80px)",
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      className="relative"
    >
      <ChipsReport {...props} />
    </motion.div>
  )
}
