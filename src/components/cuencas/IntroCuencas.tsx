import Divider from "../landing/Divider"

function intro({ title }: { title: string }) {
  return (
    <section>
      <div className="flex justify-center">
        <div className="mx-2 mt-4 rounded-2xl bg-black/40 px-2 text-center text-[2.3rem] font-semibold text-green-100 backdrop-blur-lg sm:mt-10 sm:mb-2 sm:text-6xl md:p-3 xl:mb-0">
          <h1 className="py-1 leading-11">{title}</h1>
        </div>
      </div>
      <Divider />
    </section>
  )
}

export default intro
