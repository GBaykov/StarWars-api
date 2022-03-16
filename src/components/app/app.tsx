import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PlanetDetails,
  PlanetList,
  StarshipDetails,
} from '../sw-components';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";


 interface IAppState{
  showRandomPlanet: boolean,
  hasError: boolean,
  swapiService:SwapiService
 }

export default class App extends Component<IAppState, {}>{
  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService:new SwapiService()
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

    return(
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
            <div className="stardb-app">
            <Header />
              {planet}
              <PeoplePage/>
              <PlanetsPage/>
              <StarshipsPage/>
              {/* <Row left={<PlanetList />} right={<PlanetDetails itemId={"11"} />} />

              <Row left={<PlanetList />} right={<StarshipDetails itemId={"9"} />} /> */}

      <div className="row mb2 button-row">

      </div>
      
    </div>
    </SwapiServiceProvider>
    </ErrorBoundry>
    )

  }
};

