import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
              <Col>
                <h1 className="display-4 text-primary">Acerca de Nosotros</h1>
                <p className="lead">Empresa Lider en participación folklorica</p>
                <hr />
              </Col>
            </Row>
      <Row>
        <Col sm="12" md="12">
          <Card>
            <CardBody>
              {/* Descripción de la empresa */}
              <CardTitle tag="h5">Sobre la Empresa</CardTitle>
              <CardText>
                Somos un colectivo dedicado a la preservación y promoción de las danzas folklóricas de Bolivia, trabajando con pasión para difundir nuestra cultura a través de la música, el baile, y la vestimenta tradicional que nos representan a nivel nacional e internacional.
              </CardText>

              {/* Participaciones en actividades */}
              <CardTitle tag="h5">Nuestra Participación en Actividades</CardTitle>
              <CardText>
                A lo largo de los años, hemos sido parte de varios eventos nacionales e internacionales, demostrando el orgullo de nuestras danzas. Algunas de las actividades más destacadas incluyen:
              </CardText>
              <ul>
                <li><strong>Entradas Folklóricas:</strong> Participación en el famoso Carnaval de Oruro, representando a Bolivia con danzas como la Diablada, Caporales y Morenada.</li>
                <li><strong>Concursos Nacionales:</strong> Hemos competido y ganado premios en varios concursos de danzas folklóricas, llevando el nombre de Bolivia a todo el país.</li>
                <li><strong>Viajes y Presentaciones:</strong> Hemos realizado presentaciones en diferentes departamentos de Bolivia y en el extranjero, representando la cultura boliviana y dando a conocer nuestras tradiciones.</li>
                <li><strong>Exhibiciones Internacionales:</strong> En el ámbito internacional, hemos realizado viajes a países vecinos y otras naciones del mundo, presentando nuestras danzas ante audiencias internacionales.</li>
              </ul>

              {/* Hacia el futuro */}
              <CardTitle tag="h5">Nuestros Objetivos Futuras</CardTitle>
              <CardText>
                Nuestro objetivo es continuar expandiendo nuestra participación en eventos folclóricos internacionales, así como seguir trabajando en la preservación de la rica tradición cultural de Bolivia, impulsando la participación de jóvenes artistas.
              </CardText>

              {/* Botón hacia contacto */}
              <Button color="primary" href="/contact">Contáctanos para más información</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
