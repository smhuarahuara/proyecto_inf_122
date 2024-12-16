import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

// Importación de la imagen de la Diablada (suponiendo que tenemos imágenes)
import diabladaImage from '../../assets/diablada_img.jpeg';

const DiabladaPage = () => {
  return (
    <Container className="mt-5">
      {/* Introducción */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">La Diablada</h1>
          <p className="lead">
            La Diablada es una de las danzas más representativas del folklore boliviano, conocida por su espectacularidad y su
            representación de la lucha entre el bien y el mal.
          </p>
        </Col>
      </Row>

      {/* Historia de La Diablada */}
      <Row>
        <Col>
          <h2 className="text-info">Historia de La Diablada</h2>
          <p>
            La Diablada es originaria del carnaval de Oruro, Bolivia, y tiene sus raíces en las tradiciones andinas fusionadas con
            influencias coloniales. Se dice que representa la lucha entre el bien y el mal, con los diablos, que forman una parte
            clave de la coreografía, representando las fuerzas oscuras y demoníacas.
            <br />
            La danza se caracteriza por los disfraces vibrantes, máscaras elaboradas y su fuerte simbolismo religioso y cultural.
          </p>
          <p>
            En los primeros tiempos, los bailarines de Diablada representaban a los indios originarios luchando contra las fuerzas
            colonizadoras. La danza fue transformándose con el tiempo, hasta llegar a la versión moderna que conocemos hoy en día,
            con la participación no solo de la población indígena sino también de otras culturas bolivianas.
          </p>
        </Col>
      </Row>

      {/* Imagen de la Diablada */}
      <Row className="text-center my-5">
        <Col>
          <img
            src={diabladaImage}
            alt="Diablada"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            className="rounded"
          />
        </Col>
      </Row>

      {/* Evolución de La Diablada */}
      <Row>
        <Col>
          <h2 className="text-info">Evolución de La Diablada</h2>
          <p>
            A lo largo de los años, la Diablada ha evolucionado tanto en su música como en la interpretación y vestimenta. En sus
            orígenes, esta danza estaba vinculada al culto a la Pachamama, donde se invocaba a las fuerzas naturales.
            <br />
            Sin embargo, tras la llegada de los colonizadores, la danza comenzó a fusionarse con las tradiciones europeas y cristianas.
            <br />
            Hoy en día, el espectáculo de la Diablada está lleno de coloridas máscaras de diablo, que se destacan por su tamaño
            y complejidad, y por los trajes que representan tanto a los demonios como a los ángeles, los cuales tienen la
            misión de derrotarlos.
          </p>
        </Col>
      </Row>

      {/* ¿Dónde se baila la Diablada? */}
      <Row>
        <Col>
          <h2 className="text-info">¿Dónde se baila la Diablada?</h2>
          <p>
            La Diablada es una danza tradicionalmente bailada en el departamento de Oruro durante el famoso Carnaval de Oruro,
            reconocido por la UNESCO como uno de los patrimonios de la humanidad. 
            <br />
            También es común en otras festividades y celebraciones en varias regiones de Bolivia, con algunos lugares con versiones
            particulares que añaden sus propios estilos y símbolos a la danza.
          </p>
        </Col>
      </Row>

      {/* Lista de departamentos que bailan La Diablada */}
      <Row>
        <Col>
          <h3>Principales departamentos donde se baila:</h3>
          <ListGroup>
            <ListGroupItem>Oruro</ListGroupItem>
            <ListGroupItem>Potosí</ListGroupItem>
            <ListGroupItem>Cochabamba</ListGroupItem>
            <ListGroupItem>La Paz</ListGroupItem>
            <ListGroupItem>Santa Cruz</ListGroupItem>
            <ListGroupItem>Chuquisaca</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      {/* La Diablada en el Carnaval de Oruro */}
      <Row>
        <Col>
          <h2 className="text-info">La Diablada en el Carnaval de Oruro</h2>
          <p>
            El Carnaval de Oruro es uno de los eventos más importantes de Bolivia, y la Diablada es, sin duda, uno de los
            momentos más esperados. Miles de bailarines y grupos folklóricos desfilan durante varios días con los trajes
            tradicionales de la Diablada, incluyendo los diablos, ángeles y otros personajes mitológicos.
            <br />
            La danza es considerada una obra maestra del patrimonio cultural de la humanidad, y su ejecución está regida por un
            protocolo riguroso que se ha mantenido intacto a lo largo de los siglos, aun en medio de las influencias modernas.
          </p>
        </Col>
      </Row>

      {/* Mensaje Final */}
      <Row className="text-center mt-5">
        <Col>
          <p>
            La Diablada no es solo una danza. Es una profunda representación de nuestra historia, de la lucha cultural,
            espiritual y social. Cada movimiento, cada color, cada detalle cuenta la historia de Bolivia.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DiabladaPage;
