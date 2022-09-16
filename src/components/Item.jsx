import React from "react";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import vestido1 from "../assets/img/vestido1.jpg";
import vestido2 from "../assets/img/vestido2.jpg";
import vestido3 from "../assets/img/vestido3.jpg";
import vestido4 from "../assets/img/vestido4.jpg";
import { NavLink } from "react-router-dom";

export default function Item({ name, description, price, id, stock }) {
  const vestidos = [vestido1, vestido2, vestido3, vestido4];
  const [item, setItem] = useState(1);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Img className="mb-4" variant="top" src={vestidos[id - 1]} />
        <div className="d-flex align-items-center justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Badge bg="secondary">{price}</Badge>
          <span>Stock: {stock}</span>
        </div>
        <Card.Text>{description}</Card.Text>
        <ItemCount stock={stock} initial={item}></ItemCount>
        <NavLink to={`/producto/${id}`}>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary">Ver más</Button>
          </div>
        </NavLink>
      </Card.Body>
    </Card>
  );
}
