import React, { useState } from 'react';
import { Grid, Typography, Card, Dialog, useMediaQuery, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';
import './styling/slidersection.css';
import CloseIcon from '@mui/icons-material/Close';
import Balcony from './images/imgslider/Apartment/Balcony.jpeg';
import Bed from './images/imgslider/Apartment/Bed.jpeg';
import Bathroom from './images/imgslider/Apartment/Bathroom.jpeg';
import HallwayBedroom from './images/imgslider/Apartment/HallwayBedroom.jpeg';
import LivingroomBed from './images/imgslider/Apartment/LivingroomBed.jpeg';
import KitchenAppliances from './images/imgslider/Apartment/KitchenAppliances.jpeg';
import LivingroomBalcony from './images/imgslider/Apartment/LivingroomBalcony.jpeg';
import Kitchen from './images/imgslider/Apartment/Kitchen.jpeg';
import sunsetocean from './images/imgslider/sunsetocean.jpeg';
import balconyviewsunset from './images/imgslider/balconyviewsunset.jpeg';
import poolsidesunset from './images/imgslider/poolsidesunset.jpeg';
import drinks from './images/imgslider/drinks.jpeg';
import closebyfacilitybungaloo from './images/imgslider/closebyfacilitybungaloo.jpeg';
import closebyfacilitiesbungaloos from './images/imgslider/closebyfacilitiesbungaloos.jpeg';
import cafeparis from './images/imgslider/cafeparis.jpeg';

const insideImages = [
  { url: Balcony, caption: 'Balcony View' },
  { url: LivingroomBalcony, caption: 'Outside View' },
  { url: Bed, caption: 'Cozy Bedroom' },
  { url: Kitchen, caption: 'Modern Kitchen' },
  { url: LivingroomBed, caption: 'Bedroom at Sunrise' },
  { url: HallwayBedroom, caption: 'HallwayBedroom' },
  {url: KitchenAppliances, caption: 'Kitchen Appliances'},
  { url: Bathroom, caption: 'Bathroom' },
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="slider-section">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="typography-h5" gutterBottom>
            Inside the Apartment
          </Typography>
          <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible>
            {insideImages.map((item, index) => (
              <Card
                key={index}
                onClick={() => showImage(index, 'inside')}
                className="carousel-card"
              >
                <img src={item.url} alt={item.caption} className="carousel-image" />
              </Card>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="typography-h5" gutterBottom>
            Outside Views
          </Typography>
          <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible>
            {outsideImages.map((item, index) => (
              <Card
                key={index}
                onClick={() => showImage(index, 'outside')}
                className="carousel-card"
              >
                <img src={item.url} alt={item.caption} className="carousel-image" />
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>

      {/* Dialog for full-size images */}
      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#fff',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Carousel
          animation="slide"
          autoPlay={false}
          index={currentIndex}
          navButtonsAlwaysVisible
          indicators={false}
        >
          {(currentSet === 'inside' ? insideImages : outsideImages).map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt={item.caption}
              className="modal-carousel-image"
            />
          ))}
        </Carousel>
      </Dialog>
    </div>
  );
};