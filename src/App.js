import { useState } from "react";

function App() {
  const [counter,setCounter] = useState(0)

  const increment = () => {
    setCounter(currVal => {
      return currVal + 1
    })
  }
  const decrease = () => {
    if (counter === 0) return
    setCounter(currVal => {
      return currVal - 1
    })
  }
  return (
   <div>
    <p>counter: {counter}</p>
    <button onClick={decrease}>-</button>
    <button onClick={increment}>+</button>
   </div>
  );
}

export default App;
