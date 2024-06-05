import './App.css';
import {useState} from 'react';

function App() {
  const[ counter , setCounter ]=useState(0);
  function clickedCounterInc(){
    setCounter(counter+1);
  }
  function clickedCounterDec(){
    setCounter(counter-1);
  }
  return (



    <div className='body'>
    
    <h1>
       {counter} 
    </h1>
    <div className='buttons'>
    <button onClick={clickedCounterInc}>Increment</button>
    <button onClick={clickedCounterDec}>Decrement</button>
    </div>
    
    </div>
    
  ); 
}

export default App;