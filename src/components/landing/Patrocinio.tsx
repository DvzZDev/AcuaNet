import Image from "next/image"

export default function Patrocinio() {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://agrbaits.es"
    >
      <div className="absolute right-1 top-7 flex w-[7rem] rotate-12 animate-jiggle flex-col items-center justify-center gap-1 transition-transform animate-duration-2000 animate-iteration-count-infinite hover:scale-105 md:right-12 md:w-[10rem]">
        <Image
          src={"/AGRLogo.webp"}
          unoptimized={true}
          width={65}
          height={65}
          alt="AGR Logo"
          className="rounded-full md:h-full md:w-[100px] 2xl:w-[150px]"
        />
        <p className="text-center text-[13px] font-light text-green-100 md:text-[20px]">
          Patrocinado por <br />
          <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text font-black text-transparent">
            AGR Baits
          </span>
        </p>
      </div>
    </a>
  )
}
