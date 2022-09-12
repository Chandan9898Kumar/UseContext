import React from "react"
import { UserDetails } from "../MainComponent";
import { useContext } from "react";
const ChildComponent=()=> {
var FetchedData=useContext(UserDetails)
return (
    <>
    <h2>This is Child component,Here we are accessing data which was passed to parent 
     Component as props.</h2>
     <label>Name</label>
      : {FetchedData.name}<br /><br />
     <label>Age</label>
      : {FetchedData.Age}
    </>
)
}
export default ChildComponent;