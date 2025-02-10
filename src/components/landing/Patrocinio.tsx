export default function Patrocinio() {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://agrbaits.es"
    >
      <div className="absolute right-1 top-7 flex w-[7rem] rotate-12 animate-wiggle flex-col items-center justify-center gap-1 transition-transform duration-1000 repeat-infinite hover:scale-105 md:right-12 md:w-[10rem]">
        <img
          src={"/AGRLogo.webp"}
          width={65}
          height={65}
          loading="eager"
          alt="AGR Logo"
          className="rounded-full md:h-full md:w-[100px] 2xl:w-[150px]"
        />
        <p className="text-center text-[13px] font-light text-green-100 md:text-[20px]">
          Patrocinado por <br />
          <span className="animationGlow bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text font-black text-transparent md:text-2xl">
            AGR Baits
          </span>
        </p>
      </div>
    </a>
  )
}
