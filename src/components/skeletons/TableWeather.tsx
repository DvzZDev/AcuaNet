export default function TableWeather() {
  return (
    <section className="h-full">
      <h2 className="mb-6 text-2xl font-black text-green-950 md:mb-6">Predicción Meteorológica</h2>
      <div className="mb-1 flex h-[20rem] w-[15rem] flex-shrink-0 flex-col items-center justify-center rounded-md bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-900 via-teal-950 to-teal-900 p-3 md:w-[17rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-3h-32 h-32"
        >
          <radialGradient
            id="gradient1"
            cx={0.66}
            cy={0.313}
            fx={0.66}
            fy={0.313}
            gradientTransform="scale(1.5)"
          >
            <stop
              offset={0}
              stopColor="#DCFCE7"
            />
            <stop
              offset={0.3}
              stopColor="#DCFCE7"
              stopOpacity={0.9}
            />
            <stop
              offset={0.6}
              stopColor="#DCFCE7"
              stopOpacity={0.6}
            />
            <stop
              offset={0.8}
              stopColor="#DCFCE7"
              stopOpacity={0.3}
            />
            <stop
              offset={1}
              stopColor="#DCFCE7"
              stopOpacity={0}
            />
          </radialGradient>
          <circle
            cx={100}
            cy={100}
            r={70}
            fill="none"
            stroke="url(#gradient1)"
            id={`circle-${Math.random().toString(36).substr(2, 9)}`}
            strokeDasharray="200 1000"
            strokeLinecap="round"
            strokeWidth={12}
            style={{ transformOrigin: "center" }}
          >
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              dur={2}
              keySplines="0 0 1 1"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="360;0"
            />
          </circle>
          <circle
            cx={100}
            cy={100}
            r={70}
            fill="none"
            stroke="#DCFCE7"
            strokeLinecap="round"
            strokeWidth={12}
            opacity={0.2}
            style={{}}
          />
        </svg>
      </div>
    </section>
  )
}
