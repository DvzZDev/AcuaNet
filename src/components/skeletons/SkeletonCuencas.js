async function bento() {
  return (
    <section className="flex h-full justify-center bg-bgcolor">
      <div className="m-10 mt-2 grid min-h-[40rem] w-[60rem] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 text-[1.4rem] transition-all hover:scale-110`}
            key={index}
            style={{ cursor: 'pointer' }}
          >
            <div className="flex h-full w-full animate-pulse flex-col content-center items-center justify-center rounded-md bg-slate-700">
              <div className="mb-2 h-6 w-32 animate-pulse rounded bg-gray-400"></div>
              <div className="mb-2 h-6 w-20 animate-pulse rounded bg-gray-400"></div>
              <div className="h-6 w-24 animate-pulse rounded bg-gray-400"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default bento
