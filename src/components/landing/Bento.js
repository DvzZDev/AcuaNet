import '@fontsource-variable/comfortaa'
import { Link } from 'next-view-transitions'

import {
  FetchCuencas,
  FetchCuencaVariacion,
  FetchEmbalsesVariacion,
  FetchEsp,
  FetchPluvis,
} from '../../lib/data'

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

async function Bento() {
  const cuencas = await FetchCuencas()
  const variacionCuencas = await FetchCuencaVariacion()
  const variacionEmbalses = await FetchEmbalsesVariacion()
  const esp = await FetchEsp()
  const pluvis = await FetchPluvis()

  return (
    <section className="flex min-h-full items-center justify-center bg-gradient-to-t from-bgcolor via-bgcolor to-transparent py-8 lg:h-full lg:py-0">
      {/* Div Global */}
      <div className="mx-4 my-8 flex flex-col justify-center gap-7 lg:m-0 lg:grid lg:h-[46rem] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}
        <div className="col-span-4 row-span-1 flex justify-center text-wrap rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm animate-once animate-ease-in-out lg:col-span-4">
          {esp.map((españa) => (
            <div
              key={españa.id}
              className="flex h-full w-full flex-col content-center justify-evenly rounded-lg text-center"
            >
              <h2 className="text-6xl text-[#7387f9]">Reserva</h2>
              <span
                className={`inline-block font-telmaRegular text-[9rem] font-bold leading-none ${
                  españa.porcentaje_embalsado > 50 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {`${españa.porcentaje_embalsado}`}
                <strong className="text-[3rem]">%</strong>
              </span>
              <h2 className="text-6xl text-[#7387f9]">Nacional</h2>
            </div>
          ))}
        </div>
        {/* Segunda Col */}
        <div
          id="bd2"
          className="col-span-6 row-span-1 flex min-h-full min-w-full content-center justify-center rounded-lg bg-[#0a0d30] bg-opacity-90 p-2 backdrop-blur-sm"
        >
          <div className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
            {cuencas.map((cuenca) => (
              <>
                <Link
                  href={`/cuencas/${cuenca.cuenca}`}
                  key={cuenca.id_cuenca}
                >
                  <div
                    className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-90 p-1 transition-all hover:scale-110 ${getColor(
                      cuenca.porcentaje_embalsada
                    )}`}
                  >
                    <div className="flex flex-col content-center items-center justify-center">
                      <p className="text-[14px]">
                        {cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}
                      </p>
                      <p className="text-[14px]">{`${cuenca.porcentaje_embalsada} %`}</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
        {/* Tercera Col */}
        <div className="col-span-6 rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm">
          <h1 className="p-2 text-center text-2xl font-normal text-[#7387f9]">
            Pluviometros últimas horas (l/m2)
          </h1>
          <div className="flex flex-col content-center justify-center px-2 text-[15px] lg:text-[16px]">
            <table className="text-textprimary">
              <thead className="text-left text-[#47ff63ab]">
                <tr>
                  <th className="px-1">Pluviometro</th>
                  <th className="px-1 text-right">Prov</th>
                  <th className="px-1 text-right">1h</th>
                  <th className="px-1 text-right">6h</th>
                  <th className="px-1 text-right">12h</th>
                  <th className="px-1 text-right">24h</th>
                </tr>
              </thead>
              <tbody>
                {pluvis.map((pluvi) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#0b92e4]"
                    key={pluvi.id_pluviometro}
                  >
                    <td className="p-1">{pluvi.nombre}</td>
                    <td className="p-1 text-right">{pluvi.provincia}</td>
                    <td className="p-1 text-right">{pluvi.h1}</td>
                    <td className="p-1 text-right">{pluvi.h6}</td>
                    <td className="p-1 text-right">{pluvi.h12}</td>
                    <td className="p-1 text-right">{pluvi.h24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Cuarta Coluna */}
        <div className="col-span-4 rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm">
          <h1 className="p-2 text-center text-2xl font-normal text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="flex flex-col content-center justify-center px-3">
            {/* Primera Tabla */}
            <table className="mb-1 w-full text-[16px]">
              <thead className="text-[16px] font-extrabold text-[#47ff63ab]">
                <tr>
                  <th className="text-left">Cuenca</th>
                  <th className="text-right">%</th>
                </tr>
              </thead>
              <tbody className="text-textprimary">
                {variacionCuencas.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#0b92e4]"
                    key={variacion.id_cuenca}
                  >
                    <td>
                      <Link href={`/cuencas/${variacion.cuenca}`}>
                        <p>{variacion.cuenca.replace(/_/g, ' ')}</p>
                      </Link>
                    </td>
                    <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Segunda Tabla */}
            <table className="w-full p-3 text-[16px]">
              <caption className="text-left text-[16px] font-extrabold text-[#47ff63ab]">
                Embalse
              </caption>
              <tbody className="text-textprimary">
                {variacionEmbalses.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#0b92e4]"
                    key={variacion.nombre_embalse}
                  >
                    <td className="">{variacion.nombre_embalse}</td>
                    <td className="text-right">{`${variacion.variacion_ultima_semanapor}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bento
