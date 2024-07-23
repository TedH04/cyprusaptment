import React from "react";
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import './styling/contactPage.css';

export const ContactPage = () => {
  return (
    <Container className="contact-page">
      <SemanticHeader as='h2'>Kontakt Information</SemanticHeader>
      <p>Name: Natasa Sillén</p>
      <p>Email: Natasasillen@gmail.com</p>
    </Container>
  );
};
