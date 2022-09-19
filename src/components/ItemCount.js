import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const EventAdd = () => {
    onAdd(count);
  };

  return (
    <>
      <Row className="my-4">
        <Col>
          <InputGroup>
            <Button
              onClick={() => {
                if (count !== 1) {
                  setCount(count - 1);
                }
              }}
              variant="outline-primary"
            >
              -
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={count}
              readOnly={true}
            />
            <Button
              variant="outline-primary"
              onClick={() => {
                if (count + 1 <= stock) {
                  setCount(count + 1);
                }
              }}
            >
              +
            </Button>
          </InputGroup>
        </Col>
        <Col>
          <Button variant="primary" onClick={EventAdd}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>

      <LinkContainer to="/carrito">
        <Button variant="primary">Finalizar compra</Button>
      </LinkContainer>
    </>
  );
}

export default ItemCount;
