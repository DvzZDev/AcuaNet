"use client"
import EmbalseGrafico from "../cuencas/Grafico"
import { Link } from "next-view-transitions"
import { Embalses } from "@/types"

function EmbalseContent({ data }: { data: Embalses }) {
  return (
    <section className="min-fit flex justify-center bg-green-50 px-4 pb-14 text-white sm:pt-14 lg:pt-7">
      <div className="mx-4 flex min-h-full w-fit flex-col gap-4 sm:grid sm:h-[30rem] sm:w-[40rem] sm:grid-cols-8 sm:grid-rows-8 lg:w-[60rem] xl:h-fit">
        {/* Primera Columna */}

        <div className="order-1 flex justify-center rounded-lg bg-[#275e56] sm:col-span-2 sm:row-span-3 sm:rounded-lg">
          <article className="flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-3 sm:h-auto sm:w-auto md:w-[14rem]">
            <h1 className="text-2xl text-green-100 lg:text-3xl">Agua</h1>
            <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text text-transparent">
              <span className="text-4xl font-black lg:text-5xl">
                {data.agua_embalsada}
              </span>
              <span className="text-xl font-black">hm³</span>
            </div>
            <h1 className="text-2xl text-green-100 lg:text-3xl">Embalsada</h1>
          </article>
        </div>
        {/* Segunda Columna */}

        <div className="order-2 flex justify-center rounded-lg bg-[#275e56] sm:col-span-2 sm:row-span-3">
          <article className="flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-3 sm:h-auto sm:w-auto md:w-[14rem]">
            <h1 className="text-2xl text-green-100 lg:text-3xl">Capacidad</h1>
            <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text text-transparent">
              <span className="text-4xl font-black lg:text-5xl">
                {data.capacidad_total}
              </span>
              <span className="text-xl font-black">hm³</span>
            </div>
            <h1 className="text-2xl text-green-100 lg:text-3xl">Total</h1>
          </article>
        </div>
        {/* Quinta Columna (movida a la tercera posición) */}

        <div className="order-3 col-span-2 row-span-3 flex justify-center rounded-lg bg-[#275e56] sm:order-6">
          <EmbalseGrafico porcentaje={data.agua_embalsadapor ?? 0} />
        </div>
        {/* Tercera Columna (movida a la cuarta posición) */}

        <div
          key="agua"
          className="order-4 flex justify-center rounded-lg bg-[#275e56] sm:col-span-2 sm:row-span-3 sm:rounded-lg"
        >
          <article className="flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-3 sm:h-auto sm:w-auto md:w-[14rem]">
            <h1 className="text-2xl text-green-100 lg:text-3xl">Variación</h1>
            <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text text-transparent">
              <span className="text-4xl font-black lg:text-5xl">
                {data.variacion_ultima_semana}
              </span>
              <span className="text-xl font-black">hm³</span>
            </div>
            <h1 className="text-2xl text-green-100 lg:text-3xl">Sem. Ant.</h1>
          </article>
        </div>

        {/* Cuarta Columna */}
        <div
          key="agua"
          className="order-5 flex justify-center rounded-lg bg-[#275e56] sm:col-span-2 sm:row-span-3 sm:rounded-lg"
        >
          <article className="flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-3 sm:h-auto sm:w-auto md:w-[14rem]">
            <h1 className="text-2xl text-green-100 lg:text-3xl">Variación</h1>
            <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text text-transparent">
              <span className="text-4xl font-black lg:text-5xl">
                {data.variacion_ultima_semanapor}
              </span>
              <span className="text-xl font-black">%</span>
            </div>
            <h1 className="text-2xl text-green-100 lg:text-3xl">Sem. Ant.</h1>
          </article>
        </div>
        {/* Sexta Columna */}
        <div className="relative order-6 col-span-4 row-span-5 flex justify-center">
          <div className="relative col-span-4 row-span-4 flex h-[14rem] w-[14rem] justify-center overflow-hidden rounded-lg sm:h-full sm:w-full">
            <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-1 md:gap-4">
              <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-[#275e56] text-green-100">
                <h1 className="text-center text-[17px] lg:text-2xl">Misma Semana</h1>
                <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text font-black text-transparent sm:text-4xl md:text-4xl">
                  <span>{data.misma_semana_ultimo_año}</span>
                  <span className="text-lg font-bold">hm³</span>
                </div>
                <h1 className="text-center text-[17px] lg:text-2xl">hace 1 año</h1>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-[#275e56] text-green-100">
                <h1 className="text-center text-[17px] lg:text-2xl">Misma Semana</h1>
                <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text font-black text-transparent sm:text-4xl md:text-4xl">
                  <span>{data.misma_semana_ultimo_añopor}</span>
                  <span className="text-lg font-bold">%</span>
                </div>
                <h1 className="text-center text-[17px] lg:text-2xl">hace 1 año</h1>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-[#275e56] text-green-100">
                <h1 className="text-center text-[17px] lg:text-2xl">Misma Semana</h1>
                <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text font-black text-transparent sm:text-4xl md:text-4xl">
                  <span>{data.misma_semana_10años}</span>
                  <span className="text-lg font-bold">hm³</span>
                </div>
                <h1 className="text-center text-[17px] lg:text-2xl">hace 10 años</h1>
              </div>
              <div className="col-span-2 row-span-2 flex flex-col items-center justify-around rounded-xl bg-[#275e56] text-green-100">
                <h1 className="text-center text-[17px] lg:text-2xl">Misma Semana</h1>
                <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text font-black text-transparent sm:text-4xl md:text-4xl">
                  <span>{data.misma_semana_10añospor}</span>
                  <span className="text-lg font-bold">%</span>
                </div>
                <h1 className="text-center text-[17px] lg:text-2xl">hace 10 años</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Septima Columna */}

        <div
          id="embalses-div"
          className="order-7 flex items-center justify-center rounded-lg bg-[#275e56] sm:col-span-2 sm:row-span-3 sm:rounded-lg"
        >
          <Link href={"/embalses"}>
            <article className="flex h-fit w-[14rem] flex-col items-center justify-around gap-4 rounded-lg bg-[#275e56] px-4 sm:h-auto sm:w-auto sm:bg-transparent">
              <h1 className="text-2xl text-green-100 lg:text-3xl">Todos los</h1>
              <div className="bg-gradient-to-r from-green-500 to-yellow-200 bg-clip-text text-transparent">
                <div className="animate-wiggle animate-infinite">
                  <svg
                    viewBox="0 -7.5 1039 1039"
                    fill="#2bc7b2"
                    className="h-[50px] w-[50px] xl:h-[100px] xl:w-[100px]"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      strokeWidth="0"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M519.256677 497.992986c250.151904 0 519.256677-54.781579 519.256677-174.9895a38.944251 38.944251 0 0 0-77.888502 0c0 4.413682-19.472125 32.453542-112.289256 58.676005-87.364936 24.794506-204.197688 38.944251-329.078919 38.94425s-241.713983-12.981417-329.078919-38.94425C97.360627 355.716657 77.888502 327.417168 77.888502 323.003486a38.944251 38.944251 0 0 0-77.888502 0c0 120.207921 269.234587 174.9895 519.256677 174.9895zM545.089697 971.944518c-29.467816 0-59.844332 0-89.571777-1.038513a25.975815 25.975815 0 0 0-1.947213 51.925667c21.80878 0.778885 43.877189 1.168328 65.68597 1.168328h25.962834a25.962834 25.962834 0 0 0 25.962834-25.962834 25.962834 25.962834 0 0 0-26.092648-26.092648zM940.63347 903.402637l-10.90439 5.062752a25.975815 25.975815 0 1 0 21.029896 47.511986l12.981416-5.841637a26.066685 26.066685 0 0 0-23.106922-46.733101zM659.845422 966.232695l-12.981417 1.038513a25.975815 25.975815 0 0 0 1.947213 51.925668h1.947212l12.981417-1.038514a26.040722 26.040722 0 0 0-3.894425-51.925667zM366.335586 965.194181l-12.981417-1.298141a26.092648 26.092648 0 0 0-5.192567 51.925667l12.981417 1.298142h3.375168a25.975815 25.975815 0 0 0 1.817399-51.925668zM252.748188 949.876109a858.331287 858.331287 0 0 1-85.807166-19.991382 25.962834 25.962834 0 1 0-14.539187 49.848641 907.271229 907.271229 0 0 0 90.869918 21.289524 26.01476 26.01476 0 1 0 9.476435-51.146783zM835.613807 939.361162c-26.741719 6.360894-56.079721 11.942904-86.975493 16.616213a26.027741 26.027741 0 0 0 3.764611 51.925668h3.894425c32.453542-4.803124 63.2195-10.774576 90.869918-17.524913a26.157555 26.157555 0 0 0-11.553461-51.016968zM483.947223 853.424182a25.962834 25.962834 0 0 0-25.962834 25.962833 25.962834 25.962834 0 0 0 25.962834 25.962834h12.981417a25.962834 25.962834 0 0 0 0-51.925667zM780.832228 884.709396h4.413682l12.981417-2.336655a25.962834 25.962834 0 1 0-9.476435-51.016968l-12.981417 2.206841a25.962834 25.962834 0 0 0 5.062753 51.146782zM676.072193 846.544031c-28.94856 2.726098-58.935633 4.67331-89.182334 5.841637a25.962834 25.962834 0 0 0 1.038513 51.925668h1.038514c31.285215-1.168328 62.310801-3.245354 92.038246-6.101266a25.962834 25.962834 0 1 0-4.932939-51.666039zM381.783472 848.231615c-30.50633-2.466469-60.363589-5.841638-88.663078-9.995691a26.222462 26.222462 0 1 0-7.529222 51.925668c29.338002 4.283868 60.363589 7.78885 91.908432 10.385133h2.206841a26.183518 26.183518 0 0 0 2.077027-52.31511zM272.869384 796.435761a39.074065 39.074065 0 0 0 6.490708-77.888501c-164.214924-27.910046-201.341776-71.527607-201.341776-77.888502a38.944251 38.944251 0 0 0-77.888502 0c0 90.869918 144.742799 134.617294 266.248861 155.777003a39.85295 39.85295 0 0 0 6.490709 0zM999.569103 601.714507a38.944251 38.944251 0 0 0-38.944251 38.944251c0 5.452195-24.92432 38.944251-142.795586 66.724483a38.944251 38.944251 0 1 0 17.914356 75.811475c135.006736-31.804471 203.418803-79.7059 203.418803-142.795586A38.944251 38.944251 0 0 0 999.569103 601.714507zM128.775656 297.170466a38.944251 38.944251 0 0 0 54.781579-5.711823l102.163752-125.919744a51.925668 51.925668 0 0 1 74.772961-6.101266l185.764076 164.734181a39.035121 39.035121 0 1 0 51.925668-58.286562l-96.1923-85.158095 84.898467-88.143821a48.810128 48.810128 0 0 1 65.68597-4.02424l213.544308 173.821173a38.944251 38.944251 0 0 0 49.19957-60.363589L702.035027 28.065694a127.217886 127.217886 0 0 0-170.835446 10.385133l-87.105308 90.869919-31.415029-27.780233A129.814169 129.814169 0 0 0 225.74684 116.858585l-102.163751 125.919745a38.944251 38.944251 0 0 0 5.192567 54.392136zM353.743611 542.129804h77.888502v239.507142h-77.888502zM461.749 554.591964h77.888502v239.507142h-77.888502zM569.754389 554.591964h77.888501v239.507142h-77.888501zM677.889592 542.129804h77.888501v239.507142h-77.888501z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl text-green-100 lg:text-3xl">Embalses</h1>
            </article>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EmbalseContent
