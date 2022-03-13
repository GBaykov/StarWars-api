import React from 'react';

import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import { Record } from '../item-details/item-details';
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from '../../types';

const swapiService = new SwapiService();

const {
  getPersone,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

interface Idetails{
  id: string |  null;
}
const PersonDetails = ({id} :Idetails) => {

  return (
    <ItemDetails
    itemId={id}
      getData={getPersone}
      getImageUrl={getPersonImage} >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ id }:Idetails) => {
  return (
    <ItemDetails
    itemId={id}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ( {id} :Idetails) => {
  return (
    <ItemDetails
      itemId={id}
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
