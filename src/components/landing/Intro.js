import '@fontsource-variable/onest'
import Arrow from './Arrow'
import Type from './Type'
function Intro() {
  return (
    <>
      <section
        id="intromain"
        className="relative flex h-screen animate-fade-up flex-col items-center pt-12 animate-once animate-ease-in-out md:pt-20"
      >
        <div className="flex flex-col xl:w-[60%]">
          <strong className="text-center font-telma text-[5rem] text-textsecondary sm:text-[7rem]">
            AcuaEs
          </strong>
          <h1 className="px-6 text-center text-[2rem] text-[#fbffb8] lg:text-[3rem]">
            Consulta las mediciones hidrograficas de España en un solo
            <strong className="text-textsecondary"> click</strong>
          </h1>
        </div>

        <form className="md:text-base< z-10 my-14 flex max-h-16 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-sm transition-all focus-within:border-blue-300 sm:w-[20rem] sm:text-base md:w-[25rem]">
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
