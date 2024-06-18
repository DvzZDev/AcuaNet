import '@fontsource-variable/comfortaa'
import {
  FetchCuencas,
  FetchCuencaVariacion,
  FetchEmbalsesVariacion,
  FetchEsp,
  FetchPluvis,
} from '../data'

function getColor(porcentaje) {
  if (porcentaje >= 90) {
    return 'bg-blue-500 text-white font-bold'
  } else if (porcentaje >= 70) {
    return 'bg-green-500 text-white font-bold'
  } else if (porcentaje >= 50) {
    return 'bg-yellow-500 text-white font-bold'
  } else if (porcentaje >= 30) {
    return 'bg-orange-500 text-white font-bold'
  } else {
    return 'bg-red-500 text-white font-bold'
  }
}

async function Bento() {
  const cuencas = await FetchCuencas()
  const variacionCuencas = await FetchCuencaVariacion()
  const variacionEmbalses = await FetchEmbalsesVariacion()
  const esp = await FetchEsp()
  const pluvis = await FetchPluvis()

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
                className={`content-center whitespace-normal rounded-md bg-opacity-70 p-1 text-sm transition-all hover:scale-110 ${getColor(cuenca.porcentaje_embalsada)}`}
                key={cuenca.id_cuenca}
              >
                <div>
                  <p>{cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}</p>
                  <p>{`${cuenca.porcentaje_embalsada} %`} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tercera Col */}

        <div
          id="bd1"
          className="col-span-5 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm"
        >
          <h1 className="pt-2 text-center text-2xl font-normal text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="flex flex-col content-center justify-center p-2">
            {/* Primera Tabla */}

            <table className="m-auto mb-2 w-[92%] text-[16px] lg:w-[85%]">
              <caption className="text-left font-extrabold text-[#e1ff38]">
                Cuenca
              </caption>
              <tbody>
                {variacionCuencas.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#a9ff38f7]"
                    key={variacion.cuenca}
                  >
                    <td className="">{variacion.cuenca.replace(/_/g, ' ')}</td>
                    <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion} %`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Segunda Tabla */}

            <table className="m-auto w-[92%] p-3 text-[16px] lg:w-[85%]">
              <caption className="text-left text-[16px] font-extrabold text-[#e1ff38]">
                Embalse
              </caption>
              <tbody>
                {variacionEmbalses.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#a9ff38f7]"
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

        {/* Cuarta Col */}

        <div className="col-span-5 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm">
          <h1 className="pt-2 text-center text-2xl font-normal text-[#7387f9]">
            Pluviometros últimas horas (l/m2)
          </h1>
          <div className="flex flex-col content-center justify-center p-2 text-[15px] lg:text-[16px]">
            <table className="">
              <thead className="text-left text-[#e1ff38]">
                <tr>
                  <th className="px-1">Pluviometro</th>
                  <th className="px-1">Prov</th>
                  <th className="px-1">1h</th>
                  <th className="px-1">6h</th>
                  <th className="px-1">12h</th>
                  <th className="px-1">24h</th>
                </tr>
              </thead>
              <tbody>
                {pluvis.map((pluvi) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#a9ff38f7]"
                    key={pluvi.id_pluviometro}
                  >
                    <td className="p-1">{pluvi.nombre}</td>
                    <td className="p-1">{pluvi.provincia}</td>
                    <td className="p-1">{pluvi.h1}</td>
                    <td className="p-1">{pluvi.h6}</td>
                    <td className="p-1">{pluvi.h12}</td>
                    <td className="p-1">{pluvi.h24}</td>
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
