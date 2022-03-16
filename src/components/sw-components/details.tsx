import React from 'react';

import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import { Record } from '../item-details/item-details';
import { Idetails, IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from '../../types';
import { SwapiServiceConsumer } from '../swapi-service-context';




const PersonDetails = ({id} :Idetails) => {

  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
            <ItemDetails
              itemId={id}
              getData={getPerson}
              getImageUrl={getPersonImage} >

              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ id }:Idetails) => {
  return (

    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ( {id} :Idetails) => {
  return (

    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
