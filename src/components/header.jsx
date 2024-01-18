import React from "react";
import './styling/header.css'

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 intro-text">
                <h1>
                  hotel i cypern här
                  <span></span>
                </h1>
                <p>jo vårt hotell i cypern här</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Läs Mer
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
