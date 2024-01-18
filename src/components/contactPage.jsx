import React from "react";
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import './styling/contactPage.css';

export const ContactPage = () => {
  return (
    <Container className="contact-page">
      <SemanticHeader as='h2'>Contact Information</SemanticHeader>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </Container>
  );
};
