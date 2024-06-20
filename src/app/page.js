// app/page.js

import React from 'react'
import Intro from '@/app/components/Intro'
import Header from '@/app/components/Header'
import Bento from '@/app/components/Bento'
import Fuentes from '@/app/components/Fuentes'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

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
