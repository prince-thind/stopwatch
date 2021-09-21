function Timer({ time }) {
  return <div className="container mt-3 text-center">{getTime(time)}</div>;
}

function getTime(time) {
  return zeroPad(convertToMin(time)) + ':' + zeroPad(convertToSec(time));

  function zeroPad(num) {
    num += '';
    if (num.length === 1) {
      return '0' + num;
    }
    return num;
  }

  function convertToMin(time){
    return Math.trunc(time/60);
  }

  function convertToSec(time){
    return time%60;
  }


  
}

export default Timer;
