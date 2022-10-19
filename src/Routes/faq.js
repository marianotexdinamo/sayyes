import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeroSection from "../components/HeroSection";
import Preguntas from "../components/Preguntas";

export default function Faq() {
  return (
    <>
      <HeroSection text="Preguntas frecuentes" img="../assets/img/vestido3.jpg" />
      <Container className="my-4">
        <Row className="mt-5">
          <Col className="col-12">
            <Preguntas/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
