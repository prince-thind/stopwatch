import { useState } from "react";
import Header from "./components/Header";
import ResetButton from "./components/ResetButton";
import Time from "./components/Time";
import ControlButton from "./components/ControlButton";

function App() {
  const [time, setTime] = useState(new Date(2000,1,1));
  const [timerID, setTimerID] = useState(null);

  return (
    <div className="App">
      <Header />
      <Time time={time}/>
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
