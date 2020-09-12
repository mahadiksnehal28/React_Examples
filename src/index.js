//useEffect example
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function CheckBox() {
  var [checked, setChecked] = useState(false);
  useEffect(() => {
    alert("useeffect function");
  });
  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked = !checked))}
      />
      {checked ? "Checked" : "not checked"}
    </div>
  );
}
ReactDOM.render(<CheckBox />, document.getElementById("root"));

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
