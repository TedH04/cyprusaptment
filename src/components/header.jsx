import React from "react";
import { Container } from 'semantic-ui-react';
import './styling/header.css';

export const Header = () => {
  return (
    <header id="header" className="intro">
      <div className="overlay">
        <Container className="header-content">
          <div className="upper-left-text">Hotels Selection</div>
          <div className="textsContainer">
            <p className="intro-text">A Great Place To Stay</p>
            <h1 className="main-title">
              🇨🇾 Välkommen till Our Dream Place in Paradise - North Cyprus 🇨🇾
            </h1>
          </div>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </Container>
      </div>
    </header>
  );
};
