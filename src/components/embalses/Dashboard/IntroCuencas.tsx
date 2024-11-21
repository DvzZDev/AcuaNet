"use client"

export default function IntroCuencas({ nombre_cuenca, fecha_modificacion }: { nombre_cuenca: string; fecha_modificacion: Date }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-black text-green-950">Cuenca del {nombre_cuenca} </p>
        </div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#166534"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M11 15h1" />
            <path d="M12 15v3" />
          </svg>
          <p>Última Actualización - {fecha_modificacion ? fecha_modificacion.toLocaleDateString() : "N/A"}</p>
        </div>
      </div>
    </div>
  )
}
