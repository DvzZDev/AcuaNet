import '@fontsource-variable/comfortaa'
import {
  FetchCuencas,
  FetchCuencaVariacion,
  FetchEmbalsesVariacion,
  FetchEsp,
} from '../data'

function getColor(porcentaje) {
  if (porcentaje >= 90) {
    return 'bg-blue-500 text-white font-bold  '
  } else if (porcentaje >= 70) {
    return 'bg-green-500 text-white font-bold  '
  } else if (porcentaje >= 50) {
    return 'bg-yellow-500 text-white font-bold  '
  } else if (porcentaje >= 30) {
    return 'bg-orange-500 text-white font-bold  '
  } else {
    return 'bg-red-500 text-white font-bold  '
  }
}

async function Bento() {
  const cuencas = await FetchCuencas()
  const variacionCuencas = await FetchCuencaVariacion()
  const variacionEmbalses = await FetchEmbalsesVariacion()
  const esp = await FetchEsp()

  return (
    <section
      id="bento"
      className="flex h-[200svh] content-center items-center justify-center lg:h-[100svh]"
    >
      <div className="relative flex h-[80svh] w-[20rem] flex-col justify-center gap-4 lg:grid lg:h-[90svh] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2">
        <div
          id="bd3"
          className="relative z-10 col-span-4 row-span-1 flex animate-fade items-center justify-center text-wrap rounded-lg backdrop-blur-xl animate-once animate-ease-in-out lg:col-span-4"
        >
          {esp.map((españa) => (
            <div
              key={españa.id}
              className="animate-fade content-center justify-center rounded-lg bg-opacity-50 text-center backdrop-blur-sm animate-once animate-ease-in-out"
            >
              <p
                className={`m-0 p-0 text-[8rem] ${españa.porcentaje_embalsado > 50 ? 'text-green-500' : 'text-red-500'}`}
              >
                {`${españa.porcentaje_embalsado}`}
                <strong className="text-[5rem]">%</strong>
              </p>
              <h2 className="text-[2rem] text-blue-200">Reserva Nacional de Agua</h2>
            </div>
          ))}
        </div>
        <div
          id="bd2"
          className="0 col-span-6 row-span-1 min-h-full min-w-full content-center justify-center rounded-lg p-2 backdrop-blur-xl"
        >
          <div className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4">
            {cuencas.map((cuenca) => (
              <div
                className={`content-center whitespace-normal rounded-md bg-opacity-50 p-1 text-sm transition-all hover:scale-110 ${getColor(cuenca.porcentaje_embalsada)}`}
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

        <div
          id="bd1"
          className="col-span-5 rounded-lg backdrop-blur-xl"
        >
          <h1 className="pt-5 text-center text-xl font-bold text-green-200">
            Mayor Variacion Semanal
          </h1>
          <div className="p-2">
            <table className="m-auto w-[70%] table-auto">
              <caption className="text-left font-bold italic text-green-200">
                CUENCA
              </caption>
              <tbody>
                {variacionCuencas.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-125 hover:text-[#fbf1d2]"
                    key={variacion.cuenca}
                  >
                    <td>{variacion.cuenca.replace(/_/g, ' ')}</td>
                    <td className="text-right">{`${variacion.porcentaje_variacion} %`}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="m-auto w-[70%] table-auto">
              <caption className="p-1 text-left font-bold italic text-green-200">
                EMBALSE
              </caption>
              <tbody>
                {variacionEmbalses.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-125 hover:text-[#fbf1d2]"
                    key={variacion.nombre_embalse}
                  >
                    <td>{variacion.nombre_embalse}</td>
                    <td className="text-right">{`${variacion.variacion_ultima_semanapor} %`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-5 rounded-lg backdrop-blur-xl"></div>
      </div>
    </section>
  )
}

export default Bento
