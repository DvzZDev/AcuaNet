import Divider from "../landing/Divider"

function TitleEmb({
  data,
}: {
  data: { nombre_embalse: string; cuenca_id: string } | { nombre_embalse: string } | { cuenca_id: string }
}) {
  const capitalizedNombreEmbalse =
    "nombre_embalse" in data
      ? data.nombre_embalse.replace(/\b\w/g, (char) => char.toUpperCase())
      : "cuenca_id" in data
        ? data.cuenca_id.replace(/\b\w/g, (char) => char.toUpperCase())
        : ""

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mt-4 rounded-2xl bg-black/40 px-2 text-center text-[2.5rem] font-bold text-green-100 backdrop-blur-lg sm:mb-2 sm:mt-10 sm:text-6xl md:p-3 xl:mb-0">
          {capitalizedNombreEmbalse.replace(/_/g, " ").replace(/-/g, " ").replace(/%20/g, " ")}
        </h1>
      </div>
      <Divider />
    </>
  )
}

export default TitleEmb
