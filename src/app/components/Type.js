'use client'
import { ReactTyped } from 'react-typed'

function Type() {
  return (
    <>
      <ReactTyped
        strings={['Orellana', 'Tajo', 'Ebro', 'San Juan', 'Guadalquivir', 'etc...']}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input
          className="z-20 w-full bg-transparent placeholder-slate-400 placeholder-opacity-40 focus:outline-none"
          type="text"
        />
      </ReactTyped>
    </>
  )
}

export default Type
