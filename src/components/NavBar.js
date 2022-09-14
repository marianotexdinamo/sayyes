import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SAYYES!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Quienes Somos</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#link">
                            <CartWidget></CartWidget>
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;