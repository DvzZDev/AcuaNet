async function TitleEmb({ data }) {
  return (
    <div className="justify-center">
      <h1 className="mb-2 text-center font-NecoBold text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
        {data.nombre_embalse}
      </h1>
    </div>
  )
}

export default TitleEmb
