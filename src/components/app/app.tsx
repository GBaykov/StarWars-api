import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { IAppState } from "../../types";

export default class App extends Component<IAppState, {}> {
  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (selectedPerson?: string | null) => {
    this.setState({ selectedPerson });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header />
            {planet}
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
            <div className="row mb2 button-row"></div>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
