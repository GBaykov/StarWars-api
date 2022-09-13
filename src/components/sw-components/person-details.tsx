import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { IItemDetails } from '../../types';
import SwapiService from '../../services/swapi-service';




const PersonDetails = (props:IItemDetails) => { //{itemId, getData, getImageUrl}:IItemDetails
  return (
            <ItemDetails {...props}  >
              {/* // itemId={itemId}
             // getData={getData}
              //getImageUrl={getImageUrl} */}
             
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService:SwapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails );
