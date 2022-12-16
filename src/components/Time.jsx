function Time({ time }) {
  return <div className="time">{formatTime(time)}</div>;
}

function formatTime(time) {
  const ms = String(time.getMilliseconds()).padStart(3, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const hours = String(time.getHours()).padStart(2, 0);

  return `${hours}:${minutes}:${seconds}:${ms}`;
}

export default Time;
