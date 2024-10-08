"use client"

import { Link } from "next-view-transitions"
import { useState } from "react"
import Search from "./Search"
import SearchMov from "./SerchMov"

export default function Navbar({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div
      id="header-nav"
      className={`fixed z-20 w-full p-4 duration-500 ${isMenuOpen ? "z-50 h-screen bg-[#040513d6] backdrop-blur-md" : "z-30 h-[5rem]"}`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 uppercase lg:flex-row xl:px-28">
        {/* Logo */}
        <div className="flex w-full justify-between lg:w-auto">
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Ir a la página principal"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Capa 1"
              viewBox="96.65 47.91 306.7 404.17"
              className="animate-fade h-12 w-12"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#09f"
                  />
                  <stop
                    offset="100%"
                    stopColor="#8942b0"
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M249.68 452.08c-111.28.37-181.47-105.13-141.88-191.97 21.39-46.91 50.2-89.63 79.48-132.4 17.2-25.12 35.41-49.47 54.43-73.42 7.15-9 10.92-8.08 17.67.25 44.66 55.06 83.31 113.52 118.12 174.15 6.9 12.01 12.7 24.7 17.51 37.55 33.2 88.81-36.22 186.38-145.34 185.84Zm-58.9-303.35c10.34 1.27 20.59 2.81 30.8 4.87 11.2 2.26 21.97 11.95 33.88 6.68 18.2-8.06 36.73-12.76 59.37-9.31-20.33-26.6-35.4-52.77-54.67-76.6-8.64-10.69-12.31-8.69-19.66.52-18.68 23.4-34.89 48.18-50.82 73.14l-1.35 2.16c.81-.49 1.63-.97 2.44-1.46Zm180.13 221.02c-38.31 15.09-72.02 9.06-103.49-16.18-23.37-18.75-48.64-35.58-73.78-52.37-15.21-10.16-32.8-15.38-52.08-13.33-18.82 2.01-38.03 18.9-35.08 33 6.51 31.09 18.45 60.01 44.06 82.99 67.83 60.84 181.85 45.39 223.79-30.63.42-1.27.85-2.53 1.27-3.8-1.56.11-3.13.21-4.69.32Zm17.15-83.01c-1.14-12.2-5.88-21.53-10.59-30.85-17.92-35.43-37.97-43.84-79.04-32.77-43.04 11.6-78.46 35.98-116.35 57.61 13.06 8.04 25.42 14.86 36.84 22.83 33.2 23.16 32.8 23.07 64.61-1.7 30.68-23.89 63.62-38.49 104.54-15.12Zm-34.86-.54c-27.98-.13-45.93 11.25-62.71 25.09-9.28 7.65-26.98 15.51-26.45 22.34.84 10.83 18.82 14.44 29.65 21.01 30.67 18.58 56.61 16.94 82.34-5.98 11.89-10.59 19.86-23.08 13.37-38.9-6.89-16.78-21.74-23.12-36.19-23.56Zm-207.58-74.55c34.64-9.39 64.87.32 94.59 13.02 5.03 2.15 9.66 4.65 16.07 1.96 15.02-6.32 30.49-11.75 47.79-18.3-27.02-14.13-48.48-32.81-76.03-42.47-28.24-9.91-48.91-3.49-64.85 19.73-5.6 8.15-11.04 16.39-17.56 26.08Zm-32.48 75.88c20.96-16.04 45.7-6.75 64.9-18.39 18.34-11.12 37.42-21.23 56.55-31.99-57.45-37.93-106.34-19.04-121.45 50.38Zm239.53-76.82c-24.56-49.1-50.41-60.93-88.04-39.72 27.58 16.2 51.78 36.54 88.04 39.72Z"
                className="cls-1"
              />
              <path
                fill="url(#a)"
                d="m397.91 300.46-1.89 1.17c.35-.58.69-1.16 1.04-1.73l.85.56Z"
                className="cls-1"
              />
            </svg>
          </Link>

          <div className="flex items-center justify-center lg:hidden">
            <button
              className={`${isMenuOpen ? "hidden" : "animate-fade block"}`}
              src="/menu.svg"
              alt="menu icon"
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
                  stroke-width="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 6H20M4 12H14M4 18H9"
                    stroke="#ffd700"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="#ffd700"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="mx-4 flex w-full items-center justify-between leading-none lg:w-auto lg:flex-grow">
          {/* Navegación */}
          <nav className="hidden gap-4 text-center text-2xl leading-none text-textprimary lg:flex lg:items-center">
            <Link
              href="/cuencas"
              className="glow transition-all"
            >
              Cuencas
            </Link>
            <Link
              href="/embalses"
              className="glow transition-all"
            >
              Embalses
            </Link>
            <Link
              href="/quienesSomos"
              className="glow text-nowrap transition-all"
            >
              Quiénes Somos
            </Link>
            <Link
              href="/contacto"
              className="glow transition-all"
            >
              Contacto
            </Link>
          </nav>

          {/* Formulario de búsqueda */}
          <div className="hidden justify-end lg:flex">
            <Search data={data} />
          </div>
        </div>

        {/* Menú móvil */}
        <nav
          className={`${isMenuOpen ? "flex flex-col items-center gap-12 text-2xl text-textprimary" : "hidden"}`}
        >
          <div className="animate-fade-down animate-delay-75 z-50">
            <SearchMov
              closeMenu={closeMenu}
              data={data}
              isMenuOpen={isMenuOpen}
            />
          </div>
          <Link
            href="/cuencas"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-100 transition-all hover:text-green-300"
          >
            Cuencas
          </Link>
          <Link
            href="/embalses"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-200 transition-all hover:text-green-300"
          >
            Embalses
          </Link>
          <Link
            href="/pluviometros"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-300 transition-all hover:text-green-300"
          >
            Pluviómetros
          </Link>
          <Link
            href="/quienesSomos"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-400 transition-all hover:text-green-300"
          >
            Quiénes Somos
          </Link>
          <Link
            href="/contacto"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-500 transition-all hover:text-green-300"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  )
}
