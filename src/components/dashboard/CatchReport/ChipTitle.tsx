import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"

export default function ChipTitle({
  icon,
  title,
  bg,
  textColor,
  iconColor,
  borderColor
}: {
  icon: IconSvgElement
  title: string
  bg: string
  textColor?: string
  iconColor?: string
  borderColor?: string
}) {
  return (
    <div
      className={`flex border w-fit items-center gap-1 rounded-lg px-3 py-1 text-sm ${bg} ${textColor} ${borderColor}`}
    >
      <HugeiconsIcon
        icon={icon}
        size={20}
        color={iconColor}
        strokeWidth={1.5}
      />
      <span>{title}</span>
    </div>
  )
}
