'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useState } from 'react'
import Search from './Search'
import SearchMov from './SerchMov'

export default function Navbar({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div
        id="header-nav"
        className={`fixed top-0 flex h-[6rem] w-full items-center justify-center px-3 py-2 uppercase backdrop-blur-3xl transition-all duration-500 ${isMenuOpen ? 'z-10 h-screen bg-[#040513]' : 'z-10 h-[7%]'}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={45}
              height={45}
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
          <nav className="hidden text-textprimary md:flex text-xl">
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
            <Link href="/quienesSomos">
              <h2 className="hover: glow mx-4 transition-all">Quienes Somos</h2>
            </Link>

            {/* Formulario de búsqueda */}
            <Search data={data} />
          </nav>
        </div>

        {/* Menú móvil */}
        <nav
          className={`${isMenuOpen ? 'm-auto mt-12 flex flex-col justify-center gap-12 text-2xl text-textprimary transition-all' : 'hidden'}`}
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
          <div className="animate-fade-down animate-delay-400">
            <SearchMov
              closeMenu={closeMenu}
              data={data}
            />
          </div>
        </nav>
      </div>
    </>
  )
}
