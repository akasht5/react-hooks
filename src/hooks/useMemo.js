import React,{ useState, useMemo } from 'react'

const UseMemo = () => {
    const [isBlue,setIsBlue] = useState(true);
    const [num,setNum] = useState(1);
    
    const fibonacci = (n) => {
        if (n <= 1) {
          return 1;
        }
      
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    const fab = useMemo(() => fibonacci(num),[num]);

    return(
        <>
        <center>useMemo example</center>
        <h1 style={{ color: isBlue ? 'blue' : 'yellow', userSelect:'none', cursor:'pointer' }}
        onClick={() => setIsBlue(!isBlue)}>This is the component</h1>
        <span>The fab of {num} is {fab}</span><br />
        <button onClick={() => { setNum(num => num + 1)}}>+</button>

        <hr />
        </>
    )
}

export default UseMemo