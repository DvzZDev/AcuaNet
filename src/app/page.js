import Titulo from '@/app/components/Titulo'
import Header from './components/Header'
import Bento from './components/Bento'

export default async function Home() {
  return (
    <>
      <Header />
      <Titulo />
      <Bento />
    </>
  )
}

