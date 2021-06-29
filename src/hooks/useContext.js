import React from 'react'
import { createContext, useContext } from 'react'

const UserContext = createContext({
    firstname:'John',
    lastname:'Doe',
    email:'johndoe@gmail.com'
});

const LevelThree = () => {
    const user = useContext(UserContext);
    
    return(
        <>
            <h4>Level Three</h4>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user.email}</p>
        </>
    )
}

const LevelTwo = () => {
    return(
        <>
            <h3>Level Two</h3>
            <LevelThree />
        </>
    )
}

const LevelOne = () => {
    return(
        <>
            <h2>Level One</h2>
            <LevelTwo />
        </>
    )
}

const ContextComponent = () => {
    const user = {
        firstname:'James',
        lastname:'Jameson',
        email:'james1000@gmail.com'
    }

    return(
        <UserContext.Provider value={user}>
            <center>useContext example</center>
            <LevelOne />
            <hr />
        </UserContext.Provider>
    )
}

export default ContextComponent