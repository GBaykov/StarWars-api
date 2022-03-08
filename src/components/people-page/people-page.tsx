import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';

export interface IPeoplePageProps{

}
export interface IPeoplePageState{
  selectedPerson?:string | null,
  hasError?:boolean
}

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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
