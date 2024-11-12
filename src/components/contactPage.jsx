// ContactPage.jsx

import React from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
  Grid,
  useMediaQuery,
} from '@mui/material';
import Subscriptions from './path/to/Subscriptions';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import './styling/contactPage.css';

export const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer
      style={{
        backgroundColor: '#1a237e',
        color: '#fff',
        padding: theme.spacing(4, 2),
        marginTop: theme.spacing(6),
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Kontakt Information
            </Typography>
            <Box sx={{ marginBottom: theme.spacing(2) }}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1">
                  <strong>Namn:</strong> Natasa Sillén
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <EmailIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">
                  <a href="mailto:natasasillen@gmail.com" className="contact-link">
                    natasasillen@gmail.com
                  </a>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <PhoneIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">
                  <a href="tel:+1234567890" className="contact-link">
                    +12 345 678 90
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent={isMobile ? 'center' : 'flex-end'}
          >
            <Box textAlign={isMobile ? 'center' : 'right'}>
              <Typography variant="h6" gutterBottom>
                Följ oss
              </Typography>
              <Box
                sx={{
                  '& > *': {
                    margin: theme.spacing(1),
                  },
                }}
              >
                <IconButton
                  aria-label="Facebook"
                  href="https://www.facebook.com/natasa.sillen"
                  target="_blank"
                  rel="noopener"
                  style={{ color: '#fff' }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  href="https://www.youtube.com/@Familjensillen"
                  target="_blank"
                  rel="noopener"
                  style={{ color: '#fff' }}
                >
                  <Subscriptions fontSize="large" />
                </IconButton>
                {/* Add more social icons as needed */}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Natasa Sillén. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};
