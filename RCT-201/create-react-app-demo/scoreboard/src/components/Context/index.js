import React, { useState, useRef } from "react";
import { createContext } from "react";

const ScoreboardContext = createContext();

export const Provider = ({ children }) => {
  const [players, setPlayers] = useState([
    {
      name: "Mag",
      score: 0,
      id: 1,
    },
    {
      name: "Ragus",
      score: 0,
      id: 2,
    },
    {
      name: "Syre",
      score: 0,
      id: 3,
    },
    {
      name: "Ves",
      score: 0,
      id: 4,
    },
  ]);

  const newID = useRef(5);

  const handlePlayerScore = (index, delta) => {
    setPlayers(prevState => {
      const updatedPlayers = [...prevState]
      const updatedPlayer = {...updatedPlayers[index]}

      updatedPlayer.score += delta
      updatedPlayers[index] = updatedPlayer

      return updatedPlayers
    })
  };

  const handleRemovePlayer = (id) => {
    setPlayers(prevState => prevState.filter((player) => player.id !== id))
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevState) => [
      ...prevState,
      {
        name: name,
        score: 0,
        id: newID.current++,
      },
    ]);
  };

  return (
    <ScoreboardContext.Provider
      value={{
        players,
        actions: {
          handleScore: handlePlayerScore,
          removePlayer: handleRemovePlayer,
          addPlayer: handleAddPlayer,
        }
      }}
    >
      {children}
    </ScoreboardContext.Provider>
    
  );
};

export const Consumer = ScoreboardContext.Consumer;
