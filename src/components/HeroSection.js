import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function HeroSection({ text, img }) {
  var backgroundStyle = {
    backgroundImage: "url(" + img + ")",
  };
  return (
    <section className="hero-section">
      <div className="hero-section-bg" style={backgroundStyle}></div>
        <Container>
          <Row>
            <Col>
              <h1 className="text-white">{text}</h1>
            </Col>
          </Row>
        </Container>
    </section>
  );
}
