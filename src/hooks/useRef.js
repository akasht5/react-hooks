import React,{ useState, useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);
    const [count,setCount] = useState(0);
    const timer = useRef(null);

    const focusMe = () => {
        inputRef.current.focus();
    }

    const clearTimer = () => {
        clearTimeout(timer.current);
    }

    useEffect(() => {
        timer.current = setTimeout(() => {
            setCount(count + 1);
        },1000)
        
    },[count])

    return(
        <>  
            <center>useRef example</center>
            <input type="text" ref={inputRef} /><br />
            <button onClick={() => focusMe()}>Click me to focus the input</button>
            <br />
            <span>{count}</span>
            <button onClick={clearTimer}>Stop the count</button>
            <hr />
        </>
    )
}

export default UseRef