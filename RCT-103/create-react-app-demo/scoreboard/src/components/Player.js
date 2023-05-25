import React, { memo } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({
  name,
  id,
  score,
  isHighScore,
  handleScore,
  removePlayer,
}) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>
        ✖
      </button>
      <Icon isHighScore={isHighScore} />
      {name}
    </span>
    <Counter id={id} score={score} handleScore={handleScore} />
  </div>
);

const playerPropsAreEqual = (prevProp, newProp) => {
  return (
    prevProp.score === newProp.score &&
    prevProp.isHighScore === newProp.isHighScore
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  isHighScore: PropTypes.bool.isRequired,
  handleScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default memo(Player, playerPropsAreEqual);
