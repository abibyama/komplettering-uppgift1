import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);

  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Räkna!</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Öka!</button>
      <button onClick={decrease}>Minska!</button>
    </div>
  );
}

export default Counter;