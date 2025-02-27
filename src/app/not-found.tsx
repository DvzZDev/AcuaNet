import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-green-50">
      <div className="mx-6 flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-4 py-8 text-center shadow-lg">
        <h1 className="text-5xl font-bold text-gray-800">Error 404</h1>
        <p className="text-2xl text-gray-600">Página no encontrada</p>
        <p className="text-lg text-gray-500">
          Si crees que es un error en la web, ponte en contacto con nosotros a través de nuestro Instagram.
        </p>
        <Link href="/">
          <p className="mt-4 rounded-md bg-[#a5d5a7] px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-emerald-700">
            Volver al inicio
          </p>
        </Link>
      </div>
    </section>
  )
}
