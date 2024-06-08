import { FetchCuencas } from '../data'
async function Bento() {
  const cuencas = await FetchCuencas()
  return (
    <section
      id="bento"
      className="flex h-screen content-center items-center justify-center"
    >
      <div className="flex h-[80svh] w-[20rem] flex-col justify-center gap-4 lg:grid lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2">
        <div className="col-span-4 row-span-1 text-wrap rounded-lg outline outline-slate-500 backdrop-blur-md lg:col-span-4"></div>
        <div className="col-span-6 row-span-1 min-h-full min-w-full overflow-hidden rounded-lg outline outline-slate-500 backdrop-blur-md">
          <div className="grid min-h-full min-w-full grid-cols-2 grid-rows-4 gap-2 p-2 text-center md:grid-cols-3 lg:grid-cols-4">
            {cuencas.map((cuenca) => (
              <div
                className={`content-center overflow-hidden whitespace-normal rounded-md bg-opacity-50 p-1 text-sm ${getColor(cuenca.porcentaje_embalsada)}`}
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
        <div className="col-span-5 rounded-lg outline outline-slate-500 backdrop-blur-md">
          Columna 3
        </div>
        <div className="col-span-5 rounded-lg outline outline-slate-500 backdrop-blur-md">
          Columna 4
        </div>
      </div>
    </section>
  )
}
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

export default Bento
