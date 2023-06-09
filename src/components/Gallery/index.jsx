import './style.scss';
import datas from '../../data/list'
import Card from '../Cards'

export default function Gallery() {

    return (
        <main className='home_gallery'>
                        {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}

        </main>
    )
}