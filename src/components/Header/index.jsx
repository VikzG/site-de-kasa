import './style.scss';
import Logo from '../../assets/Logo.png'
import Navbar from '../Navbar/index.jsx'

function Header() {
  return (
    <header className='header'>
    <h1 className='logo_title'>
      <img className='logo-header' src={Logo} alt="kasa" />
    </h1>
    <Navbar />
  </header>
  )
}

export default Header