import Divider from "./Divider"

function intro({ title }: { title: string }) {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="mt-4 text-center text-[2.5rem] font-bold text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl xl:mb-0">
          {title}
        </h1>
      </div>
      <Divider />
    </section>
  )
}

export default intro
