import React, { useState } from "react";

const Counter = function() {
  let [count, setCount] = useState(5);

  function increment() {
    setCount(++count);
  }

  function decrement() {
    setCount(--count);
  }

  return (
    <div className="Counter">
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;