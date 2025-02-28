const getRotation = (degree: number) => {
  if (degree >= 0 && degree < 45) return 0 // North
  if (degree >= 45 && degree < 135) return 90 // East
  if (degree >= 135 && degree < 225) return 180 // South
  if (degree >= 225 && degree < 315) return 270 // West
  return 0 // Default to North
}

export const WindDirectionIcon = ({ degree }: { degree: number }) => {
  const rotation = getRotation(degree)

  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-8 w-8"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          <linearGradient
            id="gradientWind"
            x1="23"
            x2="41"
            y1="16.41"
            y2="47.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              stopColor="#7f9cf5"
            />
            <stop
              offset="0.45"
              stopColor="#7f9cf5"
            />
            <stop
              offset="1"
              stopColor="#3b82f6"
            />
          </linearGradient>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="18"
          fill="url(#gradientWind)"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth=".5"
          d="M36.47 39.46l-4.3-15.09a.17.17 0 00-.34 0l-4.32 15.09a.35.35 0 00.07.29c.06.11.24 0 4-1.5a.47.47 0 01.33 0l4 1.5c.13.07.22.07.28 0a.26.26 0 00.04-.29z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-3 32 32; 3 32 32; -3 32 32"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
          />
        </path>
      </svg>
    </div>
  )
}

export default WindDirectionIcon
