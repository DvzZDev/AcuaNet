export const WindDirectionIcon = (degree: number) => {
  const getRotation = (degree: number) => {
    if (degree >= 0 && degree < 45) return 0 // North
    if (degree >= 45 && degree < 135) return 90 // East
    if (degree >= 135 && degree < 225) return 180 // South
    if (degree >= 225 && degree < 315) return 270 // West
    return 0 // Default to North
  }

  const rotation = getRotation(degree)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={10}
      height={10}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      style={{ transform: `rotate(${rotation}deg)` }}
      viewBox="5.5 7.5 13 7"
      className="overflow-visible"
    >
      <path
        stroke="none"
        d="M0 0h24v24H0z"
      ></path>
      <path d="m18 14-6-6-6 6h12"></path>
    </svg>
  )
}

export default WindDirectionIcon
