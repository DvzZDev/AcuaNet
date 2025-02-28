"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import { Link } from "next-view-transitions"
import UseMenuStore from "@/store/useMenuStore"
import Hamburger from "hamburger-react"
import SerchEmbMenu from "./SearchMenu"

function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

function useScroll() {
  const [scrollState, setScrollState] = useState({ isScrollingDown: false, isAtTop: true })
  const lastScrollY = useRef(0)
  const lastTimeRef = useRef(Date.now())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()

      // Ignorar cambios muy pequeños en el scroll (menos de 5px)
      if (Math.abs(currentScrollY - lastScrollY.current) < 40) {
        return
      }

      // Asegurarse de que ha pasado suficiente tiempo entre actualizaciones
      if (currentTime - lastTimeRef.current < 100) {
        return
      }

      const isScrollingDown = currentScrollY > lastScrollY.current
      const isAtTop = currentScrollY < 300

      setScrollState({ isScrollingDown, isAtTop })

      lastScrollY.current = currentScrollY
      lastTimeRef.current = currentTime
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return scrollState
}

const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="fidoDido"
        cx={19.38}
        cy={42.035}
        r={44.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          stopColor="#fd5"
        />
        <stop
          offset={0.328}
          stopColor="#ff543f"
        />
        <stop
          offset={0.348}
          stopColor="#fc5245"
        />
        <stop
          offset={0.504}
          stopColor="#e64771"
        />
        <stop
          offset={0.643}
          stopColor="#d53e91"
        />
        <stop
          offset={0.761}
          stopColor="#cc39a4"
        />
        <stop
          offset={0.841}
          stopColor="#c837ab"
        />
      </radialGradient>
      <path
        fill={`url(#${"fidoDido"})`}
        d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
      />
      <path
        fill="#fff"
        d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      />
      <circle
        cx={31.5}
        cy={16.5}
        r={1.5}
        fill="#fff"
      />
      <path
        fill="#fff"
        d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
      />
    </svg>
  )
}

const NavLinks = ({ mobile = false, onClickLink }: { mobile?: boolean; onClickLink?: () => void }) => (
  <>
    <Link
      href="/cuencas"
      onClick={onClickLink}
      className={`glow transition-all ${mobile ? "animate-fade-in animate-delay-100 hover:text-green-300" : ""}`}
    >
      Cuencas
    </Link>
    <Link
      href="/luna"
      onClick={onClickLink}
      className={`glow text-nowrap transition-all ${mobile ? "animate-fade-in animate-delay-300 hover:text-green-300" : ""}`}
    >
      Calendario Lunar
    </Link>
    <a
      href="/visor"
      onClick={onClickLink}
      className={`glow text-nowrap transition-all ${mobile ? "animate-fade-in animate-delay-400 hover:text-green-300" : ""}`}
    >
      AcuaVisor
    </a>
    <Link
      href="/quienesSomos"
      onClick={onClickLink}
      className={`glow text-nowrap transition-all ${mobile ? "animate-fade-in animate-delay-400 hover:text-green-300" : ""}`}
    >
      Quiénes Somos
    </Link>
    <Link
      href="https://www.instagram.com/acuanet.es/"
      onClick={onClickLink}
      className={`glow flex items-center gap-1 text-nowrap transition-all ${mobile ? "animate-fade-in animate-delay-400 hover:text-green-300" : ""}`}
    >
      <p>¡Síguenos!</p>
      <InstagramIcon />
    </Link>
  </>
)

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = UseMenuStore()
  const { isScrollingDown, isAtTop } = useScroll()

  return (
    <header
      className={`animate-fade-in-down fixed z-50 w-full bg-[#112b27]/60 font-light backdrop-blur-md duration-500 lg:flex lg:items-center lg:justify-center ${isMenuOpen ? "bg-gren-700 z-50 h-screen" : "z-30 h-[4rem]"} ${isScrollingDown && !isMenuOpen && !isAtTop ? "-translate-y-16" : "translate-y-0"}`}
    >
      <div className="container mx-auto mt-2 flex flex-col items-center justify-between gap-4 px-4 lg:mt-0 lg:flex-row lg:px-0 xl:px-28">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Ir a la página principal"
            onClick={closeMenu}
          >
            <img
              src="/LogoH.webp"
              alt="Logo de Acuanet"
              className="glowLogo h-auto w-36 transition-all duration-300 lg:w-36 xl:w-44"
            />
          </Link>

          <div className="flex items-center justify-center lg:hidden">
            <Hamburger
              size={27}
              color="#93ffb7"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-4 text-center text-lg leading-none text-green-100 lg:flex lg:items-center">
          <NavLinks />
        </nav>

        <div className="hidden lg:block">
          <SerchEmbMenu />
        </div>

        {/* Mobile Navigation */}
        <nav className={`${isMenuOpen ? "mt-14 flex flex-col gap-4 text-2xl text-green-100 delay-200" : "hidden"}`}>
          <NavLinks
            mobile
            onClickLink={closeMenu}
          />
          <div className="animate-fade-in animate-delay-400 transition-all">
            <SerchEmbMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}
