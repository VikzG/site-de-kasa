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
	const dataLogement = datas.find(data => data.id === idLogements);
  
	useEffect(() => {
	  const dataLogement = datas.find(data => data.id === idLogements);
	  setImageSlider(dataLogement?.pictures);
	}, [idLogements]);
  
	const name = dataLogement?.host.name.split(' '); 
	const description = dataLogement?.description;
	const equipments = dataLogement?.equipments;
	const rating = dataLogement?.rating;
	const tags = dataLogement?.tags;
  
	const navigate = useNavigate();
  
	if (!dataLogement) {
	  navigate("/error", { state: { message: "ID du logement invalide" } });
	  return null;
	}
  
	return (
	  <div className='house'>
		<Header />
		<Slider imageSlider={imageSlider}/>
		<section className='house_content'>
		  <div className="house_and_tags">				
			<div className='house_name'>
			  <h1 className="house_name_title">{dataLogement.title}</h1>
			  <p className="house_name_location">{dataLogement.location}</p>
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
				<span>{name && name[0]}</span>
				<span>{name && name[1]}</span>
			  </div>
			  <div className='host_picture'>
				<img className='host_picture_photo' src={dataLogement.host.picture}/> 
			  </div>
			</div>
			<div className='house_rating'>
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
	);
  }
 