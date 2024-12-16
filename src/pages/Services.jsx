import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Importamos las imágenes
import viajesImage from '../assets/viajes.jpeg';
import concursosImage from '../assets/concursos.jpeg';
import entradasImage from '../assets/entradas.jpeg';
import internacionalesImage from '../assets/internacionales.jpeg';

// Importamos el componente de la cajita de servicios
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      imgSrc: viajesImage,
      title: "Viajes de Danzas",
      description: "Vive la experiencia de compartir y presentar nuestras danzas tradicionales en diversas ciudades y países, participando en festivales y eventos culturales internacionales."
    },
    {
      imgSrc: concursosImage,
      title: "Participación en Concursos",
      description: "Participa en concursos nacionales e internacionales de danzas folklóricas, donde el talento y la pasión por nuestra cultura serán el centro de atención."
    },
    {
      imgSrc: entradasImage,
      title: "Entradas Folklóricas",
      description: "Participamos en las mejores entradas folklóricas del país, mostrando nuestras danzas tradicionales durante las festividades como el Carnaval de Oruro y otros eventos."
    },
    {
      imgSrc: internacionalesImage,
      title: "Experiencias Internacionales",
      description: "Ofrecemos la oportunidad de conocer y participar en festivales internacionales, llevando nuestra danza y cultura boliviana más allá de las fronteras."
    }
  ];

  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">Nuestros Servicios</h1>
          <p className="lead">
            Te ofrecemos una variedad de experiencias para explorar y disfrutar de las danzas folklóricas bolivianas en su máxima expresión.
          </p>
        </Col>
      </Row>

      <Row>
        {services.map((service, index) => (
          <Col key={index} md="3" sm="12" className="mb-4">
            <ServiceCard
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
