function StartButton({ setTime, timerID, setTimerID }) {
  return (
    <button className="button" onClick={startTimer}>
      Start
    </button>
  );

  function startTimer() {
    if (timerID != null) return;
    const ID = setInterval(() => {
      setTime((time) => {
        const newTime=new Date(time);
        newTime.setMilliseconds(newTime.getMilliseconds()+45);
        return newTime;
      });
    }, 45);
    setTimerID(ID);
  }
}

export default StartButton;
