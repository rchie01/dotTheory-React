import React from "react";
import PropTypes from "prop-types";

const Stats = ({ totalPlayers, listOfPlayers }) => {
  const totalPoints = listOfPlayers.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  totalPlayers: PropTypes.number,
  listOfPlayers: PropTypes.arrayOf(PropTypes.object),
};

export default Stats;
