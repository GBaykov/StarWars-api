import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {  IrandomPlanet, ITransfomedPerson, ITransfomedStarship, IUniversalTransomed } from '../../types';
import compose from '../hoc-helpers/compose';




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


const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
  )(ItemList);

  

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
