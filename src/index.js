//useEffect example
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  var [first, setfirstName] = useState("");
  var [second, setSecondName] = useState("");

  useEffect(() => {
    console.log(`First : ${first}`);
  }, [first]);
  useEffect(() => {
    console.log(`Second : ${second}`);
  }, [second]);
  return (
    <>
      <label>
        Favourite name :
        <input value={first} onChange={(e) => setfirstName(e.target.value)} />
      </label>
      <br />
      <hr />
      <label>
        second Favourite name :
        <input value={second} onChange={(e) => setSecondName(e.target.value)} />
      </label>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

//********/Multiple useStateds Example******
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function App(props) {

//   var[status,changeStatus]=useState("open");
//   const[Manager,setManager] = useState("Eve");
//   var[year, changeyear]=useState(2020);
//   return (
//     <React.Fragment>
//       <div>
//         <p>Year: {year} </p>
//         <button onClick={()=>changeyear(year+1)} >
//         change year
//         </button>
//         </div>
// <div>
//   <p> on Duty Manager = {Manager}</p>
//   <button onClick={()=>Manager==="Eve" ?setManager("Snehal"):setManager("Eve")}>
//     Manager
//   </button>
// </div>
//    <div>
//      <p> Status : {status}</p>
//      <button onClick={()=>changeStatus("closed") } >
//      closed
//      </button>
//      <button onClick={()=>changeStatus("Open") } >
//      Open
//      </button>
//      </div>
//      </React.Fragment>
//   ); //
//   }
// ReactDOM.render(
// <App></App>,
// document.getElementById("root"));
