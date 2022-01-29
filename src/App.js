import { useState } from "react";
import Header from "./components/Header";
import formatTime from "./lib/formatTime";

function App() {
  const [time, setTime] = useState(154525); //time in ms
  return (
    <div className="App">
      <Header />
      <div className="time">
        {formatTime(time)}
      </div>
    </div>
  );
}

export default App;
