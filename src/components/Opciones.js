import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Opciones() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center mb-4">
          <h4>¿Qué deseas hacer?</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-4 offset-2">
          <div className="border d-flex align-items-center p-5">
            <img width="50" src="../assets/img/vender.svg" alt="Vender" />
            <div>
              <h5>Quiero vender</h5>
              <p>Minim nostrud nostrud proident eu.</p>
            </div>
          </div>
        </Col>
        <Col className="col-4">
          <div className="border d-flex align-items-center p-5">
            <img width="50" src="../assets/img/vender.svg" alt="Vender" />
            <div>
              <h5>Quiero probarme</h5>
              <p>Commodo ipsum tempor qui dolor laboris id.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
