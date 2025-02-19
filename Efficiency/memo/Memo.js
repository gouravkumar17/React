import React, { useState } from "react";
function Memo(){
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(1000)
    function isEven(){
        return count%2===0
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>{isEven()?"Count is even":"Count is odd"}</h1>
            <h1>Number: {number}</h1>
            <button onClick={()=>setNumber(number-10)}>Decrement</button>
        </div>
    )
}
export default Memo;