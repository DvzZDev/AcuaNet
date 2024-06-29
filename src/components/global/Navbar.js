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
    <div
      id="header-nav"
      className={`flex items-center flex-col fixed top-0 w-full px-3 py-2 uppercase backdrop-blur-3xl transition-all duration-500 ${isMenuOpen ? 'z-10 h-screen bg-[#040513]' : 'z-10 h-[5rem]'}`}
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
          className={`mr-2 md:hidden ${isMenuOpen ? 'hidden' : 'block animate-fade'}`}
          src="/menu.svg"
          alt="menu icon"
          width={30}
          height={20}
          onClick={toggleMenu}
        />

        {/* Icono de cierre */}
        <Image
          className={`mr-2 md:hidden ${isMenuOpen ? 'block animate-fade' : 'hidden'}`}
          src="/close.svg"
          alt="close icon"
          width={20}
          height={20}
          onClick={toggleMenu}
        />

        {/* Navegación */}
        <nav className="hidden md:flex text-xl text-textprimary">
          {/* Enlaces */}
          <Link href="/cuencas" className="mx-4 transition-all hover:glow">
            Cuencas
          </Link>
          <Link href="/embalses" className="mx-4 transition-all hover:glow">
            Embalses
          </Link>
          <Link href="/pluviometros" className="mx-4 transition-all hover:glow">
            Pluviometros
          </Link>
          <Link href="/quienesSomos" className="mx-4 transition-all hover:glow">
            Quienes Somos
          </Link>

          {/* Formulario de búsqueda */}
          <Search data={data} />
        </nav>
      </div>

      {/* Menú móvil */}
      <nav className={`${isMenuOpen ? 'mt-12 flex flex-col items-center gap-12 text-2xl text-textprimary' : 'hidden'}`}>
        {/* Enlaces */}
        <Link href="/cuencas" onClick={closeMenu} className="animate-fade-down animate-delay-0 mx-4 transition-all hover:text-green-300">
          Cuencas
        </Link>
        <Link href="/embalses" onClick={closeMenu} className="animate-fade-down animate-delay-100 mx-4 transition-all hover:text-green-300">
          Embalses
        </Link>
        <Link href="/pluviometros" onClick={closeMenu} className="animate-fade-down animate-delay-200 mx-4 transition-all hover:text-green-300">
          Pluviometros
        </Link>
        <Link href="/quienes_somos" onClick={closeMenu} className="animate-fade-down animate-delay-300 mx-4 transition-all hover:text-green-300">
          Quienes Somos
        </Link>

        {/* Formulario de búsqueda */}
        <div className="animate-fade-down animate-delay-400">
          <SearchMov closeMenu={closeMenu} data={data} />
        </div>
      </nav>
    </div>
  )
}
