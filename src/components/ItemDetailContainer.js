import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const id = useParams().id;

  const getFirebase = () => {
    const db = getFirestore();
    const itemFirebase = doc(db, "items", id);
    getDoc(itemFirebase).then((data) => {
      if( data.exists() ){
        setItem( { id: data.id, ...data.data() } );
      }
    });
  }

  useEffect(() => {
    getFirebase();
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
