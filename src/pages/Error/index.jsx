import './style.scss'
import Header from "../../components/Header/index.jsx";
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className='Error'>
			<Header />
			<div className="Error_infos">
				<h1 className='Error_infos_title'>404</h1>
				<p className='Error_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='Error_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}