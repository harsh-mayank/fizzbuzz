import React, {useState} from 'react';
import './App.css';
import FizzBuzz from './components/FizzBuzz';

function App() {

  let [count, setCounter] = useState(1);

  const handleCounter = (event) => {
    console.log(event);
    setCounter((prevCount)=>prevCount+=1)
  }

  return (
    <div className="App">
      <button onClick={handleCounter}>Counter</button>
      <FizzBuzz nums = {count}/>
    </div>
  );
}

export default App;
