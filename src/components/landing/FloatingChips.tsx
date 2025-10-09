import {
  Album02Icon,
  CalendarCheckIn01Icon,
  ChartLineData02FreeIcons,
  FastWindIcon,
  LiveStreaming02Icon,
  MapsLocation01Icon,
  MoonIcon,
  RainbowIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface ChipConfig {
  icon: typeof LiveStreaming02Icon
  text: string
  color: string
  bgColor: string
  borderColor: string
  animation: {
    floatX: string
    floatY: string
    floatRotate: string
    floatDuration: string
    floatDelay: string
  }
}

interface Position {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface ChipItem extends Omit<ChipConfig, "position"> {
  position: Position
  mobilePosition: Position
}

const chips: ChipItem[] = [
  {
    icon: LiveStreaming02Icon,
    text: "Datos en Tiempo Real",
    color: "#5fc4ff",
    bgColor: "#bae5ff",
    borderColor: "#5fc4ff",
    position: { left: "5%", top: "15%" },
    mobilePosition: { left: "5%", bottom: "35%" },
    animation: {
      floatX: "10px",
      floatY: "-12px",
      floatRotate: "2deg",
      floatDuration: "6s",
      floatDelay: "0s",
    },
  },
  {
    icon: CalendarCheckIn01Icon,
    text: "Datos Semanales",
    color: "#6fffb3",
    bgColor: "#BAFFBD",
    borderColor: "#6fffb3",
    position: { right: "8%", top: "20%" },
    mobilePosition: { right: "5%", bottom: "30%" },
    animation: {
      floatX: "12px",
      floatY: "-15px",
      floatRotate: "3deg",
      floatDuration: "7s",
      floatDelay: "1s",
    },
  },
  {
    icon: ChartLineData02FreeIcons,
    text: "Datos Históricos",
    color: "#ffd966",
    bgColor: "#EFFFBA",
    borderColor: "#ffd966",
    position: { left: "12%", top: "50%" },
    mobilePosition: { left: "5%", bottom: "25%" },
    animation: {
      floatX: "8px",
      floatY: "-10px",
      floatRotate: "2deg",
      floatDuration: "5.5s",
      floatDelay: "2s",
    },
  },
  {
    icon: RainbowIcon,
    text: "Predicción Meteorológica",
    color: "#d966ff",
    bgColor: "#E1BAFF",
    borderColor: "#d966ff",
    position: { right: "20%", bottom: "10%" },
    mobilePosition: { right: "5%", bottom: "20%" },
    animation: {
      floatX: "9px",
      floatY: "-13px",
      floatRotate: "2.5deg",
      floatDuration: "6.5s",
      floatDelay: "1.5s",
    },
  },
  {
    icon: MapsLocation01Icon,
    text: "Mapas",
    color: "#ffb366",
    bgColor: "#FFDFBA",
    borderColor: "#ffb366",
    position: { left: "20%", bottom: "10%" },
    mobilePosition: { left: "5%", bottom: "15%" },
    animation: {
      floatX: "11px",
      floatY: "-14px",
      floatRotate: "3deg",
      floatDuration: "7.5s",
      floatDelay: "0.5s",
    },
  },
  {
    icon: MoonIcon,
    text: "Tabla Lunar",
    color: "#6699ff",
    bgColor: "#BAD0FF",
    borderColor: "#6699ff",
    position: { right: "12%", top: "50%" },
    mobilePosition: { right: "5%", bottom: "10%" },
    animation: {
      floatX: "10px",
      floatY: "-11px",
      floatRotate: "2deg",
      floatDuration: "6s",
      floatDelay: "2.5s",
    },
  },
  {
    icon: Album02Icon,
    text: "Galería de capturas",
    color: "#ff66b3",
    bgColor: "#FFBADD",
    borderColor: "#ff66b3",
    position: { left: "26%", top: "65%" },
    mobilePosition: { left: "5%", bottom: "5%" },
    animation: {
      floatX: "14px",
      floatY: "-16px",
      floatRotate: "4deg",
      floatDuration: "5s",
      floatDelay: "3s",
    },
  },
  {
    icon: FastWindIcon,
    text: "Windy integrado",
    color: "#66d9ff",
    bgColor: "#BAF0FF",
    borderColor: "#66d9ff",
    position: { right: "26%", top: "65%" },
    mobilePosition: { right: "5%", bottom: "5%" },
    animation: {
      floatX: "13px",
      floatY: "-18px",
      floatRotate: "-3deg",
      floatDuration: "5.5s",
      floatDelay: "1.8s",
    },
  },
]

// Helper function to convert hex to rgba
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function FloatingChips() {
  return (
    <>
      {/* Desktop version - Chips */}
      {chips.map((chip, index) => (
        <div
          key={index}
          className="floating-chip absolute hidden cursor-crosshair items-center justify-center gap-2 rounded-xl p-2 text-sm backdrop-blur-sm transition-all hover:scale-75 lg:flex"
          style={
            {
              top: chip.position.top,
              bottom: chip.position.bottom,
              left: chip.position.left,
              right: chip.position.right,
              backgroundColor: hexToRgba(chip.bgColor, 0.3),
              borderColor: chip.borderColor,
              borderWidth: "1px",
              borderStyle: "solid",
              color: chip.color,
              "--float-x": chip.animation.floatX,
              "--float-y": chip.animation.floatY,
              "--float-rotate": chip.animation.floatRotate,
              "--float-duration": chip.animation.floatDuration,
              "--float-delay": chip.animation.floatDelay,
            } as React.CSSProperties
          }
        >
          <HugeiconsIcon
            icon={chip.icon}
            size={20}
            color={chip.color}
            strokeWidth={1.5}
          />
          <p>{chip.text}</p>
        </div>
      ))}
    </>
  )
}
