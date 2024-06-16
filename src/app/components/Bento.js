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
      <div className="relative flex h-[80svh] w-[20rem] flex-col justify-center gap-7 lg:grid lg:h-[90svh] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        <div
          id="bd3"
          className="relative z-10 col-span-4 row-span-1 flex animate-fade items-center justify-center text-wrap rounded-lg backdrop-blur-lg animate-once animate-ease-in-out lg:col-span-4"
        >
          {esp.map((españa) => (
            <div
              key={españa.id}
              className="animate-fade content-center justify-center rounded-lg bg-opacity-50 text-center backdrop-blur-lg animate-once animate-ease-in-out"
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
        <div
          id="bd2"
          className="0 col-span-6 row-span-1 min-h-full min-w-full content-center justify-center rounded-lg p-2 backdrop-blur-lg"
        >
          <div className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
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
          className="col-span-5 flex flex-col content-center justify-center rounded-lg backdrop-blur-lg"
        >
          <h1 className="pt-2 text-center text-2xl font-normal text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="p-2">
            <table className="m-auto mb-2 w-[92%] lg:w-[77%]">
              <caption className="text-left text-[14px] font-extrabold text-[#e1ff38]">
                CUENCA
              </caption>
              <tbody>
                {variacionCuencas.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#e1ff38]"
                    key={variacion.cuenca}
                  >
                    <td className="text-[15px]">{variacion.cuenca.replace(/_/g, ' ')}</td>
                    <td className="w-[50%] text-right text-[15px] lg:w-auto">{`${variacion.porcentaje_variacion} %`}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="m-auto w-[92%] p-3 lg:w-[77%]">
              <caption className="text-left text-[14px] font-extrabold text-[#e1ff38]">
                EMBALSE
              </caption>
              <tbody>
                {variacionEmbalses.map((variacion) => (
                  <tr
                    className="transition-all hover:scale-105 hover:text-[#e1ff38]"
                    key={variacion.nombre_embalse}
                  >
                    <td className="text-[15px]">{variacion.nombre_embalse}</td>
                    <td className="text-right text-[15px]">{`${variacion.variacion_ultima_semanapor} %`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-5 rounded-lg backdrop-blur-lg"></div>
      </div>
    </section>
  )
}

export default Bento
