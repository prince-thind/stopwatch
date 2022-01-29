function formatTime(time) {
  const ms = ZeroPad(getMilliseconds(time), 3);
  const seconds = ZeroPad(getSeconds(time), 2);
  const minutes = ZeroPad(getMinutes(time), 2);

  return `${minutes}:${seconds}:${ms}`;
}

function ZeroPad(time, number) {
  time += "";
  while (time.length < number) {
    time = "0" + time;
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
