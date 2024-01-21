import React, { useState } from "react";
import './styling/slidersection.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import balconyview from './images/imgslider/balconyview.jpeg'
import bedroomdaysmall from './images/imgslider/bedroomdaysmall.jpeg'
import kitchen from './images/imgslider/kitchen.jpeg'
import outsidebalconyview from './images/imgslider/outsidebalconyview.jpeg'
import bedroomsunrise from './images/imgslider/bedroomsunrise.jpeg'
import { Modal, Image, Grid, Segment } from 'semantic-ui-react';

const insideImages = [
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

const outsideImages = [
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

export const SliderSection = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const showImage = (url) => {
    setCurrentImage(url);
    setOpen(true);
  };

  
  return (
    <div>
      <Grid container stackable>
        {/* Inside Images */}
        <Grid.Row>
          <Grid.Column width={8}>
            <div className="slide-container">
              <Fade>
                {insideImages.map((image, index) => (
                  <div className="each-slide" key={index} onClick={() => showImage(image.url)}>
                    <div style={{'backgroundImage': `url(${image.url})`}}></div>
                  </div>
                ))}
              </Fade>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment className="text-box">
              <p>This is what it looks like inside.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        
        {/* Outside Images */}
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment className="text-box">
              <p>This is what it looks like outside.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="slide-container">
              <Fade>
                {outsideImages.map((image, index) => (
                  <div className="each-slide" key={index} onClick={() => showImage(image.url)}>
                    <div style={{'backgroundImage': `url(${image.url})`}}></div>
                  </div>
                ))}
              </Fade>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* Modal for Image Enlargement */}
      <Modal open={open} onClose={() => setOpen(false)} basic size='large'>
        <Modal.Content onClick={() => setOpen(false)}>
          <Image src={currentImage} fluid className="modal-image" />
        </Modal.Content>
      </Modal>
    </div>
  );
};