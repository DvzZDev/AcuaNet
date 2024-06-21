'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <div
        id="header-nav"
        className={`fixed top-0 z-50 w-full px-3 py-2 backdrop-blur-2xl ${isMenuOpen ? 'h-full bg-[#2e0b8e2a] transition-all' : 'h-[3.6rem] transition-all'}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={35}
              height={20}
            />
          </Link>

          {/* Icono de menú */}
          <Image
            className={`mr-2 md:hidden ${isMenuOpen ? 'hidden' : 'flex'}`}
            src="/menu.svg"
            alt="menu icon"
            width={30}
            height={20}
            onClick={toggleMenu}
          />

          {/* Icono de cierre */}
          <Image
            className={`mr-2 md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}
            src="/close.svg"
            alt="menu icon"
            width={20}
            height={20}
            onClick={toggleMenu}
          />

          {/* Navegación */}
          <nav className="hidden md:flex">
            {/* Enlaces */}
            <Link href="/cuencas">
              <h2 className="mx-4 text-textprimary transition-all hover:scale-110 hover:text-green-300">
                Cuencas
              </h2>
            </Link>
            <Link href="/embalses">
              <h2 className="mx-4 text-textprimary transition-all hover:scale-110 hover:text-green-300">
                Embalses
              </h2>
            </Link>
            <Link href="/pluviometros">
              <h2 className="mx-4 text-textprimary transition-all hover:scale-110 hover:text-green-300">
                Pluviometros
              </h2>
            </Link>
            <Link href="/">
              <h2 className="mx-4 text-textprimary transition-all hover:scale-110 hover:text-green-300">
                Quienes Somos
              </h2>
            </Link>

            {/* Formulario de búsqueda */}
            <form className="relative">
              <input
                placeholder="Buscador"
                className="w-[10rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 outline-none transition-all focus:bg-slate-900 focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
              />
              <button className="absolute right-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-2">
                <Image
                  src="/lupa.svg"
                  alt="search icon"
                  width={16}
                  height={20}
                />
              </button>
            </form>
          </nav>
        </div>

        {/* Menú móvil */}
        <nav
          className={`${isMenuOpen ? 'm-auto flex h-[70%] flex-col items-center justify-center gap-4 text-2xl' : 'hidden'}`}
        >
          {/* Formulario de búsqueda */}
          <form className="relative">
            <input
              placeholder="Buscador"
              className="w-[15rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 outline-none transition-all focus:bg-slate-900 focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
            />
            <button className="absolute right-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-2">
              <Image
                src="/lupa.svg"
                alt="search icon"
                width={16}
                height={20}
              />
            </button>
          </form>

          {/* Enlaces */}
          <Link href="/cuencas">
            <span className="mx-4 text-white transition-all hover:text-green-300">
              Cuencas
            </span>
          </Link>
          <Link href="/embalses">
            <span className="mx-4 text-white transition-all hover:text-green-300">
              Embalses
            </span>
          </Link>
          <Link href="/pluviometros">
            <span className="mx-4 text-white transition-all hover:text-green-300">
              Pluviometros
            </span>
          </Link>
          <Link href="/">
            <span className="mx-4 text-white transition-all hover:text-green-300">
              Quienes Somos
            </span>
          </Link>
        </nav>
      </div>
    </>
  )
}
