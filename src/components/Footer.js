import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light text-muted py-5 mt-5">
      <Container>
        <Row>
          <Col>
            <h5>SAYYES!</h5>
          </Col>
          <Col>
            <h5>Menú</h5>
            <ul>
              <li>
                <LinkContainer to="/">
                  <a className="d-block" href="#!">
                    Inicio
                  </a>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/quienes-somos">
                  <a className="d-block" href="#!">
                    Quienes Somos
                  </a>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/contacto">
                  <a className="d-block" href="#!">
                    Contacto
                  </a>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Productos</h5>
            <ul>
              <li>
                <LinkContainer to="/productos">
                  <a className="d-block" href="#!">
                    Todos
                  </a>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/categoria/nuevo">
                  <a className="d-block" href="#!">
                    Nuevos
                  </a>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/categoria/usado">
                  <a className="d-block" href="#!">
                    Usados
                  </a>
                </LinkContainer>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
