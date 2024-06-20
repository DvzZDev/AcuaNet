import '@fontsource-variable/comfortaa'
import {
  FetchCuencas,
  FetchCuencaVariacion,
  FetchEmbalsesVariacion,
  FetchEsp,
  FetchPluvis,
} from '../lib/data'

export const revalidate = 0 //Very important

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

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
  console.log(pluvis)

  return (
    <section
      id="bento"
      className="flex h-full content-center items-center justify-center lg:h-[100svh]"
    >
      {/* Div Global */}

      <div className="m-24 flex flex-col justify-center gap-7 lg:m-0 lg:grid lg:h-[90svh] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}

        <div className="z-10 col-span-4 row-span-1 flex animate-fade items-center justify-center text-wrap rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm animate-once animate-ease-in-out lg:col-span-4">
          {esp.map((españa) => (
            <div
              key={españa.id}
              className="animate-fade content-center justify-center rounded-lg text-center animate-once animate-ease-in-out"
            >
              <h2 className="text-[2rem] text-[#7387f9]">Reserva</h2>
              <p
                className={`m-0 p-0 text-[8rem] ${españa.porcentaje_embalsado > 50 ? 'text-green-500' : 'text-red-500'}`}
              >
                {`${españa.porcentaje_embalsado}`}
                <strong className="text-[5rem]">%</strong>
              </p>
              <h2 className="text-[2rem] text-[#7387f9]">Nacional</h2>
            </div>
          ))}
        </div>
        {/* Segunda Col*/}

        <div
          id="bd2"
          className="0 col-span-6 row-span-1 min-h-full min-w-full content-center justify-center rounded-lg bg-blue-950 bg-opacity-70 p-2 backdrop-blur-sm"
        >
          <div className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
            {cuencas.map((cuenca) => (
              <div
                className={`nwhitespace-normal flex flex-col content-center items-center justify-center rounded-md bg-opacity-70 p-1 text-sm transition-all hover:scale-110 ${getColor(cuenca.porcentaje_embalsada)}`}
                key={cuenca.id_cuenca}
              >
                <div className="flex flex-col content-center items-center justify-center">
                  <p>{cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}</p>
                  <p>{`${cuenca.porcentaje_embalsada} %`} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tercera Col */}

        <div className="col-span-6 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm">
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
        <div className="col-span-4 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm">
          <h1 className="p-2 text-center text-2xl font-normal text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="flex flex-col content-center justify-center px-3">
            {/* Primera Tabla */}

            <table className="mb-1 w-full text-[16px]">
              <caption className="text-left font-extrabold text-[#47ff63ab]">
                Cuenca
              </caption>
              <tbody className="text-textprimary">
                {variacionCuencas.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#0b92e4]"
                    key={variacion.cuenca}
                  >
                    <td className="">{variacion.cuenca.replace(/_/g, ' ')}</td>
                    <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion} %`}</td>
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
                    <td className="text-right">{`${variacion.variacion_ultima_semanapor} %`}</td>
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
