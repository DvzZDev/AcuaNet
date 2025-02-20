import FavSection from "./FavSection"
import SearchEmb from "./SearchEmb"
// import Patrocinio from "./Patrocinio"
import { Suspense } from "react"
import SkeletonFavorites from "../skeletons/SkeletonFavorites"

export default async function Hero() {
  return (
    <div className="animate-blurred-fade-in -z-10 h-fit bg-black/40 py-10 lg:h-svh">
      <section className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 px-2 lg:gap-6 xl:w-[60rem] 2xl:gap-8">
          <svg
            fill="#93ffb7"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            stroke="#93ffb7"
            className="w-[50px] lg:w-[65px] 2xl:w-[80px]"
            style={{ filter: "drop-shadow(0 0 12px #93ffb767)" }}
            viewBox="58.63 -0.5 254.14 372.41"
          >
            {" "}
            <path d="M270.265 149.448c-36.107-47.124-70.38-78.948-73.439-141.372 0-1.836-.612-3.06-1.836-4.284-.612-3.06-3.672-4.896-6.732-3.06-3.672 0-6.731 2.448-6.731 6.732-77.112 83.232-207.468 294.372-43.452 354.959 74.052 27.541 157.896-9.791 172.584-90.576 7.955-43.451-14.69-89.35-40.394-122.399zM138.686 323.256c-17.748-10.404-28.764-31.211-34.272-49.572-2.448-9.18-3.672-18.359-3.06-27.539 3.672-15.912 8.568-31.213 14.076-46.512 3.06 13.463 9.18 26.928 17.748 36.719 19.584 21.422 59.364 34.273 70.38 61.201 6.732 16.523-19.584 30.6-30.6 34.271-11.628 3.672-24.481-2.447-34.272-8.568z"></path>{" "}
          </svg>
          <h2 className="animate-blurred-fade-in animate-delay-100 w-[22rem] text-center text-[35px] leading-none font-semibold text-green-100 duration-700 sm:w-[40rem] sm:text-[3rem] xl:w-full 2xl:text-6xl">
            Planificar tus salidas de <span className="glow2 text-[#93ffb7]">pesca</span> nunca había sido tan{" "}
            <span className="glow2 text-[#93ffb7]">fácil</span>
          </h2>
          <h2 className="animate-blurred-fade-in animate-delay-200 max-w-[20rem] text-center text-sm font-light text-[#93ffb7] sm:text-lg md:max-w-[50rem] md:text-xl">
            Estado actualizado de embalses, meteorología, mapas y tablas lunares en AcuaNet. <br />
          </h2>
          <div className="animate-blurred-fade-in animate-delay-300 z-30 mt-4 flex duration-700">
            <SearchEmb />
          </div>
          <div className="animate-blurred-fade-in animate-delay-400 duration-700">
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
