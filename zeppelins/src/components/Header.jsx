import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from './icons/Logo';
import Hire from './icons/Hire';

export default function Header() {
    return <div>
        <Navbar>
            <Container>
                <Navbar.Brand><Logo /><Hire /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#link">BLOG</Nav.Link>
                        <Nav.Link href="#link">CV</Nav.Link>
                        <Nav.Link href="#link">STORE</Nav.Link>
                        <Nav.Link href="#link">FREELANCE</Nav.Link>
                        <Nav.Link href="#link">ABOUT ME</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </div >
}