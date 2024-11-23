"use client"

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="flex h-auto flex-col items-center justify-center bg-[#275e56] py-8 text-white md:py-12"
    >
      <h4 className="text-center text-[2.3rem] font-black leading-none text-green-100 sm:text-[50px]">Fuentes Oficiales</h4>
      <h4 className="mt-3 text-center text-[20px] text-green-200">Datos actualizdos cada 24 horas.</h4>
      <div className="mt-8 flex flex-col gap-7 md:flex-row md:gap-16">
        <img
          src="/aemet.webp"
          alt="Aemet España"
          className="h-auto w-full max-w-[200px]"
        />
        <img
          src="/miteco.webp"
          alt="Miteco España"
          className="h-auto w-full max-w-[200px]"
        />
        <img
          src="/sahi.webp"
          alt="Sahi España"
          className="h-auto w-full max-w-[200px]"
        />
      </div>
    </section>
  )
}

export default Fuentes
