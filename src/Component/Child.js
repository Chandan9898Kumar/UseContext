import React, { useEffect } from "react"
import { UserDetails } from "../MainComponent";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
const ChildComponent = () => {
  var FetchedData = useContext(UserDetails)
  const location = useLocation()
  useEffect(() => {
    FetchedData.Update()
  }, [])

  return (
    <>
      <h2>This is Child component,Here we are accessing data which was passed to parent
        Component as props.</h2>
      <label>Name</label>
      : {FetchedData.state.name}<br /><br />
      <label>Age</label>
      : {FetchedData.state.Age}<br />
      Location : Your Route Location is : {location.pathname.replace('/', 'Home ')}
    </>
  )
}
export default ChildComponent;
