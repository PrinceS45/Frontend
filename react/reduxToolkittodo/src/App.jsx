import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      
      
      <h1>Learn about resux toolkit</h1>
      <AddTodo />
      <Todo/>
      </>
  )
}

export default App
