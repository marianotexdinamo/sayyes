import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemList() {
  const [vestidos, setVestidos] = useState([]);
  const categoria = useParams().categoria;

  const getFirebase = () => {
    const db = getFirestore();
    var itemsCollection;

    if (categoria === undefined) {
      itemsCollection = collection(db, "items");
    } else {
      itemsCollection = query(
        collection(db, "items"),
        where("categoryId", "==", categoria)
      );
    }

    getDocs(itemsCollection).then((data) => {
      if (data.size === 0) {
        console.log("no hay resultados");
      } else {
        setVestidos(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    });
  };

  useEffect(() => {
    getFirebase();
  }, []);

  useEffect(() => {
    setVestidos([]);
    getFirebase();
  }, [categoria]);

  return (
    <Container className="mt-5">

      {categoria === "nuevo" && vestidos.length !== 0 && (
        <Col className="col-12">
          <h6 className="text-left mb-4">Vestidos nuevos</h6>
        </Col>
      )}
      {categoria === "usado" && vestidos.length !== 0 && (
        <Col className="col-12">
          <h6 className="text-left mb-4">Vestidos usados</h6>
        </Col>
      )}
      {categoria === undefined && vestidos.length !== 0 && (
        <Col className="col-12">
          <h6 className="text-left mb-4">Todos los vestidos</h6>
        </Col>
      )}
      
      <Row>
        {vestidos.length !== 0 ? (
          vestidos.map((item) => {
            return (
              <Col key={item.id}>
                <Item
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  categoryId={item.categoryId}
                  price={item.price}
                  id={item.id}
                  stock={item.stock}
                  imageId={item.imageId}
                ></Item>
              </Col>
            );
          })
        ) : (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
}
