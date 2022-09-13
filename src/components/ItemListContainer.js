import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer() {

    function onAdd(){
        setItem( 1 + 2)
    }

    const [item, setItem] = useState(1);

    return (
        <div className="mt-5">
            <ItemCount stock="5" initial={item} onAdd={() => onAdd()}></ItemCount>
            <ItemList></ItemList>
        </div>
    );
}

export default ItemListContainer;