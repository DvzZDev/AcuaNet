import Intro from '@/app/components/Intro'
import Header from './components/Header'
import Bento from './components/Bento'
import Fuentes from './components/Fuentes'

export default async function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Bento />
      <Fuentes />
    </>
  )
}
