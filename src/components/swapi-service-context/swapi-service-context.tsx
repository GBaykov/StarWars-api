import React from 'react';
import SwapiService from '../../services/swapi-service';
const swapiService = new SwapiService()
const {
  Provider : SwapiServiceProvider,
  Consumer : SwapiServiceConsumer
} = React.createContext(swapiService);

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
};
