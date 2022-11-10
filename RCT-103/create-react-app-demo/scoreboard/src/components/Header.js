import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({totalPlayers, listOfPlayers, title}) => (
    <header>
        <Stats
            total={totalPlayers}
            playerList={listOfPlayers}
        />
        <h1>{title}</h1>
        <Stopwatch />
    </header>
);

Header.propTypes = {
    totalPlayers: PropTypes.number,
    listOfPlayers: PropTypes.arrayOf(PropTypes.object),
    tile: PropTypes.string
};

Header.defaultProps = {
    title: "Scoreboard"
};

export default Header;
