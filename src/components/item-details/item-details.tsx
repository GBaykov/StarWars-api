import React, { Component, cloneElement } from "react";
import { IPeople } from "swapi-ts";
import SwapiService from "../../services/swapi-service";
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from "../../types";
import ErrorButton from "../error-button";
import Spinner from "../spinner";

import "./item-details.css";

interface IRecord {
  item?:any,
  field:any,
  label:string
}
export const Record = ({ item, field, label }:IRecord) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};


export interface IItemDetailProp{
  itemId:string | null,
  getData?:(itemId:string )=>Promise<any>,
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
    if(prevProps.itemId !== this.props.itemId){
      this.updateItem()
    }
  }
  updateItem(){
    this.setState({ loading:true})
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId || !getData || !getImageUrl) return;
    
    getData(itemId)
    .then((item)=>{
      this.setState({
        item, 
        loading:false,
        image:getImageUrl(item)
      })
    })
  }
  render(): JSX.Element {
    const {itemId}:IItemDetailProp = this.props;
    
    if(this.state.item == null){
      return <span>Select a persone from a list!</span>
    } 

    
    
    const {id, name, gender,birthYear, eyeColor } = this.state.item;
    const {image, item } = this.state
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child:any) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
    // } 
    }   
    // <PersonView item={this.state.item} image={this.state.image}/> : null

}

// const PersonView = (props:IItemDetailState) => {
 
//   const {item, image } = props;
//   if(item == null){
//     return <span>Select a item from a list!</span>
//   } 
//   const {id, name, gender,birthYear, eyeColor } = item
//   return(
//     <div className="item-details card">
//         <img className="item-image"
//           src={image}
//           alt="item"/>
//         <div className="card-body">
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             {this.props.children}
//             {/* <li className="list-group-item">
//               <span className="term">Gender</span>
//               <span>{gender}</span>
//             </li> */}
//             {/* <li className="list-group-item">
//               <span className="term">Birth Year</span>
//               <span>{birthYear}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Eye Color</span>
//               <span>{eyeColor}</span>
//             </li> */}
//           </ul>
//           <ErrorButton />
//         </div>
//         </div>
//   )
// }