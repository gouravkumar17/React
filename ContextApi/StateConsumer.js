import React,{useContext} from 'react'
import { myContext } from './StateProvider'

export default function StateConsumer() {
    var {count,setCount} = useContext(myContext)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>++++</button>

      <h1>Gourav Kumar</h1>
    </div>
  )
}
