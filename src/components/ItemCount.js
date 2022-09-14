import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function ItemCount({ stock, initial }) {

  const [count, setCount] = useState(initial);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <InputGroup>
          <Button variant="outline-primary">-</Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={count}
          />
          <Button variant="outline-primary" onClick={
            () => {
              if( count + 1 <= stock){
                setCount(count + 1)
              }
            }
          }>
            +
          </Button>
        </InputGroup>
        <Button className="ms-3" variant="outline-primary">
          Agregar
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
