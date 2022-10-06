import './App.css';
import FizzBuzz from './components/FizzBuzz';

function App() {
  const n = 100;
  let a = [...Array(n+1).keys()].slice(1);

  return (
    <div className="App">
      {a.map((val)=> <FizzBuzz nums = {val}/>)}
    </div>
  );
}

export default App;
