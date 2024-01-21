import React, { useState } from 'react';
import { Grid, Typography, Card, Dialog, AppBar, Toolbar, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles'; // Ensuring single import of useTheme
import './styling/slidersection.css';
import balconyview from './images/imgslider/balconyview.jpeg'
import bedroomdaysmall from './images/imgslider/bedroomdaysmall.jpeg'
import kitchen from './images/imgslider/kitchen.jpeg'
import outsidebalconyview from './images/imgslider/outsidebalconyview.jpeg'
import bedroomsunrise from './images/imgslider/bedroomsunrise.jpeg'

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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const showImage = (url) => {
      setCurrentImage(url);
      setOpen(true);
    };
  
    const renderCarouselItem = (item) => (
        <Card onClick={() => showImage(item.url)} className="carousel-card" sx={{ cursor: 'pointer' }}>
        <img src={item.url} alt={item.caption} className="carousel-image" />
      </Card>
    );
  
    return (
      <div>
        <Grid container spacing={3}>
          {/* Inside Images */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Inside the House
            </Typography>
            <Carousel animation="slide" autoPlay={false}>
              {insideImages.map((item, i) => renderCarouselItem(item, i))}
            </Carousel>
          </Grid>
          
          {/* Outside Images */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Outside View
            </Typography>
            <Carousel animation="slide" autoPlay={false}>
              {outsideImages.map((item, i) => renderCarouselItem(item, i))}
            </Carousel>
          </Grid>
        </Grid>
  
        {/* Modal for Image Enlargement */}
        <Dialog fullScreen={isMobile} open={open} onClose={() => setOpen(false)}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Image View
              </Typography>
            </Toolbar>
          </AppBar>
          <img src={currentImage} alt="" style={{ width: '100%', height: 'auto', marginTop: isMobile ? theme.spacing(8) : 0 }} />
        </Dialog>
      </div>
    );
  };