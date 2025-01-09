const TableWeatherSK = () => {
  // Array for default hours display
  const defaultHours = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"]
  // Number of days to show in skeleton
  const numberOfDays = 7

  return (
    <div>
      {/* Button controls skeleton */}
      <div className="mb-3 flex justify-between">
        <div className="h-10 w-36 animate-pulse rounded-xl bg-green-200"></div>
        <div className="flex gap-2">
          <div className="h-10 w-10 animate-pulse rounded-full bg-green-200"></div>
          <div className="h-10 w-10 animate-pulse rounded-full bg-green-200"></div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="max-w-[22rem] overflow-x-auto rounded-xl sm:max-w-[38rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem]">
        <table className="w-full table-auto text-left">
          {/* Table header */}
          <thead className="bg-[#275e56]">
            <tr>
              <th className="sticky left-0 z-10 flex justify-center border-r border-gray-700 bg-[#275e56]">
                <div className="h-[130px] w-16 animate-pulse bg-green-200/20"></div>
              </th>
              {[...Array(numberOfDays)].map((_, index) => (
                <th
                  key={index}
                  className="border-x border-gray-700"
                >
                  <div className="m-auto my-2 flex w-[4rem] flex-col items-center justify-center gap-2 md:w-[5rem]">
                    <div className="h-8 w-8 animate-pulse rounded-full bg-green-200/20"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-green-200/20"></div>
                    <div className="h-4 w-12 animate-pulse rounded bg-green-200/20"></div>
                    <div className="h-4 w-8 animate-pulse rounded bg-green-200/20"></div>
                    <div className="h-4 w-8 animate-pulse rounded bg-green-200/20"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="bg-green-100">
            {/* Hour rows */}
            {defaultHours.map((hour, hourIndex) => (
              <tr
                key={hourIndex}
                className="border-gray-700"
              >
                <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                  <div className="h-4 w-12 animate-pulse rounded bg-green-200/20"></div>
                </td>
                {[...Array(numberOfDays)].map((_, dayIndex) => (
                  <td
                    key={dayIndex}
                    className="border-x border-gray-700 p-2"
                  >
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="h-6 w-6 animate-pulse rounded bg-green-200"></div>
                      <div className="h-4 w-8 animate-pulse rounded bg-green-200"></div>
                      <div className="h-4 w-12 animate-pulse rounded bg-green-200"></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}

            {/* Precipitation row */}
            <tr className="border-gray-700">
              <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                <div className="h-6 w-6 animate-pulse rounded bg-green-200/20"></div>
              </td>
              {[...Array(numberOfDays)].map((_, index) => (
                <td
                  key={index}
                  className="border-x border-gray-700 p-2"
                >
                  <div className="h-4 w-16 animate-pulse rounded bg-green-200"></div>
                </td>
              ))}
            </tr>

            {/* Pressure row */}
            <tr className="border-gray-700">
              <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                <div className="h-6 w-6 animate-pulse rounded bg-green-200/20"></div>
              </td>
              {[...Array(numberOfDays)].map((_, index) => (
                <td
                  key={index}
                  className="border-x border-gray-700 p-2"
                >
                  <div className="h-4 w-16 animate-pulse rounded bg-green-200"></div>
                </td>
              ))}
            </tr>

            {/* Wind row */}
            <tr className="border-gray-700">
              <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                <div className="h-6 w-6 animate-pulse rounded bg-green-200/20"></div>
              </td>
              {[...Array(numberOfDays)].map((_, index) => (
                <td
                  key={index}
                  className="border-x border-gray-700 p-2"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-pulse rounded bg-green-200"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-green-200"></div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableWeatherSK
