import React,{ useState, useRef, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const textareaRef = useRef();
     
    useLayoutEffect(() => {
        setWidth(textareaRef.current.clientWidth);
        setHeight(textareaRef.current.clientHeight);  
    })

    return(
        <>
            <center>useLayoutEffect</center>
            <span>Width : {width} px</span><br />
            <span>Height : {height} px</span><br />
            <textarea ref={textareaRef} onClick={() => setWidth(0)}/>
            <hr />
        </>
    )
}

export default UseLayoutEffect
