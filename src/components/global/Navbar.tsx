"use client"

import { Link } from "next-view-transitions"
import { useState } from "react"
import SerchEmbMenu from "./SerchEmbMenu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div
      className={`fixed z-50 w-full animate-fade-in-down bg-[#112b27]/60 backdrop-blur-md duration-500 lg:flex lg:items-center lg:justify-center ${isMenuOpen ? "bg-gren-700 z-50 h-screen backdrop-blur-md" : "z-30 h-[4rem]"}`}
    >
      <div className="container mx-auto mt-4 flex flex-col items-center justify-between gap-10 px-4 uppercase lg:mt-0 lg:flex-row lg:px-0 xl:px-28">
        {/* Logo */}
        <div className="flex w-full justify-between lg:w-auto">
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
              width={34}
              height={34}
              stroke="#93ffb7"
              viewBox="58.63 -0.5 254.14 372.41"
            >
              {" "}
              <path d="M270.265 149.448c-36.107-47.124-70.38-78.948-73.439-141.372 0-1.836-.612-3.06-1.836-4.284-.612-3.06-3.672-4.896-6.732-3.06-3.672 0-6.731 2.448-6.731 6.732-77.112 83.232-207.468 294.372-43.452 354.959 74.052 27.541 157.896-9.791 172.584-90.576 7.955-43.451-14.69-89.35-40.394-122.399zM138.686 323.256c-17.748-10.404-28.764-31.211-34.272-49.572-2.448-9.18-3.672-18.359-3.06-27.539 3.672-15.912 8.568-31.213 14.076-46.512 3.06 13.463 9.18 26.928 17.748 36.719 19.584 21.422 59.364 34.273 70.38 61.201 6.732 16.523-19.584 30.6-30.6 34.271-11.628 3.672-24.481-2.447-34.272-8.568z"></path>{" "}
            </svg>
          </Link>

          <div className="flex items-center justify-center lg:hidden">
            <button
              className={`${isMenuOpen ? "hidden" : "animate-fade block"}`}
              onClick={toggleMenu}
            >
              <svg
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
              </svg>
            </button>

            <button
              className={`${isMenuOpen ? "animate-fade block" : "hidden"}`}
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3.04 3.04 18 18"
                width={23}
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
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="lightgreen"
                  ></path>{" "}
                </g>
              </svg>
            </button>
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
          className={`${isMenuOpen ? "animate-appearance-in flex flex-col items-center gap-4 text-2xl text-green-100 delay-200" : "hidden"}`}
        >
          <Link
            href="/cuencas"
            onClick={closeMenu}
            className="animate-fade-down transition-all animate-delay-100 hover:text-green-300"
          >
            Cuencas
          </Link>

          <Link
            href="/luna"
            onClick={closeMenu}
            className="animate-fade-down transition-all animate-delay-300 hover:text-green-300"
          >
            Calendario Lunar
          </Link>
          <Link
            href="/quienesSomos"
            onClick={closeMenu}
            className="animate-fade-down transition-all animate-delay-400 hover:text-green-300"
          >
            Quiénes Somos
          </Link>
          <SerchEmbMenu />
        </nav>
      </div>
    </div>
  )
}
