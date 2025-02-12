import React, { useContext } from 'react'
import { myContext } from './StateProvider'

export default function Count() {
    const {count,setCount} = useContext(myContext)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>++++</button>
    </div>
  )
}
