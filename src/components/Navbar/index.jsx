import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
<nav>
    <ul className='nav-list'>
            <li className='nav-item'>
        <Link  to='/Kasa/'>
            Accueil
        </Link>
            </li>
            <li className='nav-item'> 
        <Link  to='/about'>
             A Propos
        </Link>
        </li>
    </ul>
</nav>)
}

