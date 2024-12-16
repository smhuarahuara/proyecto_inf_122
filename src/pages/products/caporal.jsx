import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

// Importación de la imagen de Caporales
import caporalesImage from '../../assets/caporal.jpeg';

const CaporalPage = () => {
  return (
    <Container className="mt-5">
      {/* Introducción */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">Los Caporales</h1>
          <p className="lead">
            La danza de Los Caporales es una de las más enérgicas y emocionantes del folklore boliviano. Originada por la
            mezcla de culturas indígenas y afrobolivianas, es una expresión de fuerza, agilidad y la historia del pueblo
            boliviano.
          </p>
        </Col>
      </Row>

      {/* Historia de Los Caporales */}
      <Row>
        <Col>
          <h2 className="text-info">Historia de Los Caporales</h2>
          <p>
            La danza de los Caporales tiene sus orígenes en la mezcla de las culturas afrobolivianas e indígenas. Esta danza
            surgió de la necesidad de representar la vida de los esclavos afrodescendientes y los capataces, los "caporales"
            que eran responsables de supervisar el trabajo de los esclavos en las minas.
            <br />
            En sus primeros años, los Caporales eran parte de la tradición del Carnaval de Oruro, y era un baile de personas
            fuertes y rápidas, con trajes brillantes que representaban tanto a los esclavos como a los capataces. Con el
            tiempo, la danza evolucionó hasta convertirse en una de las principales representaciones del folklore boliviano.
          </p>
        </Col>
      </Row>

      {/* Imagen de Los Caporales */}
      <Row className="text-center my-5">
        <Col>
          <img
            src={caporalesImage}
            alt="Los Caporales"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            className="rounded"
          />
        </Col>
      </Row>

      {/* Evolución de Los Caporales */}
      <Row>
        <Col>
          <h2 className="text-info">Evolución de Los Caporales</h2>
          <p>
            Los Caporales han evolucionado a lo largo del tiempo desde sus humildes orígenes como una danza de resistencia
            y protesta hasta convertirse en un emblema de la cultura boliviana. En sus inicios, la danza reflejaba la dureza
            de la vida en las minas y la opresión de los esclavos, mientras que hoy día se muestra más enérgica, destacando la
            vitalidad y destreza de los danzantes. 
            <br />
            A medida que el Carnaval de Oruro creció en importancia, la danza fue incorporando nuevas formas, trajes más
            elaborados y una música más vigorosa. Además, los movimientos rápidos y ágiles de los bailarines hoy son clave para
            su caracterización.
          </p>
        </Col>
      </Row>

      {/* ¿Dónde se baila Los Caporales? */}
      <Row>
        <Col>
          <h2 className="text-info">¿Dónde se baila Los Caporales?</h2>
          <p>
            Los Caporales son principalmente representados en Oruro y La Paz, durante el famoso Carnaval de Oruro, pero esta
            danza también tiene una presencia importante en otros departamentos como Cochabamba, Sucre, y Tarija.
            <br />
            Hoy día, grupos folklóricos de Bolivia y de las comunidades bolivianas en el extranjero, como en Argentina y Chile,
            mantienen viva esta danza como una manera de mostrar la cultura y las tradiciones de su país natal.
          </p>
        </Col>
      </Row>

      {/* Lista de departamentos que bailan Los Caporales */}
      <Row>
        <Col>
          <h3>Principales departamentos donde se baila:</h3>
          <ListGroup>
            <ListGroupItem>Oruro</ListGroupItem>
            <ListGroupItem>La Paz</ListGroupItem>
            <ListGroupItem>Cochabamba</ListGroupItem>
            <ListGroupItem>Tarija</ListGroupItem>
            <ListGroupItem>Sucre</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* Los Caporales en el Carnaval de Oruro */}
      <Row>
        <Col>
          <h2 className="text-info">Los Caporales en el Carnaval de Oruro</h2>
          <p>
            El Carnaval de Oruro es el escenario principal para esta danza. Durante el evento, cientos de miles de
            danzantes de Caporales se agrupan para participar en desfiles llenos de energía y color. La danza en este evento
            es una mezcla de destreza, precisión y fuerza que atrae tanto a locales como a turistas de todo el mundo.
            <br />
            Los danzantes, con sus trajes brillantes, sombreros adornados y máscaras imponentes, representan el trabajo de
            los antiguos capataces de las minas en Bolivia. El evento ha sido reconocido por la UNESCO como un Patrimonio de la
            Humanidad.
          </p>
        </Col>
      </Row>

      {/* Mensaje Final */}
      <Row className="text-center mt-5">
        <Col>
          <p>
            Los Caporales son un símbolo de la identidad boliviana, una danza vibrante llena de historia, cultura y pasión que
            honra la lucha de los pueblos bolivianos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CaporalPage;
