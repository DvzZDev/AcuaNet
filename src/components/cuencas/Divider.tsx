function Divider() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      preserveAspectRatio="none"
      viewBox="0 -1 1200 59"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#a6c5b1"
          />
          <stop
            offset="100%"
            stopColor="#f0fdf4"
          />
        </linearGradient>
      </defs>
      <g className="layer">
        <path
          fill="url(#gradient)"
          d="M0-1l1200 50.9V58H0V-1z"
          className="shape-fill"
        ></path>
      </g>
    </svg>
  )
}

export default Divider
