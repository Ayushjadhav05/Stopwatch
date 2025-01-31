import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="container">
      <h1 className="title">⏱ Stopwatch</h1>
      <div className="time-display">
        <span className="minutes">{("0" + Math.floor(time / 60000) % 60).slice(-2)}</span>:
        <span className="seconds">{("0" + Math.floor(time / 1000) % 60).slice(-2)}</span>:
        <span className="milliseconds">{("0" + Math.floor(time / 10) % 100).slice(-2)}</span>
      </div>
      <div className="controls">
        {running ? (
          <button className="btn stop" onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button className="btn start" onClick={() => setRunning(true)}>Start</button>
        )}
        <button className="btn reset" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
