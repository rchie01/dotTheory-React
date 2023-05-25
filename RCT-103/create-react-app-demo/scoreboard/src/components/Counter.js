import React from "react";
import PropTypes from "prop-types";

const Counter = ({id, score, handleScore}) => (
  <div className="counter">
    <button className="counter-action decrement" onClick={() => { handleScore(id, -1)}}>-</button>
    <span className="counter-score">{score}</span>
    <button className="counter-action increment" onClick={() => { handleScore(id, +1)}}>+</button>
  </div>
);

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  handleScore: PropTypes.func,
};

export default Counter;
