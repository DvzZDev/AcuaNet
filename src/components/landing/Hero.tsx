import { Link } from "next-view-transitions"
import FloatingChips from "./FloatingChips"

export default async function Hero() {
  return (
    <div className="animate-blurred-fade-in relative h-[calc(100vh-4rem)] overflow-hidden bg-black/10">
      <section className="z-10 flex h-full flex-col items-center">
        <div className="mt-[5rem] flex flex-col items-center justify-center gap-4 px-2 lg:gap-6 xl:w-[60rem] 2xl:gap-8">
          <div className="h-[7rem] w-[7rem]">
            <img
              src="/App-icon.webp"
              className="h-full w-full object-contain"
              alt="Logo"
            />
          </div>
          <h2 className="animate-blurred-fade-in animate-delay-100 w-[22rem] text-center font-['BlackRolmer'] text-[35px] leading-none font-semibold text-green-100 duration-700 sm:w-[40rem] sm:text-[3rem] xl:w-full 2xl:text-6xl">
            Planificar tus salidas de <span className="glow2 text-[#93ffb7]">pesca</span> nunca había sido tan{" "}
            <span className="glow2 text-[#93ffb7]">fácil</span>
          </h2>
          <Link
            className="mt-3 z-20 rounded-xl border border-emerald-100/30 bg-emerald-300/20 p-2 text-base font-semibold text-emerald-200 backdrop-blur-lg transition-all hover:scale-105 lg:mt-0"
            href="/auth/signin"
          >
            <p className="">
              Empieza a usar <span className="glow3 font-['BlackRolmer'] text-xl">AcuaNet</span>
            </p>
          </Link>

          <div className="mt-4 z-20 flex items-center justify-center gap-6 lg:mt-0">
            <a
              href="https://apps.apple.com/es/app/acuanet/id6749550484"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
            >
              <img
                src="/AppStore.webp"
                alt="App Store"
                className="h-full w-[10rem]"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dvzz.acuanet&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
            >
              <img
                src="/PlayStore.webp"
                alt="Play Store"
                className="h-full w-[10rem]"
              />
            </a>
          </div>
        </div>
      </section>

      <img
        src="/Mocks/MacMoc.webp"
        alt="AcuaNet Dashboard"
        className="absolute -bottom-[10rem] left-1/2 hidden h-[37rem] w-auto -translate-x-1/2 object-contain opacity-80 lg:block"
      />
      <img
        src="/Mocks/Iphone-Embalse.webp"
        alt="AcuaNet Dashboard"
        className="absolute -bottom-[7rem] left-0 hidden h-[32rem] w-auto rotate-15 object-contain opacity-80 lg:block"
      />
      <img
        src="/Mocks/Iphone-Catch.webp"
        alt="AcuaNet Dashboard"
        className="absolute right-0 -bottom-[7rem] hidden h-[32rem] w-auto -rotate-15 object-contain opacity-80 lg:block"
      />

      {/* Chips flotantes distribuidos por la pantalla */}
      <FloatingChips />
    </div>
  )
}
