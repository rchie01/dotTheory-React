import React, { useState, useRef, useEffect } from "react";
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

  const [highScore, setHighScore] = useState();

  const newID = useRef(5);

  useEffect(() => {
    const playerScores = players.map((player) => player.score);
    setHighScore(Math.max(...playerScores));
  }, [players]);

  const handlePlayerScore = (id, delta) => {
    setPlayers((prevState) =>
      prevState.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }

        return player;
      })
    );
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
        players: players,
        actions: {
          handleScore: handlePlayerScore,
          removePlayer: handleRemovePlayer,
          addPlayer: handleAddPlayer,
        },
        highScore: highScore
      }}
    >
      {children}
    </ScoreboardContext.Provider>
    
  );
};

export const Consumer = ScoreboardContext.Consumer;
