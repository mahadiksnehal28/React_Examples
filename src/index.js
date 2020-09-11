import React from "react";
import ReactDOM from "react-dom";

const lakeList = [
  { id: 1, name: "talao pali", place: "Thane" },
  { id: 1, name: "pawai lake", place: "Pawai" }
];

function App({ lakes }) {
  return (
    <div>
      {lakes.map((lake, index) => (
        <div id={index.toString()}>
          <h2> lakename {lake.name} </h2>
          <p> Location: {lake.place} </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList}></App>, document.getElementById("root"));

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
