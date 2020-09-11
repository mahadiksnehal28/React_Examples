import React, { useState } from "react";
import ReactDOM from "react-dom";



function App(props) {
  var[status,changeStatus]=useState("open");
  return (
   <div>
     <p> Status : {status}</p>
 
     <button onClick={()=>changeStatus("closed") } >
     closed
     </button>
     <button onClick={()=>changeStatus("Open") } >
     Open
     </button>
     </div>
  ); //  {
}

ReactDOM.render(<App season="anything"></App>, document.getElementById("root"));

// function Hello({library,message,number}) {
//  // console.log(props)
//  // console.log(Object.keys(props))
//   return (
//     <div>
//   <h1>Welcome to {library}</h1>
//   <p>Hey there {message}</p>
//   <p>Number {number}</p>
//   </div>

//   )
// }

// ReactDOM.render(
// <Hello library="React liberary" message="have fun!" number={4}></Hello>,
//   document.getElementById("root")
//   );

var[,second]=["a","b"];

console.log(second);