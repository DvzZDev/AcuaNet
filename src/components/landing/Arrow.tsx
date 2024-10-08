const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
  >
    <path
      fill="none"
      stroke="hsl(282, 100%, 75%)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      markerEnd="url(#a)"
      d="M140.331 226.935q299-444 259 259 279-353 259 259"
      width={300}
      height={300}
    />
    <defs>
      <marker
        id="a"
        markerHeight={10}
        markerWidth={10}
        orient="auto"
        refX={5}
        refY={5}
        viewBox="0 0 10 10"
      >
        <path
          fill="none"
          stroke="hsl(282, 100%, 75%)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.667}
          d="m1.667 7.5 5-2.5-5-2.5"
        />
      </marker>
    </defs>
  </svg>
)
export default SvgComponent
