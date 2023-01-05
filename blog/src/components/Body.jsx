import Category from './sub/Category';
import Articles from './sub/Articles';

export default function Body(props) {
    return <div>
        <Category />
        <Articles data={props.data} />
    </div>
}