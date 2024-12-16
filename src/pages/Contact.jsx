import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => {
  return (
    <Container className="mt-5">
      {/* Sección de Título */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">Contáctanos</h1>
          <p className="lead">Estamos ubicados en Bolivia, en la Plaza Murillo, La Paz.</p>
          <hr />
        </Col>
      </Row>

      {/* Sección de Descripción y Mapa */}
      <Row>
        <Col md="6">
          <h4 className="text-primary">¿Dónde estamos?</h4>
          <p>
            Nos encontramos en el corazón de La Paz, Bolivia. Nuestra oficina está ubicada en la famosa
            Plaza Murillo, conocida por su arquitectura histórica y por ser un punto central de la vida política
            en Bolivia.
          </p>
          <h5 className="text-primary">Dirección:</h5>
          <p>
            Plaza Murillo, La Paz, Bolivia
          </p>
        </Col>

        <Col md="6">
          <h4 className="text-primary">Mapa de Ubicación</h4>
          {/* Incrustar el Mapa de Google */}
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Plaza+Murillo,La+Paz,Bolivia&key=AIzaSyA1HiiH_NjQqOf0H6O2PjUJxyZdB2Rm39Y"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>
      </Row>

      {/* Sección de Contacto */}
      <Row className="mt-5 text-center">
        <Col>
          <h4 className="text-primary">Números de Contacto</h4>
          <p>
            Puedes llamarnos a los siguientes números de teléfono:
          </p>
          <ul>
            <li><strong>+591 123 4567</strong> - Línea fija</li>
            <li><strong>+591 987 6543</strong> - Línea móvil</li>
          </ul>
        </Col>
      </Row>

      {/* Sección de Formulario de Contacto */}
      <Row className="mt-5">
        <Col md="12">
          <h4 className="text-primary text-center">Envíanos un mensaje</h4>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="name">Nombre</Label>
                  <Input type="text" name="name" id="name" placeholder="Tu nombre" />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label for="email">Correo Electrónico</Label>
                  <Input type="email" name="email" id="email" placeholder="Tu correo electrónico" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="message">Mensaje</Label>
              <Input type="textarea" name="message" id="message" rows="5" placeholder="Escribe tu mensaje" />
            </FormGroup>
            <Button color="primary">Enviar Mensaje</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
