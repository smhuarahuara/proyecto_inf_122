import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <Card className="service-card">
      <CardImg top width="100%" src={imgSrc} alt={title} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
