import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeroSection from '../components/HeroSection';

export default function Contacto() {
  return (
    <>
      <HeroSection text="Contacto" img="../assets/img/vestido1.jpg" />
      <Container className="my-4">
        <Row>
          <Col>
            <div>Contacto</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
