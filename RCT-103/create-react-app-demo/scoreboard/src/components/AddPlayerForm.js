import React, { useRef } from "react";
import PropTypes from "prop-types";

const AddPlayerForm = ({ addPlayer }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(inputRef.current.value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" ref={inputRef} placeholder="Enter player name" />
      <input type="submit" value="Add Player" />
    </form>
  );
};

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func,
};

export default AddPlayerForm;
