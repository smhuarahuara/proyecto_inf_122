import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom"; // Importar Link

// Importar imágenes locales
import diabladaImage from "../assets/diablada.jpeg";
import caporalesImage from "../assets/caporal.jpeg";
import morenadaImage from "../assets/morenada.jpeg";

const Home = () => {
  return (
    <Container className="mt-5">
      {/* Sección de bienvenida */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">Danzas Folklóricas de Bolivia</h1>
          <p className="lead">
            Explora la riqueza cultural de Bolivia a través de sus danzas folclóricas más representativas.
          </p>
          <hr />
        </Col>
      </Row>

      {/* Sección de imágenes */}
      <Row>
        <Col md="4">
          <Link to="/products/diablada"> {/* Envolvemos el Card en un Link */}
            <Card>
              <CardImg
                top
                width="100%"
                src={diabladaImage}
                alt="La Diablada"
              />
              <CardBody>
                <CardTitle tag="h5">La Diablada</CardTitle>
                <CardText>
                  Una de las danzas más icónicas del Carnaval de Oruro, declarada Patrimonio de la Humanidad.
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Col md="4">
          <Link to="/products/caporal"> {/* Envolvemos el Card en un Link */}
            <Card>
              <CardImg
                top
                width="100%"
                src={caporalesImage}
                alt="Caporales"
              />
              <CardBody>
                <CardTitle tag="h5">Los Caporales</CardTitle>
                <CardText>
                  Inspirada en los capataces afrobolivianos, llena de energía y movimiento.
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Col md="4">
          <Link to="/products/morenada"> {/* Envolvemos el Card en un Link */}
            <Card>
              <CardImg
                top
                width="100%"
                src={morenadaImage}
                alt="La Morenada"
              />
              <CardBody>
                <CardTitle tag="h5">La Morenada</CardTitle>
                <CardText>
                  Una danza que representa a los esclavos africanos, con trajes elegantes y ritmo pausado.
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>

      {/* Mensaje final */}
      <Row className="mt-5 text-center">
        <Col>
          <p>
            Nuestro objetivo es dar a conocer y valorar las tradiciones culturales bolivianas que forman parte de la
            identidad de nuestro país. ¡Sigue explorando para aprender más!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
