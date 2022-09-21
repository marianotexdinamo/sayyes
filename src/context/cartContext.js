import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemsCart = (item, cantidad) => {

    if (cart.length === 0) {
      const producto = { ...item, cantidad };
      setCart([...cart, producto]);
    }
    
    cart.forEach((obj) => {
      if (obj.id === item.id) {
        let cantidadFinal = obj.cantidad + cantidad;
        setCart([{ ...obj, cantidad: cantidadFinal }]);
      } else {
        const producto = { ...item, cantidad };
        setCart([...cart, producto]);
      }
    });
  };

  const removeItemsCart = (items) => {
    console.log("Se removió del carrito");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemsCart,
        removeItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
