export default function ImageRef({ id, link }: { id: string; link: string }) {
  return (
    <a
      href={link}
      target="blank"
      className="glow2 absolute bottom-1 right-2 flex w-fit items-center justify-center gap-2 rounded-2xl p-1 text-xs text-emerald-400 backdrop-blur-3xl transition-all hover:scale-105 md:bottom-8 md:right-8 md:p-3 md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a7f3d0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="glow2 h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      </svg>
      <p>{id}</p>
    </a>
  )
}
