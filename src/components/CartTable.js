import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';


export default function CartTable() {
  const cartValues = useContext(CartContext);

  return (
    <>
      {cartValues.cart !== 0 && (
        <Table striped>
          <thead>
            <tr>
              <th>Orden</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio Unidad</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cartValues.cart.map((item, index) => {
              return (
                <tr key={item.id} style={ {verticalAlign: "baseline"} }>
                  <td>{index + 1}</td>
                  <td><img width="50" src={item.imageId} alt={item.title}/></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.cantidad}</td>
                  <td>
                    <Button variant="primary" onClick={() => cartValues.removeItemsCart(item)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
