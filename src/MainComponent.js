import React, { useState } from "react";
import ParentComponents from './Component/Parent';
const UserDetails = React.createContext(null)
const MainComponents = () => {
    var [Data] = useState({ name: 'lunganda', Age: '89' })
    var [Movie] = useState({ name: 'John Wick', Actor: 'keenu reeves'})


    const [state, setState] = useState(Data)
    const Update = () => {
        setTimeout(() => {
            setState({
                name: 'kohima',
                Age: '67'
            })

        }, 2000);
    }

    // passed data as an object.
    return (
        <>
            <h2>Main component, Here we are passing data to parent component</h2><br /><hr />
            <UserDetails.Provider value={{ state: state, Update: Update ,Movie:Movie}} >
                <ParentComponents  />
            </UserDetails.Provider>
        </>
    )
}
export { UserDetails };
export default MainComponents;