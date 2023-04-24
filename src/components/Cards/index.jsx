import './style.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
        <div className='card-container'>
            <Link to={`/Logements/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3 className='card_title'>{title}</h3>
            </Link>	
            </div>
	)
}