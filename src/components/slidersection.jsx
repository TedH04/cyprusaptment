import React, { useState } from 'react';
import { Grid, Typography, Card, Dialog, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';
import './styling/slidersection.css';
import balconyview from './images/imgslider/balconyview.jpeg';
import bedroomdaysmall from './images/imgslider/bedroomdaysmall.jpeg';
import kitchen from './images/imgslider/kitchen.jpeg';
import outsidebalconyview from './images/imgslider/outsidebalconyview.jpeg';
import bedroomsunrise from './images/imgslider/bedroomsunrise.jpeg';
import sunsetocean from './images/imgslider/sunsetocean.jpeg';
import balconyviewsunset from './images/imgslider/balconyviewsunset.jpeg';
import poolsidesunset from './images/imgslider/poolsidesunset.jpeg';
import drinks from './images/imgslider/drinks.jpeg';
import closebyfacilitybungaloo from './images/imgslider/closebyfacilitybungaloo.jpeg';
import closebyfacilitiesbungaloos from './images/imgslider/closebyfacilitiesbungaloos.jpeg';
import cafeparis from './images/imgslider/cafeparis.jpeg';

const insideImages = [
  { url: balconyview, caption: 'Balcony View' },
  { url: bedroomdaysmall, caption: 'Cozy Bedroom' },
  { url: kitchen, caption: 'Modern Kitchen' },
  { url: outsidebalconyview, caption: 'Outside View' },
  { url: bedroomsunrise, caption: 'Bedroom at Sunrise' },
];

const outsideImages = [
  { url: sunsetocean, caption: 'Balcony View' },
  { url: balconyviewsunset, caption: 'Cozy Bedroom' },
  { url: poolsidesunset, caption: 'Modern Kitchen' },
  { url: drinks, caption: 'Outside View' },
  { url: closebyfacilitybungaloo, caption: 'Bedroom at Sunrise' },
  { url: closebyfacilitiesbungaloos, caption: 'Bedroom at Sunrise' },
  { url: cafeparis, caption: 'Bedroom at Sunrise' },
];

export const SliderSection = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState('inside');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const showImage = (index, set) => {
    setCurrentIndex(index);
    setCurrentSet(set);
    setOpen(true);
  };

  const toggleDialog = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const renderCarouselItem = (item, index, set) => (
    <Card onClick={(event) => showImage(event, index, set)} className="carousel-card">
      <img src={item.url} alt={item.caption} className="carousel-image" />
    </Card>
  );

  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="typography-h5" gutterBottom>
            Inside the House
          </Typography>
          <Carousel animation="slide" autoPlay={false}>
            {insideImages.map((item, index) => (
              <Card key={index} onClick={() => showImage(index, 'inside')} className="carousel-card">
                <img src={item.url} alt={item.caption} className="carousel-image" />
              </Card>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="typography-h5" gutterBottom>
            Outside View
          </Typography>
          <Carousel animation="slide" autoPlay={false}>
            {outsideImages.map((item, index) => (
              <Card key={index} onClick={() => showImage(index, 'outside')} className="carousel-card">
                <img src={item.url} alt={item.caption} className="carousel-image" />
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            width: isMobile ? '100%' : '80%',
            height: isMobile ? '100%' : '80%',
            maxWidth: 'none',
            backgroundColor: 'transparent',
          },
        }}
      >
        <Carousel
          animation="slide"
          autoPlay={false}
          index={currentIndex}
          navButtonsAlwaysVisible
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              borderRadius: 0,
            },
          }}
        >
          {(currentSet === 'inside' ? insideImages : outsideImages).map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt={item.caption}
              className="modal-carousel-image"
              style={{ maxHeight: '80vh' }}
              onClick={toggleDialog}
            />
          ))}
        </Carousel>
      </Dialog>
    </div>
  );
  
};
