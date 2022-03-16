import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

 

const withSwapiService = (Wrapped:any, mapMethodsToProps:any) => {

  return (props:any) => {
  return(<SwapiServiceConsumer>
      {(swapiService)=>{
        const serviceProps = mapMethodsToProps(swapiService)
        return(
          <Wrapped {...props} serviceProps={serviceProps}/>
        )
      }}

      
    </SwapiServiceConsumer>)  
  }
};

export default withSwapiService;
