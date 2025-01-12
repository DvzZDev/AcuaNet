"use client"

import { Link } from "next-view-transitions"
import SerchEmbMenu from "./SerchEmbMenu"
import UseMenuStore from "@/store/useMenuStore"
import Hamburger from "hamburger-react"

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = UseMenuStore()

  return (
    <div
      className={`fixed z-50 w-full animate-fade-in-down bg-[#112b27]/60 backdrop-blur-md duration-500 lg:flex lg:items-center lg:justify-center ${isMenuOpen ? "bg-gren-700 z-50 h-screen backdrop-blur-md" : "z-30 h-[4rem]"}`}
    >
      <div className="container mx-auto mt-2 flex flex-col items-center justify-between gap-10 px-4 uppercase lg:mt-0 lg:flex-row lg:px-0 xl:px-28">
        {/* Logo */}
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Ir a la página principal glow "
            onClick={closeMenu}
          >
            <svg
              fill="#93ffb7"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width={40}
              height={40}
              stroke="#93ffb7"
              viewBox="58.63 -0.5 254.14 372.41"
            >
              {" "}
              <path d="M270.265 149.448c-36.107-47.124-70.38-78.948-73.439-141.372 0-1.836-.612-3.06-1.836-4.284-.612-3.06-3.672-4.896-6.732-3.06-3.672 0-6.731 2.448-6.731 6.732-77.112 83.232-207.468 294.372-43.452 354.959 74.052 27.541 157.896-9.791 172.584-90.576 7.955-43.451-14.69-89.35-40.394-122.399zM138.686 323.256c-17.748-10.404-28.764-31.211-34.272-49.572-2.448-9.18-3.672-18.359-3.06-27.539 3.672-15.912 8.568-31.213 14.076-46.512 3.06 13.463 9.18 26.928 17.748 36.719 19.584 21.422 59.364 34.273 70.38 61.201 6.732 16.523-19.584 30.6-30.6 34.271-11.628 3.672-24.481-2.447-34.272-8.568z"></path>{" "}
            </svg>
          </Link>

          <div className="flex items-center justify-center lg:hidden">
            {/* <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 5 18 14"
                width={26}
                height={20}
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
                  {" "}
                  <path
                    d="M4 6H20M4 12H14M4 18H9"
                    stroke="lightgreen"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg> */}
            <Hamburger
              size={35}
              color="#93ffb7"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>

        <div className="mx-4 flex w-full items-center justify-between leading-none lg:w-auto lg:flex-grow">
          {/* Navegación */}
          <nav className="hidden gap-4 text-center text-xl leading-none text-green-100 lg:flex lg:items-center">
            <Link
              href="/cuencas"
              className="glow transition-all"
            >
              Cuencas
            </Link>

            <Link
              href="/luna"
              className="glow transition-all"
            >
              Calendario Lunar
            </Link>
            <Link
              href="/quienesSomos"
              className="glow text-nowrap transition-all"
            >
              Quiénes Somos
            </Link>
          </nav>
        </div>

        {/* Menú móvil */}
        <nav
          className={`${isMenuOpen ? "animate-appearance-in flex flex-col gap-5 text-2xl text-green-100 delay-200" : "hidden"}`}
        >
          <Link
            href="/cuencas"
            onClick={closeMenu}
            className="animate-fade-in transition-all animate-delay-100 hover:text-green-300"
          >
            Cuencas
          </Link>

          <Link
            href="/luna"
            onClick={closeMenu}
            className="animate-fade-in transition-all animate-delay-300 hover:text-green-300"
          >
            Calendario Lunar
          </Link>
          <Link
            href="/quienesSomos"
            onClick={closeMenu}
            className="animate-fade-in transition-all animate-delay-400 hover:text-green-300"
          >
            Quiénes Somos
          </Link>
          <div className="animate-fade-in transition-all animate-delay-400">
            <SerchEmbMenu />
          </div>
        </nav>
      </div>
    </div>
  )
}
