
import { useEffect, useState } from 'react';

function App() {

  //Below line for manige the start and atop btn
  const [isRunning,setIsRunning] = useState(false);

  const[elapsed,setElapsed] = useState(0);

  // using useEffect to setup the time
  useEffect(()=>{

    let intervalId;

    if(isRunning){
      intervalId =  setInterval( () => {
        setElapsed((prevElapsedTime)=>prevElapsedTime+1);
      },1000);
    }else{
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  },[isRunning]);


  const startStop = () => {
    setIsRunning( (previousValue) => !previousValue);
  }
  // we are taking sec as input para and then converting into minutes

  const timeFormater = (sec) => {

    let min = Math.floor(sec/60);
    let remaingSec = sec%60;

    return `${min}:${remaingSec < 10 ? "0":""}${remaingSec}`;

  }


  const reset = () => {
    setIsRunning(false);
    setElapsed(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {timeFormater(elapsed)}</p>
      <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default App;
