import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import { IPeoplePageProps, IPeoplePageState, IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from '../../types';
import Row from '../row';




export default class PeoplePage extends Component<IPeoplePageState,IPeoplePageProps> {
  swapiService = new SwapiService()
  state = {
    selectedPerson: "3",
    hasError: false
  };

  componentDidCatch(error:Error, info:React.ErrorInfo) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson?:string | null) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList:JSX.Element = (
      <ItemList onItemSelected={this.onPersonSelected} 
      getData={this.swapiService.getAllPeople}
      renderItem={(item)=> {return `${item.name} (${item.gender}, ${item.birthYear})`}
      }/>
    )
    const personeDetails:JSX.Element = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return (
      <Row left={itemList} right={personeDetails}/>
      // <div className="row mb2">
      //   <div className="col-md-6">
      //     {itemList}
      //   </div>
      //   <div className="col-md-6">
      //   {personeDetails}
      //   </div>
      // </div>
    );
  }
}
