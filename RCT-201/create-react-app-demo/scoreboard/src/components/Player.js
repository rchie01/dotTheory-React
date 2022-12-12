import React, { memo } from "react";
import Counter from "./Counter";
import { Consumer } from "./Context";

const Player = ({ index }) => {
  return (
    <div className="player">
      <Consumer>
        {({ players, actions }) => {
          return (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              {players[index].name}
            </span>
          );
        }}
      </Consumer>

      <Counter index={index} />
    </div>
  );
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
};

export default memo(Player, playerPropsAreEqual);
