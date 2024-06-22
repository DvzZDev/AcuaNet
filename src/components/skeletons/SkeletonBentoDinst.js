function SkeletonBentoDist() {
  return (
    <div className="mx-4 flex min-h-full w-[20rem] animate-pulse flex-col gap-4 sm:grid sm:h-[27rem] sm:w-[40rem] sm:grid-cols-8 sm:grid-rows-8 lg:h-[40rem] lg:w-[60rem]">
      {/* Primera Columna */}

      <div className="col-span-2 row-span-3 rounded bg-slate-700 transition-all hover:scale-105">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[40%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
        </article>
      </div>
      {/* Segunda Columna */}

      <div className="col-span-2 row-span-3 rounded bg-slate-700 transition-all hover:scale-105">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[40%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
        </article>
      </div>
      {/* Tercera Columna */}

      <div className="col-span-2 row-span-3 rounded bg-slate-700 transition-all hover:scale-105">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[40%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
        </article>
      </div>
      {/* Cuarta Columna */}
      <div className="col-span-2 row-span-3 rounded bg-slate-700 transition-all hover:scale-105">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[40%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
        </article>
      </div>
      {/* Quinta Columna */}

      <div className="col-span-2 row-span-3 rounded-lg bg-slate-700 transition-all hover:scale-105">
        <div className="flex h-full items-center justify-center">
          <div className="w h-32 w-32 animate-pulse rounded-full bg-slate-400 sm:h-[70%] sm:w-[70%]"></div>
        </div>
      </div>
      {/* Sexta Columna */}

      <div className="relative col-span-4 row-span-4 overflow-hidden rounded-lg bg-slate-700 transition-all hover:scale-125">
        <div className="flex h-full animate-pulse items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={40}
            height={40}
          >
            <g>
              <g
                fill="none"
                fillRule="evenodd"
                strokeWidth="0"
              >
                <g
                  fill="#fff"
                  transform="translate(-360 -99)"
                >
                  <path d="M368 109a2 2 0 11.001-4.001A2 2 0 01368 109zm0-6a4 4 0 100 8 4 4 0 000-8zm22 13.128L384 110l-9.941 10.111L370 116l-8 7.337V103a2 2 0 012-2h24a2 2 0 012 2v13.128zM390 127a2 2 0 01-2 2h-5.168l-7.368-7.465 8.536-8.536 6 6V127zm-26 2a2 2 0 01-2-2v-.939l7.945-7.116L380.001 129H364zm24-30h-24a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4v-24a4 4 0 00-4-4z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {/* Septima Columna */}

      <div className="col-span-2 row-span-3 rounded bg-slate-700 transition-all hover:scale-105">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
          <div className="flex h-[40%] w-[60%] animate-pulse items-center justify-center rounded-lg bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width={40}
              height={40}
            >
              <g>
                <g
                  fill="none"
                  fillRule="evenodd"
                  strokeWidth="0"
                >
                  <g
                    fill="#fff"
                    transform="translate(-360 -99)"
                  >
                    <path d="M368 109a2 2 0 11.001-4.001A2 2 0 01368 109zm0-6a4 4 0 100 8 4 4 0 000-8zm22 13.128L384 110l-9.941 10.111L370 116l-8 7.337V103a2 2 0 012-2h24a2 2 0 012 2v13.128zM390 127a2 2 0 01-2 2h-5.168l-7.368-7.465 8.536-8.536 6 6V127zm-26 2a2 2 0 01-2-2v-.939l7.945-7.116L380.001 129H364zm24-30h-24a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4v-24a4 4 0 00-4-4z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="h-[20%] w-[60%] animate-pulse rounded-lg bg-slate-400"> </div>
        </article>
      </div>
    </div>
  )
}

export default SkeletonBentoDist
