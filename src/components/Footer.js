import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5 mt-5">
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
                  <div>
                    Inicio
                  </div>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/nosotras">
                  <div>
                    Quienes Somos
                  </div>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/faq">
                  <div>
                    Preguntas frecuentes
                  </div>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Productos</h5>
            <ul>
              <li>
                <LinkContainer to="/productos">
                  <div>
                    Todos
                  </div>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/categoria/nuevo">
                  <div>
                    Nuevos
                  </div>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/categoria/usado">
                  <div>
                    Usados
                  </div>
                </LinkContainer>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
