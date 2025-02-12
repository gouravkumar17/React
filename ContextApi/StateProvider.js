import React, { createContext, useState } from 'react'
import StateConsumer from './StateConsumer'
import Count from './Count'
const myContext = createContext()
export default function StateProvider() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <myContext.Provider value={{count,setCount}}>
        <StateConsumer/>
        <Count/>
      </myContext.Provider>
    </div>
  )
}
export {myContext}
