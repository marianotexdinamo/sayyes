import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function CartWidget() {
  const { cart,total } = useContext(CartContext);
  const dropDownStyle = { minWidth: "250px", padding: "15px" };
  
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="mx-2">{cart.length}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu style={dropDownStyle}>
        <h5>Carrito</h5>
        {cart.length === 0 ? (
          <div>No hay productos en tu carrito</div>
        ) : (
          <ListGroup as="ol" numbered>
            {cart.map((item) => {
              return (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  key={item.id}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.nombre}</div>
                    Total: ${item.precio * item.cantidad}
                  </div>
                  <Badge bg="primary" pill>
                    {item.cantidad}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
        {cart.length !== 0 && (
          <>
            <Dropdown.Divider />
              <h6 className="py-3">Total: ${total}</h6>
            <Dropdown.Divider />
            <div className="d-grid gap-2">
            <LinkContainer to="/carrito">
                <Button variant="primary">Ir al carrito</Button>
                </LinkContainer>  
            </div>
            </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CartWidget;
