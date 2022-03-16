import React, { Component } from 'react';
import Spinner from '../spinner';
import { IWithSevice } from '../../types';

const withData = ( View:any):any => { //getData:()=>Promise<ITransfomedPerson[] |  IrandomPlanet[] | ITransfomedStarship[]>
  return class extends Component<IWithSevice> {

    state = {
      data: null
    };

    // componentDidUpdate(prevProps:any){
    //   if( prevProps.getData !== getData){
    //     this.update()
    //   }
    // }
    componentDidMount() {
      this.props.getData()
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
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
