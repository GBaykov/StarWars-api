import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { Idetails } from '../../types';

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

// const PlanetDetails = (props) => {
//   return (
//     <ItemDetails {...props}>
//       <Record field="population" label="Population" />
//       <Record field="rotationPeriod" label="Rotation Period" />
//       <Record field="diameter" label="Diameter" />
//     </ItemDetails>
//   );
// };

// const mapMethodsToProps = (swapiService) => {
//   return {
//     getData: swapiService.getPlanet,
//     getImageUrl: swapiService.getPlanetImage
//   };
// };

// export default withSwapiService(PlanetDetails, mapMethodsToProps);
