// app/page.js

import React from 'react'
import Intro from '@/app/components/Intro'
import Header from '@/app/components/Header'
import Bento from '@/app/components/Bento'
import Fuentes from '@/app/components/Fuentes'

// Página principal que utiliza el componente Bento
export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Bento />
      <Fuentes />
    </>
  )
}


