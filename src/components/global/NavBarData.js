import Navbar from './Navbar'
import nombreEmbalses from '../../lib/nombresEmbalses.json'

function NavBarData() {
  const embalses = nombreEmbalses
  return <Navbar data={embalses} />
}

export default NavBarData
