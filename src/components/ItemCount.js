import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ItemCount({ stock, initial, onAdd }) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <InputGroup>
          <Button variant="outline-primary">-</Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={initial}
          />
          <Button variant="outline-primary" onClick={onAdd}>
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
