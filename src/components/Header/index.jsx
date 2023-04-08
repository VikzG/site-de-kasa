import './style.css';
import Logo from '../../assets/Logo.png'
import Navbar from '../Navbar/index.jsx'

function Header() {
  return (
    <header className='header'>
    <h1>
      <img className='logo-header' src={Logo} alt="kasa, location d'appartements" />
    </h1>
    <Navbar />
  </header>
  )
}

export default Header