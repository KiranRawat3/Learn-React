import { Button } from "antd";
import React,{useEffect,useState} from "react";
function Counter(){
const [count,setCount]=useState(0);
console.log(count);
useEffect(()=>{
    if(count === 11 ){
        alert("Helooooooo")
    }
  // console.log("hhhhhhhhhhhhhhhhhhh")  
},[count]);
return(
<>
<button onClick={()=>setCount(count+1)}>click me</button>
<p>you clicked {count} times</p>
</>
);
}

export default Counter;