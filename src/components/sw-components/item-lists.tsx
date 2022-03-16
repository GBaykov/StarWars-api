import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {  IrandomPlanet, ITransfomedPerson, ITransfomedStarship, IUniversalTransomed } from '../../types';




const withChildFunction = (fn:(item: ITransfomedPerson | IrandomPlanet | ITransfomedStarship) => JSX.Element) => 
                            (Wrapped:any)  => {
  
  return (props:any) => {
    return (
      <Wrapped  {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName =  (item:ITransfomedPerson | IrandomPlanet | ITransfomedStarship) => <span>{item.name}</span> ;
const renderModelAndName = ({ model, name}:IUniversalTransomed) => <span>{name} ({model})</span>;


const mapPersonMethodsToProps = (swapiService:SwapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService:SwapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService:SwapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};


const PersonList =  withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList)))

  const PlanetList =  withSwapiService(mapPlanetMethodsToProps)(
    withData(withChildFunction(renderName)(ItemList)))
  
  
  const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
    withData(withChildFunction(renderModelAndName)(ItemList)))
  

// const PlanetList =  withSwapiService(
//   withData(withChildFunction(ItemList, renderName)),
//   mapPlanetMethodsToProps);

// const StarshipList = withSwapiService(
//     withData(withChildFunction(ItemList, renderModelAndName)),
//     mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
