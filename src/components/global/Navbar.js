'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div
        id="header-nav"
        className={`fixed top-0 z-50 w-full px-3 py-2 uppercase backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? 'h-[45%] bg-[#040513]' : 'h-[7%]'}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={35}
              height={20}
              onClick={closeMenu}
            />
          </Link>

          {/* Icono de menú */}
          <Image
            className={`mr-2 md:hidden ${isMenuOpen ? 'hidden' : 'flex animate-fade'}`}
            src="/menu.svg"
            alt="menu icon"
            width={30}
            height={20}
            onClick={toggleMenu}
          />

          {/* Icono de cierre */}
          <Image
            className={`mr-2 md:hidden ${isMenuOpen ? 'flex animate-fade' : 'hidden'}`}
            src="/close.svg"
            alt="menu icon"
            width={20}
            height={20}
            onClick={toggleMenu}
          />

          {/* Navegación */}
          <nav className="hidden text-textprimary md:flex">
            {/* Enlaces */}
            <Link href="/cuencas">
              <h2 className="hover: glow mx-4 transition-all">Cuencas</h2>
            </Link>
            <Link href="/embalses">
              <h2 className="hover: glow mx-4 transition-all">Embalses</h2>
            </Link>
            <Link href="/pluviometros">
              <h2 className="hover: glow mx-4 transition-all">Pluviometros</h2>
            </Link>
            <Link href="/quienes_somos">
              <h2 className="hover: glow mx-4 transition-all">Quienes Somos</h2>
            </Link>

            {/* Formulario de búsqueda */}
            <form className="relative">
              <input
                placeholder="Buscador"
                className="w-[10rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 outline-none transition-all placeholder:text-textprimary placeholder:opacity-60 focus:bg-slate-900 focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              />
              <button className="absolute right-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-2">
                <svg
                  fill="#c0bfb7"
                  enable-background="new 0 0 32 32"
                  height={17}
                  width={20}
                  viewBox="4 4 24 24"
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
                    <path
                      d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                      id="XMLID_223_"
                    ></path>
                  </g>
                </svg>
              </button>
            </form>
          </nav>
        </div>

        {/* Menú móvil */}
        <nav
          className={`${isMenuOpen ? 'm-auto mt-5 flex flex-col justify-center gap-7 text-2xl text-textprimary transition-all' : 'hidden'}`}
        >
          {/* Enlaces */}
          <Link
            href="/cuencas"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-0"
          >
            <span className="mx-4 transition-all hover:text-green-300">Cuencas</span>
          </Link>
          <Link
            href="/embalses"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-100"
          >
            <span className="mx-4 transition-all hover:text-green-300">Embalses</span>
          </Link>
          <Link
            href="/pluviometros"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-200"
          >
            <span className="mx-4 transition-all hover:text-green-300">Pluviometros</span>
          </Link>
          <Link
            href="/quienes_somos"
            onClick={closeMenu}
            className="animate-fade-down animate-delay-300"
          >
            <span className="mx-4 transition-all hover:text-green-300">
              Quienes Somos
            </span>
          </Link>

          {/* Formulario de búsqueda */}
          <form className="relative mx-4 w-[15rem] animate-fade-down animate-delay-500">
            <input
              placeholder="Buscador"
              className="w-[15rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 outline-none transition-all placeholder:text-textprimary placeholder:opacity-60 focus:bg-slate-900 focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-textprimary focus:ring-opacity-50"
            />
            <button className="absolute right-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-2">
              <svg
                fill="#c0bfb7"
                enable-background="new 0 0 32 32"
                height={20}
                width={20}
                viewBox="4 4 24 24"
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
                  <path
                    d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                    id="XMLID_223_"
                  ></path>
                </g>
              </svg>
            </button>
          </form>
        </nav>
      </div>
    </>
  )
}
