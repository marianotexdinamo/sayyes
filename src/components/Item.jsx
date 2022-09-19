import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Item({ name, description, price, id, stock, imagen }) {

  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img className="mb-4" variant="top" src={imagen} />
        <div className="d-flex align-items-center justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Badge bg="secondary">{price}</Badge>
          <span>Stock: {stock}</span>
        </div>
        <Card.Text>{description}</Card.Text>        
        <NavLink to={`/producto/${id}`}>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary">Ver más</Button>
          </div>
        </NavLink>
      </Card.Body>
    </Card>
  );
}
