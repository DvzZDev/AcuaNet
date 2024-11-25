"use client"

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="flex h-auto flex-col items-center justify-center bg-[#275e56] py-8 text-white md:py-12"
    >
      <h2 className="text-center text-[2.3rem] font-black leading-none text-green-100 sm:text-[50px]">Fuentes Oficiales</h2>
      <h2 className="mt-3 text-center text-[20px] text-green-200">Datos actualizdos cada 24 horas.</h2>
      <div className="mt-8 flex flex-col md:flex-row md:gap-16">
        <img
          src="/aemet.webp"
          alt="Aemet España"
          className="h-[120px] w-[200px] object-contain"
          draggable="false"
          loading="lazy"
        />
        <img
          src="/miteco.webp"
          alt="Miteco España"
          className="h-[120px] w-[200px] object-contain"
          draggable="false"
          loading="lazy"
        />
        <img
          src="/sahi.webp"
          alt="Sahi España"
          className="h-[120px] w-[200px] object-contain"
          draggable="false"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Fuentes
