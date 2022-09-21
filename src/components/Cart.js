import React, {useContext} from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/cartContext";
import CartTable from "./CartTable";


export default function Cart() {
  const cartValues = useContext(CartContext);

  return (
    <Container className="mt-4">
      
        {cartValues.cart.length === 0 ? 
        <Row>
          <p>Tu carrito está vacio</p>
        </Row>
        :
        <Row>
          <Col className="col-9">
          <Card>
            <Card.Body>
              <CartTable></CartTable>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card>
            <Card.Body>
              <Card.Title>Total: $</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="primary">Ir a Pagar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        }
        
      
    </Container>
  );
}
