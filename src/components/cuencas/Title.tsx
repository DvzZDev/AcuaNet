import { GetCuencas } from "db/queries/select"
async function Title(url: { url: { cuencaid: string } }) {
  const cuenca = await GetCuencas()
  const cuencaid = url.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const decodedCuencaidNM = decodedCuencaid
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  // Encontrar la cuenca dentro del array
  const resCuenca = cuenca.find((cuenca) => cuenca.cuenca === decodedCuencaidNM)

  // Validar si se encontró la cuenca
  if (!resCuenca) {
    return (
      <div className="justify-center">
        <h1 className="font-NecoBold mb-2 text-center text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
          Cuenca no encontrada
        </h1>
      </div>
    )
  }

  return (
    <div className="justify-center">
      <h1 className="mt-4 text-center text-[2.5rem] font-bold text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl xl:mb-0">
        {resCuenca.cuenca.replace(/_/g, " ")}
      </h1>
    </div>
  )
}

export default Title
