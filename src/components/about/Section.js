import React from 'react'
import Image from 'next/image'

function Section() {
  return (
    <div>
      <Image
        src="/public/yo.png"
        width={70}
        height={70}
        alt="yo"
      />
    </div>
  )
}

export default Section
