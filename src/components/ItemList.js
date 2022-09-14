import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

export default function ItemList() {
  const vestidos = [
    {
      id: 1,
      nombre: "Vainillla",
      descripcion: "Usado",
      precio: 50000,
    },
    {
      id: 2,
      nombre: "Campo",
      descripcion: "Nuevo",
      precio: 100000,
    },
    {
      id: 3,
      nombre: "Clásico",
      descripcion: "Nuevo",
      precio: 150000,
    },
    {
      id: 4,
      nombre: "Moderno",
      descripcion: "Nuevo",
      precio: 150000,
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {vestidos.map((item) => {
          return (
            <Col>
              <Item
                key={item.id}
                name={item.nombre}
                description={item.descripcion}
                price={item.precio}
                id={item.id}
              ></Item>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
