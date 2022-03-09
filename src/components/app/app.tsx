import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import "./app.css";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

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
const {getPersone, getStarship, getPersonImage, getStarshipImage, getPlanetImage}= this.swapiService
    const personeDetails = (
      <ItemDetails personId={'11'} 
                  getData={getPersone}
                  getImageUrl={getPersonImage}/>
    )
    const starshipDetails = (
      <ItemDetails 
                  personId={'5'} 
                  getData={getStarship} 
                  getImageUrl={getStarshipImage}/>
    )

    return(
      <ErrorBoundry>
      <div className="stardb-app">
      <Header />
      <Row left={personeDetails} right={starshipDetails}/>
      {/* {planet} */}
      {/* <RandomPlanet /> закоменчено*/}  

      {/* <div className="row mb2 button-row">
      <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
      </div>
      <PeoplePage/> */}

      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPlanets}
                    renderItem={(item)=>item.name}/>
        </div>
        <div className="col-md-6">
          <ItemDetails personId={this.state.selectedPerson} />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllStarships}
                    renderItem={(item)=>item.name}/>
        </div>
        <div className="col-md-6">
          <ItemDetails personId={this.state.selectedPerson} />
        </div>
      </div> */}
    </div>
    </ErrorBoundry>
    )

  }
};

