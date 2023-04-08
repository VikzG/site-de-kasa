import './style.css'
import logo from '../../assets/logo_footer.png'

export default function Footer() {
	return (
		<footer className='footer'>
			<img className= 'footerimg' src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}