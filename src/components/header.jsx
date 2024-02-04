import React from "react";
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import './styling/header.css';

export const Header = () => {
  return (
    <header id="header" className="intro">
      <div className="overlay">
        <Container className="header-content">
          <div className="upper-left-text">Hotels Selection</div>
          <div className="textsContainer">
            <p className="intro-text">A Great Place To Stay</p>
            <SemanticHeader as='h1' inverted>
              Welcome to our Dream Place in North Cyprus
            </SemanticHeader>
          </div>
        </Container>
      </div>
    </header>
  );
};
