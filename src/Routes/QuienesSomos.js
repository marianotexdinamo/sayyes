import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeroSection from "../components/HeroSection";

export default function QuienesSomos() {
  return (
    <>
      <HeroSection text="Nosotras" img="../assets/img/vestido2.jpg" />
      <Container className="my-4">
        <Row className="mt-5 align-items-center">
          <Col className="col-4">
            <img className="img-fluid" src="../assets/img/nosotras.jpg" alt="SAYYES!"/>
          </Col>
          <Col className="col-5 offset-1">
            <h1>Say YES!</h1>
            <p>
              Say yes nace para brindar una experiencia distinta a quienes nos
              eligen. Nuestro showroom es un espacio boutique donde, además de
              encontrar vestidos ready to wear, te acompañamos para que el día
              de tu casamiento sea un sueño cumplido. También te vamos a
              recomendar profesionales referentes en el mundo novias para tu
              boda. Somos sofi, lula y sole, estamos para asesorarte en este
              momento tan importante para vos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
