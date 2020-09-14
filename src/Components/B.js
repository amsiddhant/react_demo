import React, { useState } from "react";
import C from "./C";

export default function B() {
  const [number, setNumber] = useState(10);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
      <C num={number}></C>
    </div>
  );
}
