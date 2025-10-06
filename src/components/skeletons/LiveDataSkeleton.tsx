export default function LiveDataSkeleton() {
  return (
    <>
      <div className="flex animate-pulse flex-col gap-1">
        <div className="h-8 w-56 rounded-sm bg-green-200" />
        <div className="h-5 w-40 rounded-full bg-orange-200" />
      </div>

      <section className="relative h-fit w-full animate-pulse overflow-hidden rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2">
        <table className="w-full table-fixed">
          <thead className="text-left text-xs lg:text-sm">
            <tr>
              <th className="pb-1">
                <div className="h-4 w-16 rounded bg-green-200" />
              </th>
              <th className="pb-1">
                <div className="h-4 w-20 rounded bg-green-200" />
              </th>
              <th className="pb-1">
                <div className="h-4 w-24 rounded bg-green-200" />
              </th>
              <th className="pb-1">
                <div className="h-4 w-16 rounded bg-green-200" />
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                <td className="py-1">
                  <div className="h-4 w-16 rounded bg-green-200" />
                </td>
                <td className="py-1">
                  <div className="h-4 w-20 rounded bg-green-200" />
                </td>
                <td className="py-1">
                  <div className="h-4 w-16 rounded bg-green-200" />
                </td>
                <td className="py-1">
                  <div className="h-4 w-16 rounded bg-green-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
