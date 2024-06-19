'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
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
            <span className="mx-4 text-white">Cuencas</span>
          </Link>
          <Link href="/embalses">
            <span className="mx-4 text-white">Embalses</span>
          </Link>
          <Link href="/pluviometros">
            <span className="mx-4 text-white">Pluviometros</span>
          </Link>
          <Link href="/">
            <span className="mx-4 text-white">Quienes Somos</span>
          </Link>

          {/* Formulario de búsqueda */}
          <form className="relative">
            <input
              placeholder="Buscador"
              className="w-[10rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 focus:outline-none"
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
            className="w-[16rem] rounded-md bg-slate-900 bg-opacity-70 pl-2 pr-10 focus:outline-none"
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
          <span className="mx-4 text-white">Cuencas</span>
        </Link>
        <Link href="/embalses">
          <span className="mx-4 text-white">Embalses</span>
        </Link>
        <Link href="/pluviometros">
          <span className="mx-4 text-white">Pluviometros</span>
        </Link>
        <Link href="/">
          <span className="mx-4 text-white">Quienes Somos</span>
        </Link>
      </nav>
    </header>
  )
}
