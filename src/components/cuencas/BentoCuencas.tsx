"use client"
import { Link } from "next-view-transitions"
import type { Cuenca } from "@/types"
import { ColorCuencas } from "@/lib/ColorCuencas"

const BentoCuencas = ({ data }: { data: Cuenca[] }) => {
  const cuencas = data
  return (
    <section className="flex h-full justify-center bg-green-50">
      <div className="m-10 mt-2 grid min-h-[33rem] w-[55rem] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {cuencas.map((cuenca) => (
          <Link
            key={cuenca.cuenca}
            href={`/cuencas/${cuenca.cuenca}`}
          >
            <div
              className={`flex h-full cursor-pointer flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 ${ColorCuencas(cuenca.porcentaje_embalsada ?? 0)}`}
            >
              <div className="flex flex-col content-center items-center justify-center p-2">
                <p className="text-base">{cuenca.cuenca.replace(/_/g, " ").replace(/-/g, " ")}</p>
                <p className="text-base">{`${cuenca.porcentaje_embalsada} %`} </p>
                <p className="text-sm">
                  {`${cuenca.porcentaje_embalsada} hm³`} de {`${cuenca.capacidad} hm³`}{" "}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BentoCuencas
