import './style.scss'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import Slider from '../../components/SlideShow/index.jsx'
import RatingStars from '../../components/Rating/index.jsx'
import Collapse from '../../components/Collapse/index.jsx'
import datas from '../../data/list'


export default function Logements() {
	const [imageSlider, setImageSlider] = useState([]);
	const idLogements = useParams('id').id;
	const dataLogements = datas.filter(data => data.id === idLogements);

	useEffect(() => {
		const dataLogements = datas.filter(data => data.id === idLogements);
		setImageSlider(dataLogements[0]?.pictures);
	}, [idLogements]);

	const name = dataLogements[0]?.host.name.split(' '); 
	const description  = dataLogements[0]?.description;
	const equipments = dataLogements[0]?.equipments;
	const rating = dataLogements[0]?.rating;
	const tags = dataLogements[0]?.tags;

	const navigate = useNavigate();

	if (!dataLogements[0]) {
		navigate("/error", { state: { message: "ID du logement invalide" } });
		return null;
	  }
	

    return (
		<div className='house'>
			<Header />
			<Slider imageSlider={imageSlider}/>
			<section class='house_content'>
	<div className="house_and_tags">				
	<div className='house_name'>
			<h1 className="house_name_title">{dataLogements[0].title}</h1>
			<p className="house_name_location">{dataLogements[0].location}</p>
	</div>
	<div className="house_tags">
        {tags && tags.map((tag, index) => (
          <button key={index} className="tag_button">{tag}</button>
        ))}
		</div>
	</div>
		<div className='host_and_rating'>
		<div className="host_infos">
		<div className='house_host'>
			<span>{name[0]}</span>
			<span>{name[1]}</span>
		</div>
	
	<div className='host_picture'>
			<img className='host_picture_photo' src={dataLogements[0].host.picture}/> 
			</div>
	</div>

<div classeName='house_rating'>
	  <RatingStars rating={rating}/>
</div>
</div>
</section>
	<div className="house_collapse">
	  	<Collapse title="Description" content={description} className="house_collapse_style" isLogementsPage={true} />
        <Collapse title="Equipements" content={equipments} className="house_collapse_style" isLogementsPage={true} />
	</div>
			<Footer />
		</div>
    )
}
 