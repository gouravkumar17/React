import React, { useState } from "react";
import MemoTodo from "./MemoTodo";
import { utils } from "./utils";
let todos = utils()
function CallTodo(){
    const [tab,setTab] = useState("all")
    return(
        <div>
            <button onClick={()=>setTab("all")}>All</button>
            <button onClick={()=>setTab("completed")}>Completed</button>
            <button onClick={()=>setTab("notcompleted")}>Not Completed</button>
            <MemoTodo todos={todos} tab={tab}/>
        </div>
    )
}
export default CallTodo;