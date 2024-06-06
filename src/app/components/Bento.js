function Bento() {
  return (
    <section id="bento" className="flex h-svh content-center justify-center items-center">
      <div className="flex justify-center h-[75svh] w-[20rem] flex-col gap-4 lg:grid lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2">
        <div className="col-span-4 row-span-1 text-wrap rounded-lg backdrop-blur-md outline outline-slate-500 lg:col-span-4">
          Columna 1
        </div>
        <div className="col-span-6 row-span-1 rounded-lg backdrop-blur-md outline outline-slate-500 ">Columna 2</div>
        <div className="col-span-5 rounded-lg backdrop-blur-md outline outline-slate-500 ">Columna 3</div>
        <div className="col-span-5 rounded-lg backdrop-blur-md outline outline-slate-500 ">Columna 4</div>
      </div>
    </section>
  )
}

export default Bento
