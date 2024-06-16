import Image from 'next/image'

export default function Header() {
  return (
    <header
      id="header-nav"
      className="fixed top-0 z-50 w-full px-6 py-4 backdrop-blur-2xl"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-bold text-white"
        >
          <Image
            src="/Logo.svg"
            alt="logo"
            width={40}
            height={20}
          />
        </a>
        <nav className="">
          <a
            href="#"
            className="mx-4 text-white"
          >
            Inicio
          </a>
          <a
            href="#"
            className="mx-4 text-white"
          >
            Cuencas
          </a>
          <a
            href="#"
            className="mx-4 text-white"
          >
            Embalses
          </a>
        </nav>
      </div>
    </header>
  )
}
