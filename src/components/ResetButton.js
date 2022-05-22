function ResetButton({ setTime, setTimerID }) {
  return (
    <button className="button" onClick={resetTimer}>
      Reset
    </button>
  );

  function resetTimer() {
    setTimerID((timerID) => {
      clearInterval(timerID);
      return null;
    });
    setTime(0);
  }
}

export default ResetButton;
