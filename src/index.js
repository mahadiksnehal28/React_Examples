import React from "react";
import ReactDOM from "react-dom";

function Lake({ name }) {
  return <h2>welcome to {name}</h2>;
}

function SkiResort({ namer }) {
  return <h2>welcome to {namer}</h2>;
}

function App(props) {
  return (
    <div>
      {props.season === "Summer" ? (
        <Lake name="Pawai lake"></Lake>
      ) : props.season === "winter" ? (
        <SkiResort namer="manali ski resort"></SkiResort>
      ) : (
        <h2>"select winter or summer"</h2>
      )}
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
