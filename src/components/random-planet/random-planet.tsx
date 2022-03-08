import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { IrandomPlanet } from "../../types";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

import "./random-planet.css";

export default class RandomPlanet extends Component<{}, IrandomPlanet> {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    loading:true,
    error:false
  };

  constructor(props: {}) {
    super(props);
    
  }
  componentDidMount(){
    this.updatePlanet();
    // this.interval = setInterval(this.updatePlanet(), 3500)
    // clearInterval(this.interval)
    setInterval(this.updatePlanet, 3500)
  }

  onError = () => {
    this.setState({
      error:true,
      loading:false
    })
  }

  updatePlanet =()=> {
    const id = Math.floor(Math.random()*19)+3;
    this.swapiService.getPlanet(id)
    .then((planet) => {
      this.setState({
        id:planet.id,
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
  
  render(): JSX.Element {
    const { id, name, population, rotationPeriod, diameter, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null;
    const contentProp:IrandomPlanet = { id, name, population, rotationPeriod, diameter, loading }
    const content = (!loading && !error) ? <PlanetView  id={id} name={name} population={population} rotationPeriod={rotationPeriod} diameter={diameter}/> : null;
    
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
  id: string | number| null;
  name: string | null;
  population: string | null;
  diameter:string | null;
}

const PlanetView = (props:IPlanetProps) => {

   const { id, name, population, rotationPeriod, diameter } = props;
  return(
    <React.Fragment>
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
