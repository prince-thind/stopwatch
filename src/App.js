import { useState } from 'react';
import Header from './components/header';
import Reset from './components/reset';
import TimeForm from './components/time-form';
import Timer from './components/timer';

function App() {

 const [time,setTime]=useState({min:0,sec:0});
 
  return (
    <div className="App">
      <Header />
      <TimeForm />
      <Timer time={time}/>
      <Reset setTime={setTime}/>
    </div>
  );
}

export default App;
