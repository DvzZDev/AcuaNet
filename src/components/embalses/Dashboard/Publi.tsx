export default function Publi() {
  return (
    <>
      <h2 className="text-2xl font-black text-green-950">Te podría interesar</h2>
      <div>
        <section className="flex items-center gap-4">
          <a
            href="https://topfishing.net/extremadura/pescar-en-extremadura/"
            className="group relative h-[10rem] w-[16rem] overflow-hidden rounded-xl bg-green-300 md:h-[12rem] md:w-[18rem]"
            rel="noreferrer"
            target="_blank"
          >
            <div className="absolute z-10 h-full w-full rounded-xl bg-linear-to-b from-transparent to-black"></div>
            <img
              src="/Lucio.webp"
              alt="Imagen de un lucio"
              className="h-full w-full rounded-xl object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 z-20 text-xl font-black text-green-200 md:text-2xl">
              <h3>Pesca en Extremadura.</h3>
              <p className="text-xs text-green-50">topfishing.net</p>
            </div>
          </a>
        </section>
      </div>
    </>
  )
}
