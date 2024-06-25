import { FetchCuencas } from '@/lib/data'
import { Link } from 'next-view-transitions'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function bento() {
  function getColor(porcentaje) {
    if (porcentaje >= 80) {
      return 'bg-blue-200 text-blue-900 font-bold text-[18px]'
    } else if (porcentaje >= 60) {
      return 'bg-green-200 text-green-900 font-bold text-[18px]'
    } else if (porcentaje >= 40) {
      return 'bg-yellow-200 text-yellow-900 font-bold text-[18px]'
    } else if (porcentaje >= 20) {
      return 'bg-orange-200 text-orange-950 font-bold text-[18px]'
    } else {
      return 'bg-red-200 text-red-900 font-bold text-[18px]'
    }
  }

  const cuencas = await FetchCuencas()
  return (
    <section className="flex h-full items-center justify-center bg-[#070922]">
      <div className="m-10 grid min-h-[45rem] w-[70%] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {cuencas.map((cuenca) => (
          <>
            <Link href={`/cuencas/${cuenca.cuenca}`}>
              <div
                className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 text-[1.4rem] transition-all duration-150 hover:scale-105 active:scale-95 ${getColor(cuenca.porcentaje_embalsada)}`}
                key={cuenca.cuenca}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex flex-col content-center items-center justify-center">
                  <p>{cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}</p>
                  <p>{`${cuenca.porcentaje_embalsada} %`} </p>
                  <p>
                    {`${cuenca.porcentaje_embalsada} hm³`} de {`${cuenca.capacidad} hm³`}{' '}
                  </p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  )
}

export default bento
