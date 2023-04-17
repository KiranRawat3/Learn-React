import React, { useReducer, useState } from "react";
const initialState = 0;
export default function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state}</p>
      <button type="button" onClick={() => dispatch({ type: "Increment" })}>
        Increament
      </button>
      <button type="button" onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
    </>
  );
  function reducer(state: any, action: any) {
    console.log(state, action);
    if (action.type == "Increment") {
      return state + 1;
    }
    if (action.type == "Decrement") {
      return state - 1;
    }
    return state;
  }
}

//   const [count,setCount]=useState(0);

// return(
//   <>
//   <p>{count}</p>
//   <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
//   <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>

//   </>

//     );
