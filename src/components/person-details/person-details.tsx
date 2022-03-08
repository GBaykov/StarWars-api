import React, { Component } from "react";
import { IPeople } from "swapi-ts";
import SwapiService from "../../services/swapi-service";
import { ITransfomedPerson } from "../../types";
import Spinner from "../spinner";

import "./person-details.css";

export interface IPersonDetailProp{
  personId:string | null
}

export interface IPersoneDetailState {
  persone: null | ITransfomedPerson,
  loading?:boolean
}

export default class PersonDetails extends Component<IPersonDetailProp, IPersoneDetailState> {

  state={
    persone:null,
    loading:true
  }

  swapiService = new SwapiService();
  
  componentDidMount(){
    //this.updatePersone()
  }
  componentDidUpdate(prevProps:IPersonDetailProp){
    if(prevProps.personId !== this.props.personId){
      this.updatePersone()
    }
  }
  updatePersone(){
    this.setState({ loading:true})
    const {personId} = this.props;
    if(!personId) return;
    
    this.swapiService.getPersone(personId)
    .then((persone)=>{
      console.log(persone)
      this.setState({persone, loading:false})
    })
  }
  render(): JSX.Element {


    const {personId}:IPersonDetailProp = this.props;
    
    if(this.state.persone == null){
      return <span>Select a persone from a list!</span>
    } 

    const spiner = this.state.loading? <Spinner/> : null;
    const content = !this.state.loading ? <PersonView persone={this.state.persone}/> : null
    const {id, name, gender,birthYear, eyeColor } = this.state.persone

    
    return (
      <div className="person-details card">
        {spiner}
        {content}
      </div>
    );
  }
}

const PersonView = (props:IPersoneDetailState) => {
  const {persone } = props;
  if(persone == null){
    return <span>Select a persone from a list!</span>
  } 
  const {id, name, gender,birthYear, eyeColor } = persone
  return(
    <React.Fragment>
              <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
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
        </div>
    </React.Fragment>
  )
}