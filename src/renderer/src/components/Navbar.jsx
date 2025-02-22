import { TiHome } from 'react-icons/ti'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav>
      <div className="main-navigation-icons">
        <TiHome className="nav-icon" />
        <FaUser className="nav-icon" />
        <FaPlus className="nav-icon" />
      </div>

      <IoMdSettings className="nav-icon" />
    </nav>
  )
}

export default Navbar
