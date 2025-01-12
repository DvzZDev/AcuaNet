import FavSection from "./FavSection"
import SerchEmb from "./SerchEmb"
// import Patrocinio from "./Patrocinio"
import { Suspense } from "react"
import SkeletonFavorites from "../skeletons/SkeletonFavorites"

export default async function Hero() {
  return (
    <div
      id="search"
      className="-z-10 h-screen animate-blurred-fade-in bg-green-100/10"
    >
      <section className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 px-2 md:gap-8 xl:w-[60rem]">
          <h1 className="w-[22rem] animate-blurred-fade-in text-center text-[35px] font-black leading-none text-green-100 duration-700 animate-delay-100 sm:w-[40rem] sm:text-[3rem] md:w-full 2xl:text-6xl">
            Planificar tus salidas de <span className="glow2 text-[#93ffb7]">pesca</span> nunca había sido tan{" "}
            <span className="glow2 text-[#93ffb7]">fácil</span>
          </h1>
          <h2 className="max-w-[17rem] text-center text-sm text-[#93ffb7] sm:text-lg md:max-w-[50rem] md:text-2xl">
            Estado actualizado de embalses, clima, mapas y tablas lunares en AcuaNet. <br />
          </h2>
          <div className="z-30 mt-4 flex animate-blurred-fade-in duration-700 animate-delay-300">
            <SerchEmb />
          </div>
          <div className="animate-blurred-fade-in duration-700 animate-delay-400">
            <Suspense fallback={<SkeletonFavorites />}>
              <FavSection />
            </Suspense>
          </div>
        </div>
        {/* <Patrocinio /> */}
      </section>
    </div>
  )
}
