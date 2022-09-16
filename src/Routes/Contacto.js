import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import NavBar from '../components/NavBar';

export default function Contacto() {
  return (
    <>
        <NavBar/>
        <Container className="my-4">
            <Row>
                <Col>
                    <div>Contacto</div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
