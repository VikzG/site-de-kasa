import './style.scss'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className={window.location.pathname === '/' ? 'active' : ''}>
              Accueil
            </Link>
          </li>
          <li className='nav-item'> 
            <Link to='/about' className={window.location.pathname === '/about' ? 'active' : ''}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

