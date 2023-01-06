import Container from 'react-bootstrap/Container';
import "/Users/morning/Desktop/BlogWebsite-Project/zeppelins/src/styles/poster.css"

export default function Poster() {
    return <Container>
        <div className='poster'>
            <div className="posterText">
                <h1>Blog Posts</h1>
                <h3>I think so, this is it.</h3>
                <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                <div className='buttons'>
                    <button className='twitter mediaBtn'>TWITTER</button>
                    <button className='linkedin mediaBtn'>LINKEDIN</button>
                    <button className='medium mediaBtn'>MEDIUM</button>
                </div>
            </div>
            <div><img alt="tree" src="./tree.png"></img></div>
        </div>
    </Container>
}