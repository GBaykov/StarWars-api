import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { IrandomPlanet } from "../../types";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

import "./random-planet.css";

export default class RandomPlanet extends Component<{}, IrandomPlanet> {
  swapiService = new SwapiService();

  state = {
    itemId: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    loading:true,
    error:false
  };

  // static defaultProps = {
  //   updateInterval: 10000
  // };
  
  constructor(props: {}) {
    super(props);

  }
  updatePlanet =()=> {
    const itemId = Math.floor(Math.random()*19)+3;
    this.swapiService.getPlanet(itemId)
    .then((planet) => {
      this.setState({
        itemId:planet.itemId,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotationPeriod,
        diameter: planet.diameter,
        loading:false,
        error:false
      });
    })
    .catch(this.onError)
  }

  interval:NodeJS.Timer = setInterval(this.updatePlanet, 3500)

  componentDidMount(){
    this.updatePlanet();
     this.interval 
    // clearInterval(this.interval)
    //setInterval(this.updatePlanet, 3500)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  onError = () => {
    this.setState({
      error:true,
      loading:false
    })
  }


  
  render(): JSX.Element {
    const { itemId, name, population, rotationPeriod, diameter, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null;
    const content = (!loading && !error) ? <PlanetView  itemId={itemId} name={name} population={population} rotationPeriod={rotationPeriod} diameter={diameter}/> : null;
    
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
interface IPlanetProps {
  rotationPeriod:string | null,
  itemId: string | number| null;
  name: string | null;
  population: string | null;
  diameter:string | null;
}

const PlanetView = (props:IPlanetProps) => {

   const { itemId, name, population, rotationPeriod, diameter } = props;
  return(
    <React.Fragment>
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${itemId}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}
