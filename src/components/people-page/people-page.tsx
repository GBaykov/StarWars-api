import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import { IPeoplePageProps, IPeoplePageState, IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from '../../types';
import Row from '../row';
import ErrorBoundry from '../error-boundry';




// export default class PeoplePage extends Component<IPeoplePageState,IPeoplePageProps> {
//   swapiService = new SwapiService()
//   state = {
//     selectedPerson: "3",
//     hasError: false
//   };

 

//   onPersonSelected = (selectedPerson?:string | null) => {
//     this.setState({ selectedPerson });
//   };

//   render() {

//     if (this.state.hasError) {
//       return <ErrorIndicator />;
//     }

//     const itemList:JSX.Element = (
//       <ItemList onItemSelected={this.onPersonSelected} 
//       getData={this.swapiService.getAllPeople}
//       renderItem={(item)=> {return `${item.name} (${item.gender}, ${item.birthYear})`}
//       }/>
//     )
//     const personeDetails:JSX.Element = (
//       <ErrorBoundry>
//       <ItemDetails personId={this.state.selectedPerson} />
//       </ErrorBoundry>
//     )

//     return (
      
//         <Row left={itemList} right={personeDetails}/>
      
      
//     );
//   }
// }
