function StartButton({ setTime, timerID, setTimerID }) {
  return (
    <button className="button" onClick={startTimer}>
      Start
    </button>
  );

  function startTimer() {
    if (timerID != null) return;
    const ID = setInterval(() => {
      setTime((time) => time + 45);
    }, 45);
    setTimerID(ID);
  }
}

export default StartButton;
