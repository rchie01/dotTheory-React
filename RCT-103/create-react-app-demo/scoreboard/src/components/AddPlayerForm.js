import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddPlayerForm = ({addPlayer}) => {

    let input = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(input.current.value);
        e.currentTarget.reset();
    };

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input 
                type="text"
                ref={input}
                placeholder="Enter player name"
            />
            <input 
                type="submit"
                value="Add Player"
            />
        </form>
    );
};

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
};
    


export default AddPlayerForm;

