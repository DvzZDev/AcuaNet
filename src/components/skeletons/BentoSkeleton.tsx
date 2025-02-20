function SkeletonBento() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center bg-[#f1fbf7] bg-linear-to-t py-5 md:py-10 lg:h-full">
      <h1 className="text-center text-[2.3rem] leading-none font-bold text-[#1b7b6e] sm:mb-6 sm:text-[50px]">Resumen Global</h1>
      {/* Div Global */}
      <div className="mx-6 my-4 flex flex-col justify-center gap-7 md:my-8 lg:m-0 lg:grid lg:h-[46rem] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}
        <div className="animate-once bg-opacity-90 animate-ease-in-out col-span-4 row-span-1 flex justify-center rounded-xl bg-[#114d45] text-wrap shadow-2xl shadow-[#114d45] backdrop-blur-xs lg:col-span-4">
          <div className="flex h-full w-full flex-col content-center justify-evenly gap-3 rounded-xl text-center">
            <h2 className="text-3xl text-green-300 md:text-5xl">Reserva</h2>
            <div className="m-auto h-[210px] w-[210px] animate-pulse rounded-xl bg-green-100"></div>
            <h2 className="text-3xl text-green-300 md:text-5xl">Nacional</h2>
          </div>
        </div>

        {/* Segunda Col */}
        <div
          id="bd2"
          className="bg-opacity-90 col-span-6 row-span-1 flex min-h-full min-w-full content-center justify-center rounded-xl bg-[#114d45] p-2 shadow-2xl shadow-[#114d45] backdrop-blur-xs"
        >
          <div className="grid h-full w-full animate-pulse grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                className="bg-opacity-70 flex flex-col content-center items-center justify-center rounded-md bg-green-100 p-1 text-sm transition-all"
                key={index}
              >
                <div className="mb-2 h-6 w-32 rounded-md bg-green-300"></div>
                <div className="h-6 w-16 rounded-md bg-green-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tercera Col */}
        <div className="bg-opacity-90 col-span-6 rounded-xl bg-[#114d45] shadow-2xl shadow-[#114d45] backdrop-blur-xs">
          <h1 className="p-2 text-center text-4xl text-green-200">Fase Lunar</h1>
          <div className="flex h-full w-full flex-col content-center justify-center px-2 text-[15px] lg:text-[16px]"></div>
        </div>

        {/* Cuarta Col */}
        <div className="bg-opacity-90 col-span-4 rounded-xl bg-[#114d45] shadow-2xl shadow-[#114d45] backdrop-blur-xs">
          <h1 className="p-2 text-center text-3xl text-green-300">Mayor Variacion Semanal</h1>
          <div className="flex flex-col content-center justify-center px-3">
            <table className="mb-1 w-full text-[16px]">
              <caption className="text-left font-extrabold text-green-300">Cuenca</caption>
              <tbody className="animate-pulse text-green-50">
                {Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    className="transition-all"
                    key={index}
                  >
                    <td className="py-1">
                      <div className="h-4 w-32 rounded-md bg-green-300"></div>
                    </td>
                    <td className="w-[50%] text-right lg:w-auto">
                      <div className="flex justify-end">
                        <div className="h-4 w-16 rounded-md bg-green-300"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full p-3 text-[16px]">
              <caption className="text-left text-[16px] font-extrabold text-green-300">Embalse</caption>
              <tbody className="animate-pulse text-green-50">
                {Array.from({ length: 7 }).map((_, index) => (
                  <tr
                    className="transition-all"
                    key={index}
                  >
                    <td className="py-1">
                      <div className="h-4 w-32 rounded-md bg-green-300"></div>
                    </td>
                    <td className="text-right">
                      <div className="flex justify-end">
                        <div className="h-4 w-16 rounded-md bg-green-300"></div>
                      </div>
                    </td>
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

export default SkeletonBento
