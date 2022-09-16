import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemDetail({imagen, nombre, descripcion, precio, stock}) {
  return (
    <Container>
        <Row>
            <Col>
                <img src={imagen} alt=""/>
            </Col>
            <Col>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h3>{precio}</h3>
                <h5>{stock}</h5>
            </Col>
        </Row>
    </Container>
  )
}
