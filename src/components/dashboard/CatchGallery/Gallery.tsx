"use client"

import { CatchReportDB } from "@/types"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react"
import { Link } from "next-view-transitions"
import { useRef } from "react"
import ChipsReport3D from "./ChipsReport3D"

export default function Gallery({ reportData }: { reportData: CatchReportDB[] }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      style={{ perspective: "1000px" }}
    >
      {reportData.map((report, i) => (
        <Card3D
          key={i}
          report={report}
        />
      ))}
    </div>
  )
}

function Card3D({ report }: { report: CatchReportDB }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const titleRotateX = useMotionValue(0)
  const titleRotateY = useMotionValue(0)
  const chipsRotateX = useMotionValue(0)
  const chipsRotateY = useMotionValue(0)
  const gradientX = useMotionValue(50)
  const gradientY = useMotionValue(50)

  const springConfig = { stiffness: 100, damping: 25, mass: 0.1 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)
  const titleRotateXSpring = useSpring(titleRotateX, springConfig)
  const titleRotateYSpring = useSpring(titleRotateY, springConfig)
  const chipsRotateXSpring = useSpring(chipsRotateX, springConfig)
  const chipsRotateYSpring = useSpring(chipsRotateY, springConfig)
  const gradientXSpring = useSpring(gradientX, springConfig)
  const gradientYSpring = useSpring(gradientY, springConfig)

  const gradientBackground = useMotionTemplate`radial-gradient(circle at ${gradientXSpring}% ${gradientYSpring}%, rgba(110, 231, 183, 0.3) 0%, transparent 60%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const normalizedX = mouseX / (rect.width / 2)
    const normalizedY = mouseY / (rect.height / 2)

    rotateY.set(-normalizedX * 17)
    rotateX.set(normalizedY * 20)

    titleRotateY.set(-normalizedX * 20)
    titleRotateX.set(0)
    chipsRotateY.set(-normalizedX * 25)
    chipsRotateX.set(0)

    const percentX = ((e.clientX - rect.left) / rect.width) * 100
    const percentY = ((e.clientY - rect.top) / rect.height) * 100
    gradientX.set(percentX)
    gradientY.set(percentY)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    titleRotateX.set(0)
    titleRotateY.set(0)
    chipsRotateX.set(0)
    chipsRotateY.set(0)
    gradientX.set(50)
    gradientY.set(50)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative shadow-2xl h-[20rem] w-full overflow-hidden rounded-2xl"
    >
      <Link
        href={`/account/dashboard/catchreport/${report.catch_id}`}
        className="absolute inset-0 z-40 block"
      />

      <div className="pointer-events-none absolute z-10 h-full w-full bg-gradient-to-b from-transparent to-black/60" />

      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: gradientBackground,
        }}
      />

      <img
        src={report.imagenes[0]}
        alt="Imagen de la captura"
        className="pointer-events-none h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute bottom-0 z-30 h-fit w-full p-4">
        <motion.h3
          style={{
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d",
            rotateX: titleRotateXSpring,
            rotateY: titleRotateYSpring,
          }}
          className="mb-3 font-['BlackRolmer'] text-4xl text-emerald-100 drop-shadow-lg"
        >
          {report.embalse}
        </motion.h3>
        <ChipsReport3D
          especie={report.especie}
          epoca={report.epoca}
          peso={report.peso}
          situacion={report.situacion}
          temperatura={report.temperatura}
          tecnica_depredadores={report.tecnica_depredadores}
          tecnica_carpfishing={report.tecnica_carpfishing}
          profundidad={report.profundidad}
          fecha={report.fecha}
          rotateX={chipsRotateXSpring}
          rotateY={chipsRotateYSpring}
        />
      </div>
    </motion.div>
  )
}
