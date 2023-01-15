import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './icons/Logo';
import Hire from './icons/Hire';
import "../styles/header.css";

export default function Header() {
    return <div className='container'>
            <Navbar className='navbar'>
                <Navbar.Brand className='logo'><Logo /><Hire /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='navbarCollapse'>
                    <Nav className="me-auto navLinks">
                        <Nav.Link href="#home">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#link">BLOG</Nav.Link>
                        <Nav.Link href="#link">CV</Nav.Link>
                        <Nav.Link href="#link">STORE</Nav.Link>
                        <Nav.Link href="#link">FREELANCE</Nav.Link>
                        <Nav.Link href="#link">ABOUT ME</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div >
}