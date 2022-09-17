import React from "react"
import { UserDetails } from "../MainComponent";
import { useContext } from "react";
const BabyChildComponent = () => {
    var FetchedData = useContext(UserDetails)
    return (
        <>
            <h2>This is Baby Child  component,Here we are accessing data which was passed to parent
                Component as props.</h2>
            <label>Name</label>
            : {FetchedData.state.name}<br /><br />
            <label>Age</label>
            : {FetchedData.state.Age}
            <br />
            Movie : {FetchedData.Movie.name} and Actor is : {FetchedData.Movie.Actor}
        </>
    )
}
export default BabyChildComponent;
