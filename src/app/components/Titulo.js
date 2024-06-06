import '@fontsource-variable/onest'
import Arrow from './Arrow'

function Titulo() {
  return (
    <>
      <section className="relative flex h-screen flex-col items-center pt-28 md:pt-48">
        <div className="flex max-w-[32rem] flex-col">
          <strong className="z-30 animate-gradient bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 bg-300% bg-clip-text text-center text-[4rem] text-transparent">
            AcuaEs
          </strong>
          <h1 className="md: z-30 animate-gradient bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 bg-300% bg-clip-text px-6 text-center text-[2rem] text-transparent">
            Consulta las mediciones hidrograficas de España en un solo 
            <strong> click</strong>
          </h1>
        </div>

        <form className="z-10 my-14 flex max-h-16 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-sm shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] sm:w-[20rem] sm:text-base md:w-[25rem] md:text-base">
          <input
            placeholder="Orellana, Tajo, Guadiana, Zújar..."
            className="z-20 w-full bg-transparent placeholder-slate-300 placeholder-opacity-40 focus:outline-none"
          ></input>
          <button className="text-slate-400">Buscar</button>
        </form>
        <div className="h-[1rem] w-[10rem]">
          <Arrow />
        </div>
        <div className="flex h-screen flex-col items-center justify-end"></div>
      </section>
    </>
  )
}

export default Titulo
