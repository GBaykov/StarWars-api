import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {  IrandomPlanet, ITransfomedPerson, ITransfomedStarship, IUniversalTransomed } from '../../types';
import { IItemListProps } from '../item-list/item-list';



const withChildFunction = (Wrapped:(props: IItemListProps) => JSX.Element, 
fn:(item: ITransfomedPerson | IrandomPlanet | ITransfomedStarship) => JSX.Element) => {
  return (props:any) => {
    return (
      <Wrapped {...props}>
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


const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps);

const PlanetList =  withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
