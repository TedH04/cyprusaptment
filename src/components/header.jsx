import React from "react";
import { Container, Header as SemanticHeader, Button } from 'semantic-ui-react';
import './styling/header.css';

export const Header = () => {
  return (
    <header id="header" className="intro">
      <div className="overlay">
        <Container textAlign="center" className="textsContainer">
          <SemanticHeader as='h1' inverted>
            Hotel i Cypern Här
          </SemanticHeader>
          <p className="intro-text">Jo vårt hotell i Cypern här</p>
        </Container>
      </div>
    </header>
  );
};
