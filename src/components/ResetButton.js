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
    setTime(new Date(2000, 1, 1));
  }
}

export default ResetButton;
