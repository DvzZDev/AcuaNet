import React from 'react'
import EmbalseGrafico from '../cuencas/Grafico'
import Divider from '../cuencas/Divider'

function EmbalseContent({ data }) {
  return (
    <>
      <div className="m-auto h-14 w-[15rem] animate-pulse rounded-lg bg-slate-700 text-center font-telmaRegular text-[2.5rem] text-textsecondary sm:mt-10 sm:w-[20rem] sm:text-6xl lg:w-[30rem]"></div>
      <Divider />

      <section className="mb-5 flex min-h-[40rem] justify-center bg-bgcolor p-4 text-white lg:pt-1">
        <div className="mx-4 flex min-h-full w-full animate-pulse flex-col gap-4 transition-all sm:grid sm:w-[40rem] sm:grid-cols-8 sm:grid-rows-8 lg:h-[40rem] lg:w-[60rem]">
          {/* Primera Columna */}

          <div className="order-1 flex justify-center rounded-lg hover:scale-105 sm:col-span-2 sm:row-span-3 sm:rounded-lg sm:bg-slate-700">
            <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 sm:h-auto sm:w-auto sm:bg-transparent">
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
              <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
            </article>
          </div>
          {/* Segunda Columna */}

          <div className="order-2 flex justify-center hover:scale-105 sm:col-span-2 sm:row-span-3 sm:rounded-lg sm:bg-slate-700">
            <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 sm:h-full sm:w-auto sm:bg-transparent">
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
              <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
            </article>
          </div>
          {/* Quinta Columna (movida a la tercera posición) */}

          <div className="order-3 col-span-2 row-span-3 flex justify-center rounded-lg transition-all hover:scale-105 sm:order-6">
            <EmbalseGrafico porcentaje={0} />
          </div>
          {/* Tercera Columna (movida a la cuarta posición) */}

          <div className="order-4 flex justify-center transition-all hover:scale-105 sm:col-span-2 sm:row-span-3">
            <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 sm:h-full">
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
              <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
            </article>
          </div>
          {/* Cuarta Columna (movida a la quinta posición) */}
          <div className="order-5 flex justify-center transition-all hover:scale-105 sm:col-span-2 sm:row-span-3">
            <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 sm:h-full">
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
              <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
            </article>
          </div>
          {/* Sexta Columna */}
          <div className="relative order-6 col-span-4 row-span-5 flex justify-center transition-all">
            <div className="relative col-span-4 row-span-4 flex h-[14rem] w-[14rem] justify-center overflow-hidden rounded-lg transition-all sm:h-full sm:w-full">
              <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-1 md:gap-4">
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-slate-800 text-textprimary transition-all hover:scale-95">
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                  <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-slate-800 text-textprimary transition-all hover:scale-95">
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                  <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-slate-800 text-textprimary transition-all hover:scale-95">
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                  <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-slate-800 text-textprimary transition-all hover:scale-95">
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                  <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="h-8 w-32 rounded-lg bg-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Septima Columna */}

          <div className="order-7 flex justify-center rounded-lg hover:scale-105 sm:col-span-2 sm:row-span-3 sm:rounded-lg sm:bg-slate-700">
            <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 sm:h-auto sm:w-auto sm:bg-transparent">
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
              <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="h-8 w-32 rounded-lg bg-slate-800"></div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmbalseContent
