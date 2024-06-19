import '@fontsource-variable/onest'
import Arrow from './Arrow'
import Type from './Type'
function Intro() {
  return (
    <>
      <section className="animate-fade-up animate-once animate-ease-in-out relative flex h-screen flex-col items-center pt-28 md:pt-48">
        <div className="flex flex-col xl:w-[60%]">
          <strong className="z-30 animate-gradient bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 bg-300% bg-clip-text text-center text-[3rem] text-transparent lg:text-[5rem] font-telma">
            AcuaEs
          </strong>
          <h1 className="z-30 animate-gradient bg-gradient-to-r from-pink-700 via-blue-500 to-green-400 bg-300% bg-clip-text px-6 text-center text-[2rem] text-transparent lg:text-[3rem]">
            Consulta las mediciones hidrograficas de España en un solo
            <strong> click</strong>
          </h1>
        </div>

        <form className="z-10 my-14 flex max-h-16 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-sm shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] sm:w-[20rem] sm:text-base md:w-[25rem] md:text-base">
          <Type />
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

export default Intro
