import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { IrandomPlanet, ITransfomedPerson, ITransfomedStarship } from '../../types';

export interface IwithData{
  getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>
}

const withData = ( View:any, getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>):any => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
console.log(this.props.children)
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
