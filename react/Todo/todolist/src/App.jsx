import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todocomp from './todocomp'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    
    <Todocomp/>
   </>
  )
}

export default App
