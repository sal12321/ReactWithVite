import {useState} from "react";
export default function Counter(){

//    let arr = useState(0);
//    // initial v
//    console.log(arr);

// let [stateVariable, setStateVariable] = useState(0);

  let [count, setCount] = useState(0);

  let incCount = ()=> {

    count+=1;
    setCount(count); // this will trigger the re-render
    console.log(count);
  }

  return (
    <>
    <h3>Count = {count} </h3>
    <button onClick={incCount} >HIT ME </button>
    </>
  )
}