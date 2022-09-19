import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon className="mr-5" icon={faCartShopping} />
            5
        </div>
    );
}

export default CartWidget;