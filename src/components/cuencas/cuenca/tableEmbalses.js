'use client'
import { useState, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'

function TableEmbalses(props) {
  console.log(props)
  const columns = useMemo(
    () => [
      {
        header: 'Embalse',
        accessorKey: 'nombre_embalse',
      },
      {
        header: 'Embalsada % ',
        accessorKey: 'agua_embalsadapor',
      },
      {
        header: 'Agua Embalsada',
        accessorKey: 'agua_embalsada',
      },
      {
        header: 'Capacidad Total',
        accessorKey: 'capacidad_total',
      },
    ],
    []
  )
  const [data, setData] = useState(props.dataFetched)

  const [sorting, setSorting] = useState([])
  const [filtered, setFiltered] = useState('')

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

  return (
    <div className='mx-5'>
      <div className="my-4 flex justify-end">
        <div className="relative">
          <div className="absolute right-1 top-1 h-[15px] w-[15px]">
            <svg
              fill="#c0bfb7"
              viewBox="-1.6 -1.6 35.20 35.20"
              version="1.1"
              stroke="#c0bfb7"
              stroke-width="1.216"
              width={15}
              height={15}
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
                <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>{' '}
              </g>
            </svg>
          </div>
          <input
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
            className="h-6 w-36 rounded-sm bg-slate-900 outline-none transition-all focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            type="text"
          />
        </div>
      </div>
      <table className="border border-[#040513] text-sm sm:text-xl">
        <thead className="overflow-clip bg-[#040513]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  className={`table-auto sm:p-4 text-left ${index === 0 ? 'w-[14rem] sm:w-[17rem]' : 'w-auto text-center'}`}
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={`p-4 ${index === 0 ? 'rounded-l' : ''} ${index === row.getVisibleCells().length - 1 ? 'rounded-r' : ''}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-4 flex justify-between">
        <div>
          <p className="w-6 rounded-sm bg-slate-600 text-center">
            {table.getState().pagination.pageIndex + 1}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => table.firstPage()}
            className="w-7 rounded-sm bg-slate-600"
          >
            1
          </button>
          <button
            onClick={() => table.previousPage()}
            className="flex w-7 items-center justify-center rounded-sm bg-slate-600"
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
            className="flex w-7 items-center justify-center rounded-sm bg-slate-600"
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
            className="w-7 rounded-sm bg-slate-600"
          >
            {table.getPageCount() - 1}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableEmbalses
