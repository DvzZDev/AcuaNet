"use client"
import { useState, useEffect, useCallback } from "react"
import { Link } from "next-view-transitions"
import SerchEmbMenu from "./SerchEmbMenu"
import UseMenuStore from "@/store/useMenuStore"
import Hamburger from "hamburger-react"

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
  const [scroll, setScroll] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScroll(true)
      } else if (currentScrollY < lastScrollY) {
        setScroll(false)
      }

      setLastScrollY(currentScrollY)
    }, 150),
    [lastScrollY]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return scroll
}

export default function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = UseMenuStore()
  const scroll = useScroll()
  return (
    <div
      className={`animate-fade-in-down fixed font-light z-50 w-full bg-[#112b27]/60 backdrop-blur-md duration-500 lg:flex lg:items-center lg:justify-center ${isMenuOpen ? "bg-gren-700 z-50 h-screen backdrop-blur-md" : "z-30 h-[4rem]"} ${scroll ? "-translate-y-16" : "translate-y-0"}`}
    >
      <div className="container mx-auto mt-2 flex flex-col items-center justify-between px-4 lg:mt-0 lg:flex-row lg:px-0 xl:px-28">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Ir a la página principal glow "
            onClick={closeMenu}
          >
            <img
              src="/LogoH.webp"
              alt="Logo de Acuanet"
              className="drop h-auto w-36 transition-all duration-300 lg:w-44"
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

        <div className="mx-4 flex w-full items-center justify-between leading-none lg:w-auto lg:grow">
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
            <Link
              href="https://www.instagram.com/acuanet.es/"
              className="glow flex items-center gap-1 text-nowrap transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="a"
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
                  fill="url(#a)"
                  d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
                />
                <radialGradient
                  id="b"
                  cx={11.786}
                  cy={5.54}
                  r={29.813}
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset={0}
                    stopColor="#4168c9"
                  />
                  <stop
                    offset={0.999}
                    stopColor="#4168c9"
                    stopOpacity={0}
                  />
                </radialGradient>
                <path
                  fill="url(#b)"
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
              <p>¡Síguenos!</p>
            </Link>
          </nav>
        </div>

        {/* Menú móvil */}
        <nav className={`${isMenuOpen ? "flex mt-14 flex-col gap-5 text-2xl text-green-100 delay-200" : "hidden"}`}>
          <Link
            href="/cuencas"
            onClick={closeMenu}
            className="animate-fade-in animate-delay-100 transition-all hover:text-green-300"
          >
            Cuencas
          </Link>

          <Link
            href="/luna"
            onClick={closeMenu}
            className="animate-fade-in animate-delay-300 transition-all hover:text-green-300"
          >
            Calendario Lunar
          </Link>
          <Link
            href="/quienesSomos"
            onClick={closeMenu}
            className="animate-fade-in animate-delay-400 transition-all hover:text-green-300"
          >
            Quiénes Somos
          </Link>
          <Link
            href="https://www.instagram.com/acuanet.es/"
            className="animate-fade-in animate-delay-400 flex items-center gap-1 transition-all hover:text-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="gradientA"
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
                fill="url(#gradientA)"
                d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
              />
              <radialGradient
                id="gradientB"
                cx={11.786}
                cy={5.54}
                r={29.813}
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset={0}
                  stopColor="#4168c9"
                />
                <stop
                  offset={0.999}
                  stopColor="#4168c9"
                  stopOpacity={0}
                />
              </radialGradient>
              <path
                fill="url(#gradientB)"
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
            <p>¡Siguenos!</p>
          </Link>
          <div className="animate-fade-in animate-delay-400 transition-all">
            <SerchEmbMenu />
          </div>
        </nav>
      </div>
    </div>
  )
}
