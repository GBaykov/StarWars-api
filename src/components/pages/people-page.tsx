import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

export default class PeoplePage extends Component {

  state = {
    selectedItem: null
  };

 onItemSelected = (id?:string | null )=>{
   console.log(id)
    this.setState({
      selectedItem:id
    })
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails id={selectedItem} />} />
    );
  }

}
