import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const AddPlayerForm = () => {
  
  return (
    <Consumer>
      {context => {
        const playerInput = React.createRef();
        const handleSubmit = (e) => {
          e.preventDefault();
          context.actions.addPlayer(playerInput.current.value);
          e.currentTarget.reset();
        }
        return(
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              ref={playerInput}
              placeholder="Enter a player's name"
            />
            
            <input 
              type="submit"
              value="Add Player"
            />
          </form>
        )
      }}
    </Consumer>
    
  );
}

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func
};

export default AddPlayerForm;
