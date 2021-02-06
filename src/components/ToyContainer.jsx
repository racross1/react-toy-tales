import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  return(
    <div id="toy-collection">
      {props.toys.map(t => <ToyCard delete={props.delete} addLike={props.addLike} toy={t} key={t.id}/>)}
    </div>
  );
}



export default ToyContainer;
