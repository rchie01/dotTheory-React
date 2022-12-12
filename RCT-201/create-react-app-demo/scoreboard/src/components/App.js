import React from "react";
import Header from "./Header";
import Player from "./Player";
import { Consumer } from "./Context";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      <Consumer>
        {({ players }) => {
          return players.map((player, index) => (
            <Player index={index} key={player.id} />
          ));
        }}
      </Consumer>

      <AddPlayerForm />
    </div>
  );
};

export default App;
