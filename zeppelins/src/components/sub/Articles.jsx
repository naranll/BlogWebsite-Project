import Card from "react-bootstrap/Card"
// import 'zeppelins/src/styles/body.css'
import "/Users/morning/Desktop/React-Zeppelins/zeppelins/src/styles/poster.css"


function limitWords(str) {
    return str.split(' ').filter(function (num) {
        return num !== ''
    }).slice(0, 25).join(' ');
}

export default function Articles(props) {

    return <div className="articles">
        {
            props.data.map((article, index) => {
                return <Card key={index} className="articleCard">
                    <img src={article.image} className="cardImage"></img>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">{article.title}</Card.Title>
                        <Card.Text className="description">{limitWords(article.description)}...</Card.Text>
                        <Card.Link href="#" className="cardLink">Read More</Card.Link>
                    </Card.Body>
                </Card>
            })
        }
    </div>
}