import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {  IrandomPlanet, ITransfomedPerson, ITransfomedStarship, IUniversalTransomed } from '../../types';
import { IItemListProps } from '../item-list/item-list';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

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

// const PersonList = withData(
//   withChildFunction(ItemList, renderName),
//   getAllPeople);
const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople)


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
