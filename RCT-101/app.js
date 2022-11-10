const Header = (props) =>{
    console.log(props);
    return (
        <header>
            <h1>{ props.header }</h1>
            <span className="stats">Players: { props.activePlayers }</span>
        </header>
    );
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                { props.name }
            </span>
            <Counter />
        </div>
    );
};

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            playerScore: 0
        };
    };
  
    appPoint = () => {
        this.setState( (prevState) => ({
            playerScore: prevState.playerScore + 1
        }));
    };

    deductPoint = () => {
        if(this.state.playerScore > 0 ){
            this.setState( (prevState) => ({
                playerScore: prevState.playerScore - 1
            }));
        }
    };

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick = {() => this.deductPoint()}>-</button>
                <span className="counter-score">{this.state.playerScore}</span>
                <button className="counter-action increment" onClick = {() => this.appPoint()}>+</button>
            </div>
        );
    };
};

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            players: [
                {
                    playerName: "Mag",
                    id: 1
                },
                {
                    playerName: "Ragus",
                    id: 2
                },
                {
                    playerName: "Syre",
                    id: 3
                },
                {
                    playerName: "Ves",
                    id: 4
                }
            ]
        };
    };

    handleRemovePlayer = (id) => {
        this.setState( (prevState) => ({
            players: prevState.players.filter(player => player.id !== id)
        }));
    };
    
    render(){
        return (
            <div className="scoreboard">
                <Header 
                    header="Scoreboard" 
                    activePlayers = {this.state.players.length}
                />
    
                {/* Players List */}
                { this.state.players.map( player => {
                    return(
                        <Player 
                        name={player.playerName}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                       
                        />
                    );
                }) }
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
