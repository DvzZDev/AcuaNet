async function TitleEmb({ data }: { data: { nombre_embalse: string } }) {
  return (
    <div className="flex justify-center">
      <h1 className="mt-4 text-center text-[2.5rem] font-bold xl:mb-0 text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl">
        {data.nombre_embalse}
      </h1>
    </div>
  )
}

export default TitleEmb
