import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ score, setScore ] = useState(0)
  const [ message, setMessage ] = useState('Welcome!')
  const [ data, setData ] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log("oh noes!", err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h1>{score}</h1>
        <button onClick={()=>{setScore(prevState => prevState + 1)}}>Click me!</button>
        <img src={data} alt="A random dog breed"/>
      </header>
    </div>
  );
}

export default App;
