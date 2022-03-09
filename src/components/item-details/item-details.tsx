import React, { Component } from "react";
import { IPeople } from "swapi-ts";
import SwapiService from "../../services/swapi-service";
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../../types";
import ErrorButton from "../error-button";
import Spinner from "../spinner";

import "./item-details.css";

export interface IItemDetailProp{
  personId:string | null,
  getData?:(personId:string )=>Promise<any>,
  getImageUrl?:(item:ITransfomedPerson | ITransfomedStarship | IrandomPlanet )=>any,
}

export interface IItemDetailState {
  item: null | ITransfomedPerson,
  loading?:boolean,
  image?:string
}

export default class ItemDetails extends Component<IItemDetailProp, IItemDetailState> {

  state={
    item:null,
    loading:true,
    image:''
  }

  swapiService = new SwapiService();
  
  componentDidMount(){
    this.updateItem()
  }
  componentDidUpdate(prevProps:IItemDetailProp){
    if(prevProps.personId !== this.props.personId){
      this.updateItem()
    }
  }
  updateItem(){
    this.setState({ loading:true})
    const {personId, getData, getImageUrl} = this.props;
    if(!personId || !getData || !getImageUrl) return;
    
    getData(personId)
    .then((item)=>{
      this.setState({
        item, 
        loading:false,
        image:getImageUrl(item)
      })
    })
  }
  render(): JSX.Element {


    const {personId}:IItemDetailProp = this.props;
    
    if(this.state.item == null){
      return <span>Select a persone from a list!</span>
    } 

    const spiner = this.state.loading? <Spinner/> : null;
    const content = !this.state.loading ? <PersonView item={this.state.item} image={this.state.image}/> : null
    const {id, name, gender,birthYear, eyeColor } = this.state.item

    
    return (
      <div className="person-details card">
        {spiner}
        {content}
      </div>
    );
  }
}

const PersonView = (props:IItemDetailState) => {
 
  const {item, image } = props;
  if(item == null){
    return <span>Select a item from a list!</span>
  } 
  const {id, name, gender,birthYear, eyeColor } = item
  return(
    <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
        </div>
  )
}