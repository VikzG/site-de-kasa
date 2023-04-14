import './style.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import Slider from '../../components/SlideShow/index.jsx'
import RatingStars from '../../components/Rating/index.jsx'
import Collapse from '../../components/Collapse/index.jsx'
import datas from '../../data/list'


export default function Logements() {
	const [imageSlider, setImageSlider] = useState([]);
	const idAccomodation = useParams('id').id;
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);

	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

	const name = dataCurrentAccomodation[0].host.name.split(' '); 
	const rating = dataCurrentAccomodation[0].rating;
	const description  = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

    return (
		<div className='house'>
			<Header />
			<Slider imageSlider={imageSlider}/>
	<div className='house_name'>
			<h1>{dataCurrentAccomodation[0].title}</h1>
			<p>{dataCurrentAccomodation[0].location}</p>
	</div>
	<div className='house_host'>
			<span>{name[0]}</span>
			<span>{name[1]}</span>
	</div>
			<img src={dataCurrentAccomodation[0].host.picture} 
			alt="host of this accomodation" />

<div classeName='house_rating'>
	  <RatingStars rating={rating}/>
</div>
	  
	<div className="accomodation_collapse">
	  	<Collapse title="Description" content={description} />
        <Collapse title="Equipements" content={equipments} />
	</div>
			<Footer />
		</div>
    )
}
 