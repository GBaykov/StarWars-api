import React from 'react';

import './row.css';

export interface IRowProps {
  left:JSX.Element, 
  right:JSX.Element
}

const Row = ({left, right}:IRowProps) => {
  //const {left, right} = props;
return (
  <div className="row mb2">
  <div className="col-md-6">
    {left}
  </div>
  <div className="col-md-6">
  {right}
  </div>
</div>
)
}

export default Row;
