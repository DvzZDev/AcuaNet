import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-950 text-gray-800">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-2xl">¡Oh no! Parece que te has perdido.</p>
      <div className="h-[50%] w-[50%]">
        <Image
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="Funny GIF"
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>
      <Link href="/">
        <p className="text-lg text-blue-500 hover:underline">
          Volver a la página principal
        </p>
      </Link>
    </div>
  )
}
