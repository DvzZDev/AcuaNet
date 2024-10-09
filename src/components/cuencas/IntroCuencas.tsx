import Divider from "./Divider"

function intro({ title }: { title: string }) {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="mb-2 text-center font-NecoBold text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
          {title}
        </h1>
      </div>
      <Divider />
    </section>
  )
}

export default intro
