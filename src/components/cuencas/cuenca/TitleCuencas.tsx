import Divider from "@/components/landing/Divider"

function TitleCuencas({ name }: { name: string }) {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mx-2 mt-4 rounded-2xl bg-black/40 px-2 text-center text-[2rem] font-bold text-green-100 backdrop-blur-lg sm:mt-10 sm:mb-2 sm:text-6xl md:p-3 xl:mb-0">
          {name}
        </h1>
      </div>
      <Divider />
    </>
  )
}

export default TitleCuencas
