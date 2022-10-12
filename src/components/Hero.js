import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";


var hero1 = {
  backgroundImage: `url('../assets/img/hero1.jpg')`
}

var hero2 = {
  backgroundImage: `url('../assets/img/hero2.jpg')`
}

var hero3 = {
  backgroundImage: `url('../assets/img/hero3.jpg')`
}

export default function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item style={hero1}>
        <Carousel.Caption>
          <h3>SAYYES!</h3>
          <p>Espacio Boutique para novias.</p>
          <LinkContainer to="/productos">
          <Button className="mb-5" variant="outline-light">Mirá nuestro catálogo</Button>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={hero2}>
        <Carousel.Caption>
          <h3>¡Traé tu vestido de novia!</h3>
          <p>Nosotras nos encargamos del resto.</p>
          <Button className="mb-5" variant="outline-light">Publicar vestido</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={hero3}>
        <Carousel.Caption>
          <h3>¡Solicitá tu turno!</h3>
          <p>Podés solicitar tu turno de manera online.</p>
          <Button className="mb-5" variant="outline-light">Solicitá tu turno</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}