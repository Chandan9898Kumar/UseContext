import React from "react"
import ChildComponent from '../Component/Child'
const ParentComponents=(props)=> {
return(
    <>
    <h2>This is Parent component, Here instead of passing data as a props,child component
    Can Directly fetch all data by using useContext</h2><br /><br /><hr />
    <ChildComponent />

    </>
)
}
export default ParentComponents;
