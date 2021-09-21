import { useEffect, useState } from 'react';
import Header from './components/header';
import Reset from './components/reset';
import TimeForm from './components/time-form';
import Timer from './components/timer';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (time > 0) {
        setTime((time) => time - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className="App">
      <Header />
      <TimeForm setTime={setTime} />
      <Timer time={time} />
      <Reset setTime={setTime} />
    </div>
  );
}

export default App;
