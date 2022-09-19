import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "./ItemCount";

export default function ItemDetail({imagen, nombre, descripcion, precio, stock}) {

  const [stockEnd, setStockEnd] = useState(stock);

  const onAdd = (quantityToAdd) => {
    if( stock >= quantityToAdd){
      if(stockEnd !== 0){
        setStockEnd(stockEnd - quantityToAdd)
      }
    }
  }

  return (
    <Container>
        <Row>
            <Col className="col-5">
                <img className="img-fluid" src={imagen} alt=""/>
            </Col>
            <Col className='col-5 offset-1'>
                <h1>{nombre}</h1>
                <p>Descripción: {descripcion}</p>
                <h3>Precio: {precio}</h3>
                <h5>Stock: {stockEnd}</h5>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
            </Col>
        </Row>
    </Container>
  )
}
