import './style.scss'
import Header from '../../components/Header/index.jsx'
import Banner from '../../components/Banner/index.jsx'
import Gallery from '../../components/Gallery/index.jsx'
import Footer from '../../components/Footer/index.jsx'

function Home() {
    return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
    )
}
 
export default Home