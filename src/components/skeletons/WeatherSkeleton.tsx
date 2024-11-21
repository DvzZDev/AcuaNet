const WeatherTableSkeleton = () => {
  const daysArray = Array(5).fill(null)
  const timeSlots = ["08:00", "12:00", "16:00", "20:00", "23:00"]

  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-2 px-3 py-3 text-base sm:p-4 sm:px-6 sm:py-6 sm:text-xl">
      <div className="scroll-tab max-w-[20rem] overflow-x-auto sm:max-w-[40rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem]">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#275e56]">
            <tr>
              {/* Empty corner cell */}
              <th className="sticky left-0 z-10 border-r border-gray-700 bg-[#275e56] px-1 py-2 sm:px-2">
                <div className="flex flex-col items-center justify-center"></div>
              </th>

              {/* Day column headers */}
              {daysArray.map((_, index) => (
                <th
                  key={index}
                  className="border-x border-gray-700"
                >
                  <div className="flex w-[3.5rem] flex-col items-center justify-center gap-1 p-1 sm:w-[4rem] md:w-[7rem] md:gap-2 md:p-2">
                    {/* Weather icon placeholder */}
                    <div className="h-4 w-4 animate-pulse rounded-full bg-green-100/50 sm:h-6 sm:w-6"></div>

                    {/* Date placeholders */}
                    <div className="h-3 w-12 animate-pulse rounded bg-green-100/50 sm:h-4 sm:w-16"></div>
                    <div className="h-3 w-10 animate-pulse rounded bg-green-100/50 sm:h-4 sm:w-12"></div>

                    {/* Temperature placeholders */}
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="h-3 w-6 animate-pulse rounded bg-green-100/50 sm:h-4 sm:w-8"></div>
                      <div className="h-3 w-6 animate-pulse rounded bg-green-100/50 sm:h-4 sm:w-8"></div>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-[#275e5660]">
            {/* Time rows */}
            {timeSlots.map((time, hourIndex) => (
              <tr
                key={hourIndex}
                className="border-gray-700"
              >
                {/* Time column */}
                <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] px-1 py-2 text-green-100 sm:p-2">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-xs font-light uppercase sm:text-sm">{time}</span>
                  </div>
                </td>

                {/* Weather data cells */}
                {daysArray.map((_, dayIndex) => (
                  <td
                    key={dayIndex}
                    className="border-x border-gray-700 px-1 py-2 sm:p-2"
                  >
                    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                      <div className="h-4 w-4 animate-pulse rounded-full bg-[#275e56]/20 sm:h-6 sm:w-6"></div>
                      <div className="h-3 w-6 animate-pulse rounded bg-[#275e56]/20 sm:h-4 sm:w-8"></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}

            {/* Additional info rows (Precipitation, Pressure, Wind) */}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <tr
                  key={`info-${index}`}
                  className="border-gray-700"
                >
                  <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] px-1 py-2 sm:p-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="h-4 w-4 animate-pulse rounded bg-green-100/50 sm:h-6 sm:w-6"></div>
                    </div>
                  </td>

                  {daysArray.map((_, dayIndex) => (
                    <td
                      key={dayIndex}
                      className="border-x border-gray-700 px-1 py-2 sm:p-2"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-3 w-12 animate-pulse rounded bg-[#275e56]/20 sm:h-4 sm:w-16"></div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WeatherTableSkeleton
