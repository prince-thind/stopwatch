function StopButton({ setTimerID }) {
  return (
    <button className="button" onClick={stopTimer}>
      Stop
    </button>
  );

  function stopTimer() {
    setTimerID(timerID=>{
        clearInterval(timerID);
        return null;
    });
  }
}

export default StopButton;
