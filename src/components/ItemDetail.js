import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "./ItemCount";
import { CartContext } from '../context/cartContext';


export default function ItemDetail({item}) {
  const cartValues = useContext(CartContext);

  const onAdd = (cantidad) => {
    cartValues.addItemsCart(item, cantidad)
  }

  return (
    <Container>
        <Row>
            <Col className="col-5">
                <img className="img-fluid" src={item.imageId} alt={item.title}/>
            </Col>
            <Col className='col-5 offset-1'>
                <h1>{item.title}</h1>
                <p>Descripción: {item.description}</p>
                <h3>Precio: {item.price}</h3>
                <h4>Categoría: {item.categoryId}</h4>
                <h5>Stock: {item.stock}</h5>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
            </Col>
        </Row>
    </Container>
  )
}
