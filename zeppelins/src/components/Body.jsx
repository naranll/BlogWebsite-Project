import Categories from './sub/Categories';
import Poster from './sub/Poster';
import Articles from './sub/Articles';
import '../styles/body.css'
import Footer from './sub/Footer'

export default function Body(props) {
    return <div className='body container'>
        <Poster />
        <div className='main'>
            <Categories data={props.data} />
            <Articles data={props.data} />
        </div>
        <Footer />
    </div>
} 