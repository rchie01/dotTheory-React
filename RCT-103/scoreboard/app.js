const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button
        className="remove-player"
        onClick={() => props.removePlayer(props.id)}
      >
        ✖
      </button>
      {props.name}
    </span>

    <Counter />
  </div>
);

const Counter = () => {
  const [score, setScore] = React.useState(0);

  const addScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const deductScore = () => {
    setScore((prevScore) => prevScore - 1);
  };

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => deductScore()}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => addScore()}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

const App = () => {
  const [players, setPlayer] = React.useState([
    {
      name: "Guil",
      id: 1,
    },
    {
      name: "Treasure",
      id: 2,
    },
    {
      name: "Ashley",
      id: 3,
    },
    {
      name: "James",
      id: 4,
    },
  ]);

  const handleRemovePlayer = (id) => {
    setPlayer((prevPlayer) => prevPlayer.filter((player) => player.id !== id));
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
