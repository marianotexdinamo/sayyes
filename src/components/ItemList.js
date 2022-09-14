import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';


export default function ItemList() {
  const vestidosArr = [
    {
      id: 1,
      nombre: "Vainillla",
      descripcion: "Usado",
      precio: 50000,
      stock: 5,
    },
    {
      id: 2,
      nombre: "Campo",
      descripcion: "Nuevo",
      precio: 100000,
      stock: 3,
    },
    {
      id: 3,
      nombre: "Clásico",
      descripcion: "Nuevo",
      precio: 150000,
      stock: 10,
    },
    {
      id: 4,
      nombre: "Moderno",
      descripcion: "Nuevo",
      precio: 150000,
      stock: 2,
    },
  ];

  const [vestidos, setVestidos] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vestidosArr);
      }, 2000);
    });

    getItem.then((res) => {
      console.log(res);
      setVestidos(res);
    });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {vestidos.length !== 0 ? (
          vestidos.map((item) => {
            return (
              <Col>
                <Item
                  key={item.id}
                  name={item.nombre}
                  description={item.descripcion}
                  price={item.precio}
                  id={item.id}
                  stock={item.stock}
                ></Item>
              </Col>
            );
          })
        ) : (
          <div class="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
}
