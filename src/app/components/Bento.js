import { FetchCuencas } from '../data'
async function Bento() {
  const cuencas = await FetchCuencas()
  return (
    <section
      id="bento"
      className="flex h-svh content-center items-center justify-center"
    >
      <div className="flex h-[80svh] w-[20rem] flex-col justify-center gap-4 lg:grid lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2">
        <div className="col-span-4 row-span-1 text-wrap rounded-lg outline outline-slate-500 backdrop-blur-md lg:col-span-4"></div>
        <div className="relative col-span-6 row-span-1 overflow-hidden rounded-lg outline outline-slate-500 backdrop-blur-md">
          <div className="grid h-full w-full grid-cols-2 grid-rows-4 gap-3 p-2 text-center md:grid-cols-3 lg:grid-cols-4">
            {cuencas.map((cuenca) => (
              <div
                className="content-center overflow-auto whitespace-normal rounded-md border border-white"
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

export default Bento
