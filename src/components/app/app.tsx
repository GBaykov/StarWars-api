import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.css";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

 interface IAppState{
  showRandomPlanet: boolean,
  hasError: boolean
 }

export default class App extends Component<IAppState>{
  state = {
    showRandomPlanet: true,
    hasError: false
  };

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

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return(
      <div className="stardb-app">
      <Header />
      {planet}
      {/* <RandomPlanet /> */}

      <div className="row mb2 button-row">
      <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        {/* <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPersone}/>
        </div> */}
      </div>
      <PeoplePage/>
      <PeoplePage/>
      <PeoplePage/>
    </div>
    )

  }
};

