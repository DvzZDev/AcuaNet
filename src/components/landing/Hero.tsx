import FavSection from "./FavSection"
import SerchEmb from "./SerchEmb"
import Patrocinio from "./Patrocinio"
import { Suspense } from "react"
import SkeletonFavorites from "../skeletons/SkeletonFavorites"

export default async function Hero() {
  return (
    <div
      id="search"
      className="-z-10 h-screen animate-blurred-fade-in bg-green-100/10"
    >
      <section className="relative z-10 flex flex-col items-center">
        <div className="mb-1 mt-4 flex w-[6rem] max-w-xs animate-blurred-fade-in justify-center duration-700 sm:w-[8rem] md:mb-6 xl:mt-16 2xl:mt-22">
          {/* <svg
            fill="#93ffb7"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={100}
            height={100}
            stroke="#93ffb7"
            viewBox="58.63 -0.5 254.14 372.41"
          >
            {" "}
            <path d="M270.265 149.448c-36.107-47.124-70.38-78.948-73.439-141.372 0-1.836-.612-3.06-1.836-4.284-.612-3.06-3.672-4.896-6.732-3.06-3.672 0-6.731 2.448-6.731 6.732-77.112 83.232-207.468 294.372-43.452 354.959 74.052 27.541 157.896-9.791 172.584-90.576 7.955-43.451-14.69-89.35-40.394-122.399zM138.686 323.256c-17.748-10.404-28.764-31.211-34.272-49.572-2.448-9.18-3.672-18.359-3.06-27.539 3.672-15.912 8.568-31.213 14.076-46.512 3.06 13.463 9.18 26.928 17.748 36.719 19.584 21.422 59.364 34.273 70.38 61.201 6.732 16.523-19.584 30.6-30.6 34.271-11.628 3.672-24.481-2.447-34.272-8.568z"></path>{" "}
          </svg> */}
          <img
            alt="logonavidad"
            src="/logonav.webp"
          />
        </div>
        <div className="flex flex-col xl:w-[60%]">
          <strong className="mb-4 w-full animate-blurred-fade-in text-center text-[60px] font-black leading-none text-green-100 duration-700 animate-delay-100 sm:text-[4rem] 2xl:text-[5rem]">
            AcuaNet
          </strong>
          <h1 className="max-w-80 animate-blurred-fade-in px-4 text-center text-[1.5rem] text-green-100 duration-700 animate-delay-200 sm:max-w-full sm:text-[35px] 2xl:text-[2rem]">
            Herramienta definitíva para tus jornadas de pesca. <br />
          </h1>
        </div>
        <div className="z-30 mt-5 flex animate-blurred-fade-in flex-col gap-3 duration-700 animate-delay-300 sm:gap-10 md:flex-row">
          <SerchEmb />
        </div>
        <div className="animate-blurred-fade-in duration-700 animate-delay-400">
          <Suspense fallback={<SkeletonFavorites />}>
            <FavSection />
          </Suspense>
        </div>
        <Patrocinio />
      </section>
    </div>
  )
}
