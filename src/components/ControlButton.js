import StartButton from "./StartButton";
import StopButton from "./StopButton";

export default function ControlButton({ timerID, setTimerID, setTime }) {
  if (timerID) {
    return <StopButton setTimerID={setTimerID} />;
  }
  return (
    <StartButton setTime={setTime} timerID={timerID} setTimerID={setTimerID} />
  );
}
