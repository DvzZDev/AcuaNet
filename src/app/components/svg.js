import * as React from "react"
const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" opacity={0.86} viewBox="0 0 800 450">
    <defs>
      <filter
        id="a"
        width="400%"
        height="400%"
        x="-100%"
        y="-100%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feGaussianBlur
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="SourceGraphic"
          result="blur"
          stdDeviation={130}
        />
      </filter>
    </defs>
    <g filter="url(#a)">
      <circle
        cx={395.966}
        cy={-128.699}
        r={150}
        fill="hsla(272, 99%, 54%, 1.00)"
      />
    </g>
  </svg>
)
export default SvgComponent
