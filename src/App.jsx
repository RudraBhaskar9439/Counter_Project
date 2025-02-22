import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 15

  const addValue = () => {
    console.log("CLicked", counter);
    if (counter == 20) {
      alert("Thats it")
      return

    }
    // counter = counter + 1
    counter = counter + 1
    setCounter(counter);

  }

  const removeValue = () => {
    console.log("Clicked", counter);
    if (counter == 0) {
      alert("Thats it")
      return
    }
    // counter = counter - 1
    counter = counter - 1
    setCounter(counter);

  }

  return (
    <>
      <h1>Counter App </h1>
      <h2>Counter value:{counter}</h2>
      <button
        onClick={addValue}>Add value</button>

      <button
        onClick={removeValue}>Remove value</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
