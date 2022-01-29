import { useState } from "react";
import Header from "./components/Header";
import formatTime from "./lib/formatTime";
import StartButton from "./lib/StartButton";
import StopButton from "./lib/StopButton";
import ResetButton from "./lib/ResetButton";

function App() {
  const [time, setTime] = useState(0); //time in ms
  const [timerID, setTimerID] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <StartButton
          setTime={setTime}
          timerID={timerID}
          setTimerID={setTimerID}
        />
        <StopButton
          setTimerID={setTimerID}
        />{" "}
        <ResetButton
          setTime={setTime}
          setTimerID={setTimerID}
        />
      </div>
    </div>
  );
}

export default App;
