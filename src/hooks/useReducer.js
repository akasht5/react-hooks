import React,{ useReducer } from 'react'

const limitRGB = (num) => {
    if(num<0){
        return 0
    }else if(num>255){
        return 255
    }else{
        return num
    }
}

const reducer = (state,action) => {
    switch(action.type){
        case 'INC_R':
            return{
                ...state,
                r: limitRGB(state.r + 50)
            }
        case 'DEC_R':
            return{
                ...state,
                r: limitRGB(state.r - 50)
            }
        case 'INC_G':
            return{
                ...state,
                g: limitRGB(state.g + 50)
            }
        case 'DEC_G':
            return{
                ...state,
                g: limitRGB(state.g - 50)
            }
        case 'INC_B':
            return{
                ...state,
                b: limitRGB(state.b + 50)
            }
        case 'DEC_B':
            return{
                ...state,
                b: limitRGB(state.b - 50)
            }
        default :
            return state
    }
}

const UseReducer = () => {
    let initialState = {
        r: 0,
        g: 0,
        b: 0
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    const { r,g,b } = state;

    return(
        <>
            <center><h1 style={{ color:`rgb(${r},${g},${b})`}}>useReducer example</h1></center>
            <span>{r} R </span>
            <button onClick={() => dispatch({ type:'INC_R'})}>+</button>
            <button onClick={() => dispatch({ type:'DEC_R'})}>-</button><br />
            <span>{g} G </span>
            <button onClick={() => dispatch({ type:'INC_G'})}>+</button>
            <button onClick={() => dispatch({ type:'DEC_G'})}>-</button><br />
            <span>{b} B </span>
            <button onClick={() => dispatch({ type:'INC_B'})}>+</button>
            <button onClick={() => dispatch({ type:'DEC_B'})}>-</button>
            <hr />
        </>
    )
}

export default UseReducer