import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./assets/bootstrap.min.css";
import { IPeople, IPlanet, IStarship } from "swapi-ts";
import SwapiService from "./services/swapi-service";
import App from "./components/app";
// import { PersoneType } from "./types";
// import { SwapiService } from "./swapi-service";
// https://swapi.dev/api/

console.log("Hello worls");

ReactDOM.render(<App showRandomPlanet={true} hasError={false}/>, document.getElementById("root"));
