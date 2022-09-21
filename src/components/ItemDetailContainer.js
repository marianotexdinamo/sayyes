import React from "react";
import { useState, useEffect } from "react";
import {data} from "./data.js";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const id = parseInt(useParams().id);

  useEffect(() => {
    const getIem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 800);
    });

    getIem.then((res) => {
      res.forEach(element => {
        if(element.id === id) {
          setItem(element);
        }
      });
    });
  }, []);

  return (
    <div className="mt-5">
      {item.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ItemDetail item={item}/>
      )}
    </div>
  );
}
