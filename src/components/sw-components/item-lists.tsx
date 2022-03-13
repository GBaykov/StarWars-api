import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship, IUniversalTransomed } from '../../types';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped:any, fn:any) => {
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

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
