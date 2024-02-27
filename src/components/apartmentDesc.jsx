import React from "react";
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import './styling/apartmentDescription.css';

export const ApartmentDesc = () => {
  return (
    <Container className="apartment-description">
      <SemanticHeader as='h2'>About the Apartment</SemanticHeader>
      <p>Great apartment for rent in a great new area with the sea nearby and a beautiful pool</p>
    </Container>
  );
  
};
