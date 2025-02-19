import React, { useState, memo } from "react";
function CounterM(){
    const [count,setCount] = useState(0)
    console.log("Child comp.. counter")
    return(
        <div>
            <h1>I am Child component: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment Child component</button>
        </div>
    )
}
export default memo(CounterM);