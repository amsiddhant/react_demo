import React, { useState } from "react";
import C from "./C";

export default function A() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <C count={count}></C>
    </div>
  );
}
