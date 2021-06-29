import React,{ useState, useEffect } from 'react'

const UseEffect = () => {
    const [user,setUser] = useState('')

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

            const user = await response.json();

            setUser(user);
        }

        fetchUser();
    },[])

    return(
        <>
            <center>useEffect example</center>
            <p>{user.username}</p> 
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <hr />
        </>
    )
}

export default UseEffect