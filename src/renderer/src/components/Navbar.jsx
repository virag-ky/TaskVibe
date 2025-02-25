import { useNavigate } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa6'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <div className="main-navigation-icons">
        <button className="nav-button" onClick={() => navigate('/')}>
          <TiHome size={20} />
        </button>
        <button className="nav-button" onClick={() => navigate('/profile')}>
          <FaUser size={20} />
        </button>
        <button className="nav-button">
          <FaPlus size={20} />
        </button>
      </div>
      <button className="nav-button" onClick={() => navigate('/settings')}>
        <IoMdSettings size={20} />
      </button>
    </nav>
  )
}

export default Navbar
