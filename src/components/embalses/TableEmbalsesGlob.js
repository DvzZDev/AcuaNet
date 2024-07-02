'use client'
import { useState, useMemo, useRef } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { mkConfig, generateCsv, download } from 'export-to-csv'
import { Link } from 'next-view-transitions'

function TableData(props) {
  const resdata = props.props
  const columns = useMemo(
    () => [
      {
        header: 'Embalse',
        accessorKey: 'nombre_embalse',
      },
      {
        header: 'Cuenca',
        accessorKey: 'nombre_cuenca',
      },
      {
        header: 'Agua Embalsada (%)',
        accessorKey: 'agua_embalsadapor',
      },
      {
        header: 'Agua Embalsada (hm³)',
        accessorKey: 'agua_embalsada',
      },
      {
        header: 'Capacidad Total (hm³)',
        accessorKey: 'capacidad_total',
      },
    ],
    []
  )
  const [data, setData] = useState(resdata)
  const [sorting, setSorting] = useState([])
  const [filtered, setFiltered] = useState('')
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: 'embalses',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  })
  const exportExcel = (rows) => {
    const rowData = rows.map((row) => row.original)
    const csv = generateCsv(csvConfig)(rowData)
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
  const inputRef = useRef(null)
  const handleButtonClick = () => {
    setShow((prevShow) => !prevShow)
    inputRef.current?.focus()
  }

  return (
    <div className="mx-5">
      <div className="mt-5 flex h-12 w-full items-center justify-between gap-2 rounded-t-xl bg-[#040513] px-4 sm:mt-8">
        <div
          className={`${show ? 'w-[10rem] border-white' : 'w-[20px]'} flex h-6 border-b border-transparent bg-transparent outline-none transition-all`}
        >
          <button
            onClick={handleButtonClick}
            className="transition-transform duration-150 active:scale-90"
          >
            <svg
              fill="#c0bfb7"
              enable-background="new 0 0 32 32"
              height="20"
              width={20}
              viewBox="4 4 24 24"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            className={`w-full bg-transparent px-1 outline-none transition-all focus:bg-opacity-100 focus:outline-none`}
            type="text"
            autoFocus={show}
            ref={inputRef}
          />
        </div>
        <button
          type="button"
          className="transition-transform duration-150 active:scale-90"
          onClick={() => exportExcel(table.getFilteredRowModel().rows)}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 2 14 20"
            width={20}
            height={20}
          >
            {' '}
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
            ></g>{' '}
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>{' '}
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g id="Interface / Download">
                {' '}
                <path
                  id="Vector"
                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                  stroke="#c0bfb7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>{' '}
            </g>{' '}
          </svg>
        </button>
      </div>
      <table className="border border-[#040513] text-xs sm:text-xl ">
        <thead className="bg-[#040513]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  className={`table-auto cursor-pointer pt-0 text-left sm:p-4 sm:pt-0 ${index === 0 ? 'w-[14rem] transition-transform duration-150 active:scale-90 sm:w-[17rem]' : index === 1 ? 'w-[15rem] transition-transform duration-150 active:scale-90' : 'w-auto text-center transition-transform duration-150 active:scale-90'}`}
                  key={header.id}
                >
                  {header.column.columnDef.header}
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-[#1b0e51]">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-[#1b0e51] even:bg-[#1f1745]"
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className="py-2 sm:p-4"
                >
                  {index === 0 ? (
                    <Link
                      href={`/embalses/${encodeURIComponent(cell.getValue('nombreEmbalse'))}`}
                    >
                      {cell.getValue('nombreEmbalse')}
                    </Link>
                  ) : index === 1 ? (
                    <Link
                      href={`/cuencas/${cell.getValue('nombre_cuenca').replace(/ /g, '_')}`}
                    >
                      {cell.getValue('nombre_cuenca')}
                    </Link>
                  ) : (
                    cell.getValue(index === 0 ? 'nombreEmbalse' : 'nombre_cuenca')
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-5 flex justify-between rounded-b-xl bg-[#040513] p-2 sm:mb-10">
        <div>
          <p className="mt-1 w-6 rounded-sm text-center">
            {table.getState().pagination.pageIndex + 1}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => table.firstPage()}
            className="w-7 rounded-sm transition-transform duration-150 active:scale-90"
          >
            1
          </button>
          <button
            onClick={() => table.previousPage()}
            className="flex w-7 items-center justify-center rounded-sm transition-transform duration-150 active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="30"
              height="30"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </button>
          <button
            onClick={() => table.nextPage()}
            className="flex w-7 items-center justify-center rounded-sm transition-transform duration-150 active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width={30}
              height={30}
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </button>
          <button
            onClick={() => table.lastPage()}
            className="w-7 rounded-sm transition-transform duration-150 active:scale-90"
          >
            {table.getPageCount() - 1}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableData
