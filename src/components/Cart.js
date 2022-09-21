import React, { useContext, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/cartContext";
import CartTable from "./CartTable";
import Modal from "react-bootstrap/Modal";

export default function Cart() {
  const cartValues = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearCart = () => {
    cartValues.clearCart()
    handleClose()
  }

  return (
    <>
      <Container className="mt-4">
        {cartValues.cart.length === 0 ? (
          <Row>
            <p>Tu carrito está vacio</p>
          </Row>
        ) : (
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
                  <Card.Title>Total: ${cartValues.total}</Card.Title>
                  <div className="d-grid gap-2">
                    <Button variant="primary">Ir a Pagar</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-9 mt-5 d-flex justify-content-end">
              <Button
                className="ml-auto"
                variant="outline-primary"
                onClick={handleShow}
              >
                Vaciar carrito
              </Button>
            </Col>
          </Row>
        )}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vaciar carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-5">
          <p>Estás a punto de eliminar todos los items del carrito</p>
          <h5>¿Deseas elminiar todos los items del carrito?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={clearCart}>
            Si, eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
