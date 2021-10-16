import React from 'react'
import { useCounter } from '../hook/useCounter'
import "./counter.css"

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter(100);

    return (
        <>
          <h1>Counter with Hook {state}</h1>  
          <hr/>
          <button 
           className="btn btn-primary" 
           onClick={increment}          
           >+1</button>
            <button 
           className="btn btn-primary" 
           onClick={reset}          
           >RESET</button>
           <button 
           className="btn btn-primary"           
           onClick={decrement}  
           >-1</button>
        </>
    )
}
