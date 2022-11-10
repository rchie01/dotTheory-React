import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({handleScore, id, score}) => (
  <div className="counter">
    <button className="counter-action decrement" onClick={()=>{handleScore(id, -1)}}> - </button>
    <span className="counter-score">{score}</span>
    <button className="counter-action increment" onClick={()=>{handleScore(id, 1)}}> + </button>
  </div>  
  );

  Counter.propTypes = {
    handleScore: PropTypes.func,
    id: PropTypes.number,
    score: PropTypes.number
  };

  export default Counter;
