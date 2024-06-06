import '@fontsource-variable/onest'
import SvgComponent from './svg'
function Titulo() {
  return (
    <>
      <section className="relative flex h-screen flex-col items-center pt-64">
        <div className="flex max-w-[32rem] flex-col">
          <strong className="animate-gradient bg-300% z-30 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-center text-6xl text-transparent md:text-8xl">
            AcuaEs
          </strong>
          <h1 className="animate-gradient bg-300% z-30 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-center text-[30px] text-transparent md:text-[50px]">
            Cada gota cuenta{' '}
          </h1>
          <p className="mt-3 px-16 text-center text-xs text-slate-300 md:text-sm">
            Consulta las mediciones hidrogaficas de españa en un <strong>click</strong>
          </p>
        </div>

        <form className="z-10 my-14 flex max-h-14 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-xs shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] md:w-[22rem] md:text-base">
          <input
            placeholder="Orellana, Tajo, Guadiana, Zújar..."
            className="z-20 w-full bg-transparent placeholder-slate-300 placeholder-opacity-40 focus:outline-none"
          ></input>
          <button className="text-slate-400">Buscar</button>
        </form>
        <div className="flex h-screen flex-col items-center justify-end">
          <div className="w-screen">
            <SvgComponent />
          </div>
        </div>
      </section>
    </>
  )
}

export default Titulo
