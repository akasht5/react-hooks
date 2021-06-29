import React,{ useState, useCallback } from 'react'

const myFunctions = new Set();

const UseCallback = () => {
    const [count,setCount] = useState(0);
    const [otherCount,setOtherCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count => count + 1);
    },[count])

    const decrement = useCallback(() => {
        setCount(count => count - 1);
    },[count])

    const incrementOtherCount = useCallback(() => {
        setOtherCount(otherCount => otherCount + 1);
    },[otherCount])

    myFunctions.add(increment);
    myFunctions.add(decrement);
    myFunctions.add(incrementOtherCount);

    console.log(myFunctions);

    return(
        <>  
            <center>useCallback example</center>
                <button onClick={increment}>+</button>
                <span> {count} </span>
                <button onClick={decrement}>-</button>
            <hr />
        </>
    )
}

export default UseCallback