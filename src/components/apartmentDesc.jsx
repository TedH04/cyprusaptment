import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
} from '@mui/material';
import FacilitiesList from './helper/FacilitiesList';
import DistancesList from './helper/DistancesList';
import PricesList from './helper/PricesList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './styling/apartmentDescription.css';

export const ApartmentDesc = () => {

  return (
    <Container maxWidth="md" className="apartment-description">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Om Lägenheten
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Välkommen till vår fina, nybyggda moderna och alldeles underbara studio på Cove Garden i Esentepe i Norra Cypern.
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Vår dröm har blivit sann och vi delar gärna med oss av den… VÅR UNDERBARA lägenhet på Norra Cypern.
      </Typography>

      <Card className="description-card">
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon fontSize="large" color="primary" style={{ marginRight: '8px' }} />
            <Typography variant="h5" component="h3">
              Plats & Område
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Lägenheten ligger i området Esentepe som är öster om den omtyckta hamnstaden Kyrenia, längs med öns norra kust, 500 m från stranden.
          </Typography>
          <Typography variant="body1" paragraph>
            Den är i ett community "SUN VALLEY" och ligger i området ”Cove Garden”, bestående av 92 lägenheter i 4 block. Vår lägenhet ligger i block C, som består av 30 lägenheter, på våningsplan 1.
          </Typography>
        </CardContent>
      </Card>

      <Card className="description-card">
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <HomeIcon fontSize="large" color="primary" style={{ marginRight: '8px' }} />
            <Typography variant="h5" component="h3">
              Faciliteter & Bekvämligheter
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Studion är ca 40 kvm med kök och ett rymligt badrum med dusch. Den är möblerad med en dubbelsäng (160 cm) och en bäddsoffa (140 cm), lämplig för 2 vuxna och 2 barn eller 3 vuxna.
          </Typography>
          <Typography variant="body1" paragraph>
            Kök: All köksutrustning ingår, såsom brödrost, vattenkokare, mixer m.m.
          </Typography>
          <Typography variant="body1" paragraph>
            Toalett: Schampo, balsam, tvål och handdukar, inklusive strandhanddukar, ingår.
          </Typography>
          <Typography variant="body1" paragraph>
            En våning upp finns en takterrass på ca 800 kvm med solsängar som ni får utnyttja när den blir klar. Utsikten är magisk! Det kommer även att finnas ett café med lättare förtäring.
          </Typography>
          <Divider style={{ margin: '16px 0' }} />
          <Typography variant="h6" component="h4" gutterBottom>
            Faciliteter i området:
          </Typography>
          <FacilitiesList />
        </CardContent>
      </Card>

      <Card className="description-card">
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <FlightIcon fontSize="large" color="primary" style={{ marginRight: '8px' }} />
            <Typography variant="h5" component="h3">
              Avstånd och Utflyktstips
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Här är några avstånd och viktiga platser i närheten:
          </Typography>
          <DistancesList />
          <Typography variant="body1" paragraph>
            ✈️ Vi flyger oftast till Larnaca med Norwegian eller Eurowings. Det går även att flyga till Ercan med Pegasus.
          </Typography>
          <Typography variant="body1" paragraph>
            *Vi rekommenderar att hyra bil, från ca 280 kr/dag. Priser kan variera beroende på säsong.
          </Typography>
          <Typography variant="body1" paragraph>
            Vi hjälper gärna till med transfer och bilhyrning.
          </Typography>
        </CardContent>
      </Card>

      <Card className="description-card">
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <AttachMoneyIcon fontSize="large" color="primary" style={{ marginRight: '8px' }} />
            <Typography variant="h5" component="h3">
              Priser & Rekommendationer
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Här är våra aktuella priser:
          </Typography>
          <PricesList />
          <Typography variant="body1" paragraph>
            El ingår vid normal förbrukning.
          </Typography>
          <Typography variant="body1" paragraph>
            Städning ingår i priset!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
