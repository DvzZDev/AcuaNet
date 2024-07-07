import Navbar from './Navbar'
import nombreEmbalses from '../../lib/nombresEmbalses.json'

function NavBarData() {
  const embalses = nombreEmbalses
  return <Navbar data={embalses} />
}

function App() {
  return (
    <Suspense fallback={<></>}>
      <NavBarData />
    </Suspense>
  )
}

export default App
