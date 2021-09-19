function Timer({ time }) {
  return <div className="container mt-3 text-center">{getTime(time)}</div>;
}

function getTime(time) {
  return zeroPad(time.min) + ':' + zeroPad(time.sec);

  function zeroPad(num) {
    num += '';
    if (num.length === 1) {
      return '0' + num;
    }
    return num;
  }
}

export default Timer;
