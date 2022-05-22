import { useState } from "react";
import Header from "./components/Header";
import formatTime from "./lib/formatTime";
import ResetButton from "./components/ResetButton";
import ControlButton from "./components/ControlButton";

function App() {
  const [time, setTime] = useState(0); //time in ms
  const [timerID, setTimerID] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <ControlButton
          timerID={timerID}
          setTimerID={setTimerID}
          setTime={setTime}
        />
        <ResetButton setTime={setTime} setTimerID={setTimerID} />
      </div>
    </div>
  );
}

export default App;
