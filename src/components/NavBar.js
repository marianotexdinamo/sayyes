import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>SAYYES!</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/quienes-somos">
              <Nav.Link>Quienes Somos</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <LinkContainer to="/productos">
                <NavDropdown.Item>Todos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/categoria/nuevo">
                <NavDropdown.Item>Nuevos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/categoria/usado">
                <NavDropdown.Item>Usados</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
            <Nav.Link>
              <CartWidget></CartWidget>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
