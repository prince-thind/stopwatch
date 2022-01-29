function formatTime(time) {
  const ms = ZeroPad(getMilliseconds(time));
  const seconds = ZeroPad(getSeconds(time));
  const minutes = ZeroPad(getMinutes(time));

  return `${minutes}:${seconds}:${ms}`;
}

function ZeroPad(time) {
  time += "";
  if (time.length === 1) {
    return "0" + time;
  }
  return time;
}

function getMilliseconds(time) {
  return time % 1000;
}
function getTotalSeconds(time) {
  return Math.trunc(time / 1000);
}
function getSeconds(time) {
  const totalSeconds = getTotalSeconds(time);
  return totalSeconds % 60;
}
function getMinutes(time) {
  const totalSeconds = getTotalSeconds(time);
  return Math.trunc(totalSeconds / 60);
}

export default formatTime;
