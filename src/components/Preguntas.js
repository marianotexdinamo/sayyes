import Accordion from "react-bootstrap/Accordion";

export default function Preguntas() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Cómo subir fotos de mi vestido?</Accordion.Header>
        <Accordion.Body>
          <p>En el formulario podrás adjuntar las fotos.</p>
          <p>
            Recomendamos que sean 3 fotos, de frente, de espalda y de algún
            detalle que quieras mostrar.
          </p>
          <p>
            Pueden ser del día de tu casamiento, si querés subir las fotos sólo
            del vestido, éste debe estar colgado en una percha y el fondo debe
            ser blanco.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          ¿Cómo me entero si mi vestido fue vendido?
        </Accordion.Header>
        <Accordion.Body>
          <p>Te contactaremos a tu celular.</p>
          <p>Verificá que tu número sea el correcto.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Si reservé un vestido ¿Tengo que pagar cita de nuevo para volver a
          medírmelo y definir?
        </Accordion.Header>
        <Accordion.Body>
          <p>¡No! La cita solo se paga la primera vez.</p>
          <p>
            En el caso de comprar y que tu vestido necesite retoques, te
            acompañamos con nuestra modista.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Compré vestido en Say Yes ¿Puedo revenderlo con ustedes?
        </Accordion.Header>
        <Accordion.Body>
          <p>¡Obvio que si!</p>
          <p>Creemos y apoyamos la moda circular.</p>
          <p>Para vender tu vestido ingresa a este formulario:</p>
          <a target="_blank" className="btn btn-primary" href="https://forms.gle/LyNhFV1gTzt3TXT36">Formulario</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Si compro un vestido y necesita algunos cambios con la modista, ¿estan incluidos en el precio de compra?
        </Accordion.Header>
        <Accordion.Body>
          <p>¡Sí! Y también están incluidas todas las visitas que necesites con la
          modista, nosotras te acompañamos siempre.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
