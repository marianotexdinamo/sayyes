import React, { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const addItemsCart = (item, cantidad) => {
    if ( isInCart( item.id ) ) {
      let producto = cart.find(x => x.id === item.id)
      cart[cart.indexOf(producto)].cantidad += cantidad;
      setCart([...cart]);
    } else{
      setCart([...cart, {...item, cantidad: cantidad}]);
    }
    const totalParcial = item.precio * cantidad;
    const totalEnd = totalParcial + total;
    setTotal(totalEnd)
  };

  const clearCart = () => {
    setCart([]);
  }

  const removeItemsCart = (item) => {
    if ( isInCart( item.id ) ) {      
      const producto = cart.find(x => x.id === item.id)
      if(cart[cart.indexOf(producto)].cantidad > 1){
        var productoH = cart.find(x => x.id === item.id)
        cart[cart.indexOf(productoH)].cantidad -= 1;
        setCart([...cart]);
        const totalEnd = total - item.precio;
        setTotal(totalEnd)
      } else{
        setCart(current => current.filter(item => {
          return item.id !== item.id
        }))
       
      }
      
    } 
  };

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        total,
        cart,
        addItemsCart,
        clearCart,
        removeItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
