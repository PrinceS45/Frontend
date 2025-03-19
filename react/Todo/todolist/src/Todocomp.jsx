import React from 'react'
import { useState  } from 'react'
import {nanoid} from 'nanoid'
function Todocomp() {
   const [Todos, setTodos] = useState([])
   const [Newtodo, setNewtodo] = useState("")
 
   let addNewTask = () => {
        setTodos([...Todos , Newtodo]) ; 
        setNewtodo('') ; 
   }

  return (
    <div>
        <input type="text" placeholder='Add a task' value={Newtodo} onChange={(event) => {
            setNewtodo(event.target.value) ; 
        }} />
      <br />
      <button onClick={addNewTask} >
        Click to Add
      </button>
      <br />
      <br />

      <hr />
      <h4>TodoList</h4>
      <ul>
      {
        Todos.map((todo) => (
          <li key={nanoid()}>{todo}</li>
        ))
      }
      </ul>
    </div>
  )
}


export default Todocomp

