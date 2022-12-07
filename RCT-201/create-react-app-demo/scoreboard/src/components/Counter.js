import React from 'react';
import { Consumer } from './Context'

const Counter = ({index}) => {
  return(
    <Consumer>
      {({players, actions})=>{
        return(
          <div className="counter">
            <button className="counter-action decrement" onClick={()=>{actions.handleScore(players[index].id, -1)}}> - </button>
            <span className="counter-score">{players[index].score}</span>
            <button className="counter-action increment" onClick={()=>{actions.handleScore(players[index].id, 1)}}> + </button>
          </div> 
        )
      }}
    </Consumer>
  )
};

export default Counter;
