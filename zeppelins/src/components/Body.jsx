import Category from './sub/Category';
import Poster from './sub/Poster';
import Articles from './sub/Articles';
import '../styles/body.css'
import Footer from './sub/Footer'

export default function Body(props) {
    return <div className='body container'>
        <Poster />
        <Category data={props.data} />
        <Articles data={props.data} />
        <Footer />
    </div>
} 