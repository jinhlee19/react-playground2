import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container1">
      <h1 className="countNum">{count}</h1>
      <button className="counterbtn" onClick={decrease}>-</button>
      <button className="counterbtn" onClick={increase}>+</button>
    </div>
  );
}
export default App;
