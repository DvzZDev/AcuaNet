"use client"
import { Row } from "@tanstack/react-table"
import { useState, useMemo, useRef } from "react"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
} from "@tanstack/react-table"
import { mkConfig, generateCsv, download } from "export-to-csv"
import { Link } from "next-view-transitions"
import type { Embalses } from "@/types"

export default function TableData({ props: resdata }: { props: Embalses[] }) {
  const columns = useMemo(
    () => [
      { header: "Embalse", accessorKey: "nombre_embalse" },
      { header: "Cuenca", accessorKey: "nombre_cuenca" },
      { header: "Agua Embalsada (%)", accessorKey: "agua_embalsadapor" },
      { header: "Agua Embalsada (hm³)", accessorKey: "agua_embalsada" },
      { header: "Capacidad Total (hm³)", accessorKey: "capacidad_total" },
    ],
    []
  )

  const [data] = useState(resdata)
  const [sorting, setSorting] = useState<SortingState>([])
  const [filtered, setFiltered] = useState("")
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    filename: "embalses",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  })

  const exportExcel = (rows: Row<Embalses>[]): void => {
    const rowData = rows.map((row) => row.original)
    const csv = generateCsv(csvConfig)(rowData as unknown as { [k: string]: never }[])
    download(csvConfig)(csv)
  }

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtered,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltered,
  })

  const [show, setShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleButtonClick = () => {
    setShow((prevShow) => !prevShow)
    inputRef.current?.focus()
  }

  return (
    <div className="mx-5 my-5 h-screen animate-fade-in">
      <div className="flex h-12 w-full items-center justify-between gap-2 rounded-t-xl bg-green-100 px-4 md:h-14">
        <div className="flex h-6 flex-row-reverse border-b border-green-950 border-transparent bg-transparent outline-none">
          <button
            type="button"
            aria-label="Buscar"
            onClick={handleButtonClick}
            className=""
          >
            <svg
              fill="#647f74"
              enableBackground="new 0 0 32 32"
              height="17"
              width={17}
              viewBox="4 4 24 24"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                  id="XMLID_223_"
                ></path>
              </g>
            </svg>
          </button>
          <input
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
            className="w-[11rem] bg-transparent px-1 text-green-950 outline-none"
            type="text"
            autoFocus={show}
            ref={inputRef}
          />
        </div>
        <button
          aria-label="Exportar a Excel"
          type="button"
          className="duration-150 active:scale-90"
          onClick={() => exportExcel(table.getFilteredRowModel().rows)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 2 14 20"
            width={20}
            height={20}
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Interface / Download">
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="#647f74"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-green-100 text-sm font-black text-green-950 sm:text-xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    className={`table-auto cursor-pointer pt-0 text-left sm:p-4 sm:pt-0 ${index === 0 ? "w-[14rem] px-2 duration-150 active:scale-90 sm:w-[17rem]" : index === 1 ? "w-[15rem] duration-150 active:scale-90" : "w-auto text-center duration-150 active:scale-90"}`}
                    key={header.id}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() ? (header.column.getIsSorted() === "asc" ? "↑" : "↓") : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-green-100 text-xs font-semibold text-green-950 sm:text-xl">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-green-200 even:bg-green-100"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id}
                    className="px-2 py-5 sm:p-4"
                  >
                    {index === 0 ? (
                      <Link href={`/embalses/${encodeURIComponent(cell.getValue() as string)}`}>{cell.getValue() as string}</Link>
                    ) : index === 1 ? (
                      <Link href={`/cuencas/${encodeURIComponent(cell.getValue() as string)}`}>{cell.getValue() as string}</Link>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-5 flex justify-between rounded-b-xl bg-green-200 p-2 text-green-950 sm:mb-10">
        <div key={0}>
          <p
            key={1}
            className="mt-1 w-6 rounded-sm text-center text-sm md:text-lg"
          >
            {table.getState().pagination.pageIndex + 1}
          </p>
        </div>
        <div
          key={2}
          className="flex gap-4 text-sm md:text-lg"
        >
          <button
            type="button"
            aria-label="Primera Página"
            onClick={() => table.firstPage()}
            className="w-7 rounded-sm duration-150 active:scale-90"
          >
            1
          </button>
          <button
            type="button"
            aria-label="Página Anterior"
            onClick={() => table.previousPage()}
            className="flex w-7 items-center justify-center rounded-sm duration-150 active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="none"
                  stroke="#647f74"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 18l-6-6 6-6"
                ></path>
              </g>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Página Siguiente"
            onClick={() => table.nextPage()}
            className="flex w-7 items-center justify-center rounded-sm duration-150 active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="none"
                  stroke="#647f74"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 18l6-6-6-6"
                ></path>
              </g>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Última Página"
            onClick={() => table.lastPage()}
            className="w-7 rounded-sm duration-150 active:scale-90"
          >
            15
          </button>
        </div>
      </div>
    </div>
  )
}
