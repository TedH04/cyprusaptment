import React from "react";
import { Container, Header as SemanticHeader, Segment } from 'semantic-ui-react';
import './styling/apartmentDescription.css';
import FacilitiesList from './helper/FacilitiesList';
import DistancesList from './helper/DistancesList'; 
import PricesList from './helper/PricesList';

export const ApartmentDesc = () => {
  return (
    <Container className="apartment-description">
      <SemanticHeader as='h2'>Om Lägenheten</SemanticHeader>
      <p>Välkommen till vår fina, nybyggda moderna och alldeles underbara studio på Cove Garden i Esentepe i Norra Cypern.</p>
      <p>Vår dröm har blivit sann och vi delar gärna med oss av den… VÅR UNDERBARA lägenhet på Norra Cypern.</p>

      <Segment>
        <SemanticHeader as='h3'>Plats & Område</SemanticHeader>
        <p>Lägenheten ligger i området Esentepe som är öster om den omtyckta hamnstaden Kyrenia, längs med öns norra kust, 500 m från stranden.</p>
        <p>Den är i ett community "SUN VALLEY" och ligger i området ”Cove Garden”, bestående av 92 lägenheter i 4 block, och vår ligger i block C, varav det är 30 lägenheter och ligger på våningsplan 1.</p>
      </Segment>

      <Segment>
        <SemanticHeader as='h3'>Faciliteter & Bekvämligheter</SemanticHeader>
        <p>Det är en studio på ca 40 kvm med kök och ett rymligt badrum med dusch. Den är möblerad med en dubbelsäng som är 160 cm, en bäddsoffa 140 cm. Lämplig för 2 vuxna + 2 barn, alt 3 vuxna.</p>
        <p>Kök: Ingår all köksutrustning såsom brödrost, vattenkokare, mixer m.m.</p>
        <p>Toalett: Schampo, Balsam, tvål, handdukar tom strand handdukar ingår.</p>
        <p>En våning upp finns det en takterrass på ca 800 kvm med solsängar som ni får utnyttja när den blir klar. Utsikten är magisk! Det kommer även att finnas ett café med lättare förtäring.</p>
        
        <FacilitiesList />
      </Segment>

      <Segment>
        <SemanticHeader as='h3'>Avstånd och Utflykts tips</SemanticHeader>
        <DistancesList />
        <p>✈️ Vi flyger oftast till Larnaca med Norwegian eller Eurowings. Går även att flyga till Ercan med Pegasus.</p>
        <p>*Rekommenderar att hyra bil, från ca 280/dag. Kan skilja från säsongen.</p>
        <p>Vi hjälper gärna till med transfer och bilhyrning.</p>
      </Segment>

      <Segment>
        <SemanticHeader as='h3'>Priser & Rekommendationer</SemanticHeader>
        <PricesList />
        <p>El ingår vid normal förbrukning.</p>
        <p>Städning ingår i priset!</p>
      </Segment>
    </Container>
  );
};
