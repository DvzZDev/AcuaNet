import Divider from "../landing/Divider"

function TitleEmb({ data }: { data: string | { nombre_embalse: string; cuenca_id?: string } }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="mx-2 mt-4 rounded-2xl bg-black/40 px-2 text-center text-[2.3rem] font-semibold text-green-100 backdrop-blur-lg sm:mt-10 sm:mb-2 sm:text-6xl md:p-3 xl:mb-0">
          <h1 className="py-1 leading-11">{typeof data === "string" ? data : data.nombre_embalse}</h1>
        </div>
      </div>
      <Divider />
    </>
  )
}

export default TitleEmb
