import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({playerList, total}) => {
    const totalPoints = playerList.reduce((total, player)=>{
        return total + player.score
    }, 0);

    return(
        <table className="stats">
        <tbody>
            <tr>
            <td>Players:</td>
            <td>{total}</td>
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
    playerList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        id: PropTypes.number
    })),

    totalPlayers: PropTypes.number
};

export default Stats;
