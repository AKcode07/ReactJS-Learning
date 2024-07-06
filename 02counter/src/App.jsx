import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 10;
  const addValue = () => {
    setCounter(counter + 1);

    // counter += 1;
    // console.log(counter);
  };

  const remove = () => {
    setCounter(counter - 1);

    // counter += 1;
    // console.log(counter);
  };

  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter value: {counter} </h2>
      <button
      onClick={addValue}>Add value</button>
      <button onClick={remove}>Remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
