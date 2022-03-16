import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { Idetails } from '../../types';
import SwapiService from '../../services/swapi-service';




const PersonDetails = ({id, swapiService}:Idetails) => {
const {getPerson, getPersonImage } = swapiService
  return (
            <ItemDetails
              itemId={id}
              getData={getPerson}
              getImageUrl={getPersonImage} >

              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
  );
};
export default withSwapiService(PersonDetails);


// const PersonDetails = (props) => {
//   return (
//     <ItemDetails {...props} >
//       <Record field="gender" label="Gender" />
//       <Record field="eyeColor" label="Eye Color" />
//     </ItemDetails>
//   );
// };

const mapMethodsToProps = (swapiService:SwapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

// export default withSwapiService(PersonDetails, mapMethodsToProps);
