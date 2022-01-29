import { useEffect, useState } from "react";
import Header from "./components/Header";
import formatTime from "./lib/formatTime";

function App() {
  const [time, setTime] = useState(0); //time in ms

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime((time) => time + 45);
    }, 45);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button className="button">Start</button>
        <button className="button">Stop</button>
        <button className="button">Reset</button>
      </div>
    </div>
  );
}

export default App;
