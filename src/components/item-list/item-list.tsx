import React, { Component } from "react";
import { IPeople } from "swapi-ts";
import SwapiService from "../../services/swapi-service";
import { IItemListProps, IItemListState, ITransfomedPerson } from "../../types";
import Spinner from "../spinner";
import "./item-list.css";




export default class ItemList extends Component< IItemListProps, IItemListState > {
 
  state={
    peopleList:null 
  }

  swapiService = new SwapiService;
  
  componentDidMount(){
    this.swapiService.getAllPeople()
    .then((peopleList)=>{
      this.setState({
        peopleList
      })
    })
  }

  RenderItem (arr:ITransfomedPerson[] | null){
    if(arr){
      return arr.map((persone)=>{
        return(
            <li 
        className="list-group-item"
        key={persone.id}
        onClick={()=>this.props.onItemSelected(persone.id)}
        >
          {persone.name}
          </li>
        )        
      })
    }
  }

  render(): JSX.Element {
    const {peopleList} = this.state;
    if (!peopleList) {
      return <Spinner/>
    }
    const items = this.RenderItem(peopleList)
    return (
      <ul className="item-list list-group">
     {items}
      </ul>
    );
  }
}
