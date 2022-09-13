import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item({name, description, price}) {

    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Card.Text>
        {price}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}
