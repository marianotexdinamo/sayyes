import React, { useState, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ThemeContext = createContext();

function CartWidget() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <ThemeContext.Provider value={1}>
      <div>
        <FontAwesomeIcon className="mr-5" icon={faCartShopping} />
        {cartCount}
      </div>
    </ThemeContext.Provider>
  );
}

export default CartWidget;
