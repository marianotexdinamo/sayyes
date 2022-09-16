import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function QuienesSomos() {
  return (
    <>
      <NavBar/>
      <Container className="my-4">
            <Row>
                <Col>
                    <div>Quienes Somos</div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
