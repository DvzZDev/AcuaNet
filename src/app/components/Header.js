import Image from 'next/image'

export default function Header() {
  return (
    <header
      id="header-nav"
      class="fixed top-0 z-50 w-full px-6 py-4 backdrop-blur-2xl"
    >
      <div class="container mx-auto flex items-center justify-between">
        <a
          href="#"
          class="text-3xl font-bold text-white"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={20}
          />
        </a>
        <nav class="hidden md:flex">
          <a
            href="#"
            class="mx-4 text-white"
          >
            Inicio
          </a>
          <a
            href="#"
            class="mx-4 text-white"
          >
            Cuencas
          </a>
          <a
            href="#"
            class="mx-4 text-white"
          >
            Embalses
          </a>
        </nav>
      </div>
    </header>
  )
}
