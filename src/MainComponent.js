import React, { useState } from "react";
import ParentComponents from './Component/Parent';
const UserDetails=React.createContext(null)
const MainComponents=()=> {
var [Data]=useState({name:'lunganda',Age:'89'})
return (
    <>
    <h2>Main component, Here we are passing data to parent component</h2><br /><hr />
    <UserDetails.Provider  value={Data} >
    <ParentComponents        value={Data}/>
    </UserDetails.Provider>
    </> 
)
}
export {UserDetails};
export default MainComponents;
