import React, { useRef } from "react";
import { Consumer } from "./Context";

const AddPlayerForm = () => {
  let input = useRef();

  return (
    <Consumer>
      {({ actions }) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          actions.addPlayer(input.current.value);
          e.currentTarget.reset();
        };

        return (
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" ref={input} placeholder="Enter player name" />
            <input type="submit" value="Add Player" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;
