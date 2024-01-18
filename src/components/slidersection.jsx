import React from "react";
import './styling/slidersection.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import balconyview from './images/imgslider/balconyview.jpeg'
import bedroomdaysmall from './images/imgslider/bedroomdaysmall.jpeg'
import kitchen from './images/imgslider/kitchen.jpeg'
import outsidebalconyview from './images/imgslider/outsidebalconyview.jpeg'
import bedroomsunrise from './images/imgslider/bedroomsunrise.jpeg'

const fadeImages = [
  {
    url: balconyview,
    caption: 'Balcony View'
  },
  {
    url: bedroomdaysmall,
    caption: 'Cozy Bedroom'
  },
  {
    url: kitchen,
    caption: 'Modern Kitchen'
  },
  {
    url: outsidebalconyview,
    caption: 'Outside View'
  },
  {
    url: bedroomsunrise,
    caption: 'Bedroom at Sunrise'
  },
];

export const Slidersection = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${fadeImage.url})`}}>
              <span>{fadeImage.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
