import Divider from "../landing/Divider"

function intro({ title }: { title: string }) {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="mt-4 w-fit rounded-2xl bg-black/40 px-2 text-center text-[2.5rem] font-bold text-green-100 backdrop-blur-lg sm:mb-2 sm:mt-10 sm:text-6xl md:p-3 xl:mb-0">
          {title}
        </h1>
      </div>
      <Divider />
    </section>
  )
}

export default intro
