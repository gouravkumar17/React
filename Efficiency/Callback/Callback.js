import React, { useCallback, useState } from 'react'

const a = new Set()

export default function Callback() {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(1110);
    const handleIncrementC = useCallback(()=>{
        setCount(count+1);
    },[count])
    const handleDecrementC = useCallback(()=>{
        setCount(count-1);
    },[count])
    const handleIncrementN = useCallback(()=>{
        setNumber(number+1);
    },[number])
    const handleDecrementN = useCallback(()=>{
        setNumber(number-1);
    },[number])
    
    a.add(handleIncrementC)
    a.add(handleDecrementC)
    a.add(handleIncrementN)
    a.add(handleDecrementN)
    alert(a.size)
  return (
    <div>
        <h1>Count:{count}</h1>
        <h1>Number:{number}</h1>

      <button onClick={handleIncrementC}>Increment count</button>
      <button onClick={handleDecrementC}>Decrement count</button>
      <button onClick={handleIncrementN}>Increment number</button>
      <button onClick={handleDecrementN}>Decrement number</button>
    </div>
  )
}


// if any button is pressed, all the code and functions are re rendered

// useCallback() memoizes the whole function so that when there is a chnage in dependency then only the function is executed

// so according to this useCallback, only two functions (instead of 4) will be re rendered whenever there is a change in any of the two states