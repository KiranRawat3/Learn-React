import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [number, SetNumber] = useState(0);
  const [dark, SetDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => SetNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => SetDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}
function slowFunction(num: any) {
  console.log("calling slow function");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
