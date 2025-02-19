import React from "react";
import { filterTodos } from "./utils";
function MemoTodo({todos,tab}){
    const todoArr = filterTodos(todos,tab)
    return(
        <div>
            <ul>
                {todoArr.map(todo=>(
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default MemoTodo;