import "@fontsource-variable/comfortaa"

function SkeletonBento() {
  return (
    <section
      id="bento"
      className="flex min-h-full items-center justify-center bg-gradient-to-t from-bgcolor via-bgcolor to-transparent lg:h-svh"
    >
      {/* Div Global */}
      <div className="m-24 flex flex-col justify-center gap-7 lg:m-0 lg:grid lg:h-[90svh] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}
        <div className="animate-once animate-ease-in-out z-10 col-span-4 row-span-1 flex items-center justify-center text-wrap rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm lg:col-span-4">
          <div className="animate-once animate-ease-in-out content-center justify-center rounded-lg text-center">
            <h2 className="text-6xl font-bold text-[#7387f9]">Reserva</h2>
            <div className="m-0 p-0 text-[8rem]">
              <div className="m-auto h-[210px] w-[210px] animate-pulse rounded-xl bg-blue-800"></div>
            </div>
            <h2 className="text-6xl font-bold text-[#7387f9]">Nacional</h2>
          </div>
        </div>

        {/* Segunda Col */}
        <div
          id="bd2"
          className="col-span-6 row-span-1 min-h-full min-w-full content-center justify-center rounded-lg bg-blue-950 bg-opacity-70 p-2 backdrop-blur-sm"
        >
          <div className="grid h-full w-full animate-pulse grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                className="flex flex-col content-center items-center justify-center rounded-md bg-[#273785] bg-opacity-70 p-1 text-sm transition-all"
                key={index}
              >
                <div className="mb-2 h-6 w-32 rounded-md bg-blue-800"></div>
                <div className="h-6 w-16 rounded-md bg-blue-800"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tercera Col */}
        <div className="col-span-6 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm">
          <h1 className="p-2 text-center text-3xl font-bold text-[#7387f9]">
            Fase Lunar
          </h1>
          <div className="flex h-full w-full flex-col content-center justify-center px-2 text-[15px] lg:text-[16px]"></div>
        </div>

        {/* Cuarta Col */}
        <div className="col-span-4 rounded-lg bg-blue-950 bg-opacity-70 backdrop-blur-sm">
          <h1 className="p-2 text-center text-3xl font-bold text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="flex flex-col content-center justify-center px-3">
            <table className="mb-1 w-full text-[16px]">
              <caption className="text-left font-extrabold text-[#47ff63ab]">
                Cuenca
              </caption>
              <tbody className="animate-pulse text-textprimary">
                {Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    className="transition-all"
                    key={index}
                  >
                    <td className="py-1">
                      <div className="h-4 w-32 rounded-md bg-blue-800"></div>
                    </td>
                    <td className="w-[50%] text-right lg:w-auto">
                      <div className="flex justify-end">
                        <div className="h-4 w-16 rounded-md bg-blue-800"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full p-3 text-[16px]">
              <caption className="text-left text-[16px] font-extrabold text-[#47ff63ab]">
                Embalse
              </caption>
              <tbody className="animate-pulse text-textprimary">
                {Array.from({ length: 7 }).map((_, index) => (
                  <tr
                    className="transition-all"
                    key={index}
                  >
                    <td className="py-1">
                      <div className="h-4 w-32 rounded-md bg-blue-800"></div>
                    </td>
                    <td className="text-right">
                      <div className="flex justify-end">
                        <div className="h-4 w-16 rounded-md bg-blue-800"></div>
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
