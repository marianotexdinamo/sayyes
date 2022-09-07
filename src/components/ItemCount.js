import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ItemCount({ stock, initial, onAdd }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={2}>
                        <InputGroup className="mb-3">
                            <Button variant="outline-secondary">
                                -
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                value={initial}
                            />
                            <Button variant="outline-secondary" onClick={onAdd}>
                                +
                            </Button>
                        </InputGroup>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemCount;