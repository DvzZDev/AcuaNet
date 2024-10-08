"use client"
import { Row } from "@tanstack/react-table" // Importar el tipo Row de TanStack Table
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
import { motion } from "framer-motion"
import { Link } from "next-view-transitions"

interface EmbalseTableProps {
  id_embalse: number
  fecha_modificacion: string
  nombre_embalse: string
  nombre_cuenca: string
  agua_embalsada: number
  agua_embalsadapor: number
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  capacidad_total: number
  misma_semana_ultimo_año: number
  misma_semana_ultimo_añopor: number
  misma_semana_10años: number
  misma_semana_10añospor: number
}

export default function TableData({ props: resdata }: { props: EmbalseTableProps[] }) {
  const columns = useMemo(
    () => [
      {
        header: "Embalse",
        accessorKey: "nombre_embalse",
      },
      {
        header: "Cuenca",
        accessorKey: "nombre_cuenca",
      },
      {
        header: "Agua Embalsada (%)",
        accessorKey: "agua_embalsadapor",
      },
      {
        header: "Agua Embalsada (hm³)",
        accessorKey: "agua_embalsada",
      },
      {
        header: "Capacidad Total (hm³)",
        accessorKey: "capacidad_total",
      },
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

  const exportExcel = (rows: Row<EmbalseTableProps>[]): void => {
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

  //Animations
  const variants = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 150, delay: index * 0.1 },
    },
  })

  return (
    <div className="mx-5 my-5 h-screen">
      <div className="flex h-12 w-full items-center justify-between gap-2 rounded-t-xl bg-[#040513] px-4 sm:mt-8 md:h-14">
        <motion.div
          viewport={{
            once: true,
          }}
          initial={{ width: "0rem", opacity: 0 }}
          animate={{
            width: show ? "12rem" : "0rem",
            opacity: show ? 1 : 0,
          }}
          whileInView="animate"
          variants={variants(0)}
          className="flex h-6 border-b border-transparent border-white bg-transparent outline-none"
        >
          <motion.button
            whileTap={{
              scale: 0.9,
              backgroundColor: "#1f1745",
              borderColor: "#1f1745",
            }}
            type="button"
            aria-label="Buscar"
            onClick={handleButtonClick}
            viewport={{
              once: true,
            }}
          >
            <svg
              fill="#c0bfb7"
              enableBackground="new 0 0 32 32"
              height="20"
              width={20}
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
          </motion.button>
          <motion.input
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
            className="w-full bg-transparent px-1 outline-none"
            type="text"
            autoFocus={show}
            ref={inputRef}
            viewport={{
              once: true,
            }}
          />
        </motion.div>
        <motion.button
          initial="initial"
          whileInView="animate"
          variants={variants(0)}
          aria-label="Exportar a Excel"
          type="button"
          className="duration-150 active:scale-90"
          viewport={{
            once: true,
          }}
          onClick={() => exportExcel(table.getFilteredRowModel().rows)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 2 14 20"
            width={20}
            height={20}
          >
            {" "}
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
            ></g>{" "}
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>{" "}
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Interface / Download">
                {" "}
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="#c0bfb7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
        </motion.button>
      </div>
      <table className="border border-[#040513]">
        <thead className="bg-[#040513] text-sm sm:text-xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <motion.th
                  viewport={{
                    once: true,
                  }}
                  initial="initial"
                  variants={variants(index)}
                  whileInView="animate"
                  onClick={header.column.getToggleSortingHandler()}
                  className={`table-auto cursor-pointer pt-0 text-left sm:p-4 sm:pt-0 ${index === 0 ? "w-[14rem] px-2 duration-150 active:scale-90 sm:w-[17rem]" : index === 1 ? "w-[15rem] duration-150 active:scale-90" : "w-auto text-center duration-150 active:scale-90"}`}
                  key={header.id}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </motion.th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-md bg-[#1b0e51] sm:text-xl">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-[#1b0e51] even:bg-[#1f1745]"
            >
              {row.getVisibleCells().map((cell, index) => (
                <motion.td
                  initial="initial"
                  variants={variants(index)}
                  whileInView="animate"
                  key={cell.id}
                  className="px-2 py-5 sm:p-4"
                  viewport={{
                    once: true,
                  }}
                >
                  {index === 0 ? (
                    <Link
                      href={`/embalses/${encodeURIComponent(cell.getValue() as string)}`}
                    >
                      {cell.getValue() as string}
                    </Link>
                  ) : index === 1 ? (
                    <Link
                      href={`/cuencas/${encodeURIComponent(cell.getValue() as string)}`}
                    >
                      {cell.getValue() as string}
                    </Link>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </motion.td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-5 flex justify-between rounded-b-xl bg-[#040513] p-2 sm:mb-10">
        <motion.div
          initial="initial"
          variants={variants(0)}
          whileInView="animate"
          key={0}
          viewport={{
            once: true,
          }}
        >
          <motion.p
            initial="initial"
            variants={variants(1)}
            whileInView="animate"
            key={1}
            viewport={{
              once: true,
            }}
            className="mt-1 w-6 rounded-sm text-center"
          >
            {table.getState().pagination.pageIndex + 1}
          </motion.p>
        </motion.div>
        <motion.div
          initial="initial"
          variants={variants(2)}
          whileInView="animate"
          key={2}
          viewport={{
            once: true,
          }}
          className="flex gap-4 text-lg"
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
              fill="none"
              width="30"
              height="30"
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
                {" "}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
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
              fill="none"
              width={30}
              height={30}
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
                {" "}
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Última Página"
            onClick={() => table.lastPage()}
            className="w-7 rounded-sm duration-150 active:scale-90"
          >
            {table.getPageCount() - 1}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
