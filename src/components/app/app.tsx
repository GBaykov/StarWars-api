import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import "./app.css";
// import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { Record } from "../item-details/item-details";
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../../types";
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';


 interface IAppState{
  showRandomPlanet: boolean,
  hasError: boolean
 }

export default class App extends Component<IAppState, {}>{
  state = {
    showRandomPlanet: true,
    hasError: false
  };
swapiService = new SwapiService()
  // onItemSelected = (id?:string | null )=>{
  //   this.setState({
  //     selectedPersone:id
  //   })
  // }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !this.state.showRandomPlanet
      }
    });
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = (selectedPerson?:string | null) => {
    this.setState({ selectedPerson });
  };
  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const { getPersone,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
      getAllStarships } = this.swapiService;

    // const personeDetails = (
    //   <ItemDetails itemId={'11'} 
    //               getData={getPersone}
    //               getImageUrl={getPersonImage}>
    //               <Record field='gender' label="Gender"/>
    //               <Record field='eyeColour' label="Eye Colour"/>
    //   </ItemDetails>
    // )

    // const starshipDetails = (
    //   <ItemDetails 
    //               itemId={'5'} 
    //               getData={getStarship} 
    //               getImageUrl={getStarshipImage}>
    //                 <Record field='model' label="Model"/>
    //                 <Record field='length' label="Length"/>
    //                 <Record field='costInCredits' label="Cost"/>
    //   </ItemDetails>
    // )

    return(
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
      <div className="stardb-app">
      <Header />
      {/* <Row left={personeDetails} right={starshipDetails}/> */}
      {/* {planet} */}
      {/* <RandomPlanet /> закоменчено*/}  

      <div className="row mb2 button-row">
      <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
      </div>
          <PersonDetails id={"11"} />

          <PlanetDetails id={"5"} />

          <StarshipDetails id={"9"} />

          <PersonList />

          <StarshipList />

          <PlanetList />
    </div>
    </SwapiServiceProvider>
    </ErrorBoundry>
    )

  }
};

