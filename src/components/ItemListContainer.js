import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemListContainer() {

    function onAdd(){
        setItem( 1 + 2)
    }

    const [item, setItem] = useState(1);

    return (
        <div className="mt-5">
            <ItemCount stock="5" initial={item} onAdd={() => onAdd()}></ItemCount>
        </div>
    );
}

export default ItemListContainer;