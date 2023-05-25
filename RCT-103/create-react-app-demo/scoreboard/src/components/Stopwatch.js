import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime((prevState) => prevState + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{elapsedTime}</span>
      <button onClick={() => setIsRunning((prevState) => !prevState)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setElapsedTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;
