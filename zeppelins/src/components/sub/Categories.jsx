import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../../styles/categories.css";


export default function Category(props) {
    // function filterType() {
    //     if()
    // }
    return <div className='navbarContainer'>
            <Navbar>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto categoryLinks">
                        <Nav.Link href="#home">All</Nav.Link>
                        <Nav.Link href="#link">UI Design</Nav.Link>
                        <Nav.Link href="#link">UX Design</Nav.Link>
                        <Nav.Link href="#link">Product Design</Nav.Link>
                        <Nav.Link href="#link">Articles</Nav.Link>
                        <Nav.Link href="#link">Tutorials</Nav.Link>
                        <Nav.Link href="#link">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div>
}