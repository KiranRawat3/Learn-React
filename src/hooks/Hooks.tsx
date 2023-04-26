import React, { useState } from "react";
function Hooks() {
  const state = useState();
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>My favourite color is {color}</h2>
      <button type="button" onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button type="button" onClick={() => setColor("blue")}>
        blue
      </button>
      <button type="button" onClick={() => setColor("green")}>
        green
      </button>
    </>
  );
}
export default Hooks;
