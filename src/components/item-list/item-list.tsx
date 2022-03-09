import React, { Component } from "react";
import { IPeople } from "swapi-ts";
import SwapiService from "../../services/swapi-service";
import { IItemListProps, IItemListState, IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../../types";
import Spinner from "../spinner";
import "./item-list.css";




export default class ItemList extends Component< IItemListProps, IItemListState > {
 
  state={
    itemList:null 
  }

  //swapiService = new SwapiService;

  componentDidMount(){
    //this.swapiService.getAllPeople()
    const {getData} = this.props;
    getData()
    .then((itemList)=>{
      this.setState({
        itemList
      })
    })
  }

  RenderItem (arr:ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[] | null){
    if(arr){
      return arr.map((item)=>{
        const {id}= item;
        const label = this.props.renderItem(item)
        return(
            <li 
        className="list-group-item"
        key={item.id}
        onClick={()=>this.props.onItemSelected(id)}
        >
          {label}
          </li>
        )        
      })
    }
  }

  render(): JSX.Element {
    const {itemList} = this.state;
    if (!itemList) {
      return <Spinner/>
    }
    const items = this.RenderItem(itemList)
    return (
      <ul className="item-list list-group">
     {items}
      </ul>
    );
  }
}
