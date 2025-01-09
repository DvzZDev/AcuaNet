"use client"

export default function ButtonUp() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    })
  }
  return (
    <button
      aria-label="Ir arriba"
      onClick={handleScrollToTop}
      className="fixed bottom-4 left-4 flex h-[2rem] w-[2rem] rounded-full items-center justify-center bg-green-300/50 backdrop-blur-lg outline-none transition-all active:scale-105 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-180"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M6 9l6 6l6 -6" />
      </svg>
    </button>
  )
}
