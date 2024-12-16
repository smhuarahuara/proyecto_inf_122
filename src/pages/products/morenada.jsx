import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

// Importación de la imagen de la Morenada (suponiendo que tenemos imágenes)
import morenadaImage from '../../assets/morenada_img.jpeg';

const Morenada = () => {
  return (
    <Container className="mt-5">
      {/* Introducción */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">La Morenada</h1>
          <p className="lead">
            La Morenada es una de las danzas folclóricas más representativas de Bolivia, conocida por sus trajes elaborados
            y su potente ritmo que refleja la lucha de los esclavos africanos y su travesía cultural.
          </p>
        </Col>
      </Row>

      {/* Historia de La Morenada */}
      <Row>
        <Col>
          <h2 className="text-info">Historia de La Morenada</h2>
          <p>
            La Morenada tiene su origen en el periodo colonial, como una representación del sufrimiento y la resistencia
            de los esclavos africanos traídos a Bolivia para trabajar en las minas de Potosí y otras regiones. La danza hace
            referencia al trabajo arduo que los esclavos realizaban en las minas, simbolizando el dolor, la lucha, pero también
            la perseverancia de los negros afrodescendientes en su nueva tierra.
            <br />
            Se caracteriza por sus enormes máscaras de "morenos" (personajes que representan a los esclavos) y un conjunto
            musical vibrante y enérgico, donde destaca el uso de tambores y viento. A lo largo del tiempo, ha evolucionado hasta
            convertirse en una de las danzas más importantes y simbolistas del folklore boliviano.
          </p>
        </Col>
      </Row>

      {/* Imagen de la Morenada */}
      <Row className="text-center my-5">
        <Col>
          <img
            src={morenadaImage}
            alt="La Morenada"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            className="rounded"
          />
        </Col>
      </Row>

      {/* Evolución de La Morenada */}
      <Row>
        <Col>
          <h2 className="text-info">Evolución de La Morenada</h2>
          <p>
            Originalmente, la danza de la Morenada era interpretada como una especie de rito, con personajes representando
            las penas y alegrías de los esclavos, mostrando su resistencia tanto a las malas condiciones de vida como su
            adaptación y contribución al país.
            <br />
            Con el tiempo, los trajes y la música de la Morenada comenzaron a transformarse, conservando su esencia, pero
            adquiriendo un componente más estético y festivo. Actualmente, es una danza que no solo está presente en festivales,
            sino también en todo tipo de eventos culturales, especialmente en el Carnaval de Oruro, donde se considera una de
            las danzas más importantes.
          </p>
        </Col>
      </Row>

      {/* ¿Dónde se baila la Morenada? */}
      <Row>
        <Col>
          <h2 className="text-info">¿Dónde se baila la Morenada?</h2>
          <p>
            La Morenada es una danza popular en todo el altiplano boliviano, especialmente en los departamentos de Potosí,
            Oruro y La Paz. Además, en los últimos años ha ganado popularidad en otros departamentos y también en el exterior,
            especialmente dentro de las comunidades bolivianas en países como Argentina, Brasil y Chile.
            <br />
            La Morenada tiene una fuerte conexión con el Carnaval de Oruro, donde la danza se presenta con trajes elaborados y
            una puesta en escena impresionante.
          </p>
        </Col>
      </Row>

      {/* Lista de departamentos que bailan La Morenada */}
      <Row>
        <Col>
          <h3>Principales departamentos donde se baila:</h3>
          <ListGroup>
            <ListGroupItem>Potosí</ListGroupItem>
            <ListGroupItem>Oruro</ListGroupItem>
            <ListGroupItem>La Paz</ListGroupItem>
            <ListGroupItem>Cochabamba</ListGroupItem>
            <ListGroupItem>Chuquisaca</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* La Morenada en el Carnaval de Oruro */}
      <Row>
        <Col>
          <h2 className="text-info">La Morenada en el Carnaval de Oruro</h2>
          <p>
            El Carnaval de Oruro es, sin lugar a dudas, el escenario más importante para la Morenada. En este evento, miles
            de danzantes de distintos grupos folklóricos y bailarines participan todos los años, mostrando su destreza, energía
            y pasión. Los trajes característicos de la Morenada se componen de enormes máscaras que representan las caras de los
            esclavos africanos y trajes ornamentados con bellos detalles que les dan un aire imponente.
            <br />
            Este Carnaval no solo celebra la danza, sino también la historia de la resistencia, el sufrimiento, y la cultura
            afroboliviana. La Diablada es una de las danzas más importantes, representada por miles de danzantes, cantores y
            músicos que llevan sus costumbres por toda Bolivia y el mundo.
          </p>
        </Col>
      </Row>

      {/* Mensaje Final */}
      <Row className="text-center mt-5">
        <Col>
          <p>
            La Morenada continúa siendo un símbolo de lucha, resistencia y herencia de los pueblos indígenas y afrodescendientes
            de Bolivia, recordando la importancia de preservar nuestras tradiciones más arraigadas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Morenada;
