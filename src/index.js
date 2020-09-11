import React from "react";
import ReactDOM from "react-dom";

function Lake({ lakename }) {
  return <p>name of the lake: {lakename}</p>;
}

function App() {
  return (
    <div>
      <Lake lakename="talao Pali" />
      <Lake lakename="Dombivli talao Pali" />
      <Lake lakename="Powai Lake" />
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

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
