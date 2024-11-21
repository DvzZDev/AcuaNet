async function TitleEmb({ data }: { data: { nombre_embalse: string } }) {
  const capitalizedNombreEmbalse = data.nombre_embalse.replace(/\b\w/g, (char) => char.toUpperCase())
  return (
    <div className="flex justify-center">
      <h1 className="mt-4 text-center text-[2.5rem] font-bold text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl xl:mb-0">
        {capitalizedNombreEmbalse}
      </h1>
    </div>
  )
}

export default TitleEmb
