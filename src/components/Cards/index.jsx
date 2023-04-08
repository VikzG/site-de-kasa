import './style.css'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
        <div className='card-container'>
            <Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>
            </Link>	
            </div>
	)
}