import Divider from './Divider'

function intro({ title }) {
  return (
    <section>
      <div className="flex justify-center">
        <h1 className="font-NecoBold mb-2 text-center text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
          {title}
        </h1>
      </div>
      <Divider />
    </section>
  )
}

export default intro
