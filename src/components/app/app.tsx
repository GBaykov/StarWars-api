import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.css";

// interface IAppState{
//   selectedPersone:null | string,
//   onItemSelected?:(id:any )=>void //id?:string | null | number | undefined,
// }

export default class App extends Component{
  state= {
    selectedPersone:"5"
  }

  onItemSelected = (id?:string | null | number | undefined)=>{
    console.log(id)
    this.setState({
      selectedPersone:id
    })
  }

  render() {
    return(
      <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPersone}/>
        </div>
      </div>
    </div>
    )

  }
};

