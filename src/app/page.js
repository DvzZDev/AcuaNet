import Intro from '@/app/components/Intro'
import Header from './components/Header'
import Bento from './components/Bento'


export default async function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Bento />
    </>
  )
}

