import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Category(props) {
    // function filterType() {
    //     if()
    // }
    return <div>
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">All</Nav.Link>
                        <Nav.Link href="#link">UI Design</Nav.Link>
                        <Nav.Link href="#link">UX Design</Nav.Link>
                        <Nav.Link href="#link">Product Design</Nav.Link>
                        <Nav.Link href="#link">Articles</Nav.Link>
                        <Nav.Link href="#link">Tutorials</Nav.Link>
                        <Nav.Link href="#link">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}