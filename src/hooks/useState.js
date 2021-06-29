import React,{ useState } from 'react'

const UseState = () => {
    const [isRed,setIsRed] = useState(true);

    return(
        <>
            <center>useState example</center>
            <h1 style={{ color:isRed ? 'red' : 'limegreen',cursor:'pointer',userSelect:'none',width:'400px',margin:'15px auto' }} onClick={() => setIsRed(!isRed)}>Toggle my color</h1>
            <hr />
        </>
    )
}

export default UseState